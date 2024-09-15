import dropRight from 'lodash/dropRight';
import { useCallback, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import {
  Corner,
  Mosaic,
  getLeaves,
  MosaicNode,
  MosaicParent,
  getNodeAtPath,
  getPathToCorner,
  MosaicDirection,
  getOtherDirection,
  createBalancedTreeFromLeaves,
  updateTree,
  MosaicZeroState,
} from 'react-mosaic-component';

import Window from './window';
import Header from '../header';
import { Theme } from '../../types';
import SpinnerComponent from '../spinner';
import useFetch from '../../hooks/useFetch';
import { MosaicAppState } from '../../interfaces';
import { MOSAIC_STATE, THEMES } from '../../constants';
import { fetchFromServer, uniqId } from '../../helpers';

import { Classes } from '@blueprintjs/core';


const MosaicComponent: React.FC = () => {
  const [mosaicState, setMosaicState] = useState<MosaicAppState>(MOSAIC_STATE);

  const { currentNode, currentTheme } = mosaicState;

  const totalWindowCount = getLeaves(currentNode).length;

  const fetchCompany = useCallback(fetchFromServer('http://localhost:8000/companies'), []);

  const { data, loading, error } = useFetch(fetchCompany);

  const handleChange = (currentNode: MosaicNode<number> | null) => {
    setMosaicState(prevState => ({ ...prevState, currentNode }));
  };

  const handleAutoArrange = () => {
    const leaves = getLeaves(currentNode);

    setMosaicState(prevState => ({
      ...prevState,
      currentNode: createBalancedTreeFromLeaves(leaves),
    }));
  };

  const handleAddToTopRight = () => {
    let newNode = currentNode;

    if (newNode) {
      const path = getPathToCorner(currentNode, Corner.TOP_RIGHT);
      const destination = getNodeAtPath(currentNode, path) as MosaicNode<number>;
      const parent = getNodeAtPath(currentNode, dropRight(path)) as MosaicParent<number>;
      const direction: MosaicDirection = parent ? getOtherDirection(parent.direction) : 'row';

      let first: MosaicNode<number>;
      let second: MosaicNode<number>;

      if (direction === 'row') {
        second = uniqId();
        first = destination;
      } else {
        first = uniqId();
        second = destination;
      }

      newNode = updateTree(newNode, [
        {
          path,
          spec: {
            $set: {
              first,
              second,
              direction,
            },
          },
        },
      ]);
    } else {
      newNode = totalWindowCount + 1;
    }

    setMosaicState(prevState => ({
      ...prevState,
      currentNode: newNode,
    }));
  };

  const handleChangeTheme = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.currentTarget.value as Theme;

    setMosaicState(prevState => ({ ...prevState, currentTheme: newTheme }));
  };

  useEffect(() => {
    if (error) {
      toast.error(`${error?.message}. Please start JSON server!!`, {
        position: 'top-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    }
  }, [error]);

  return (
    <>
      {loading && <SpinnerComponent />}
      <Header
        currentTheme={currentTheme}
        autoArrange={handleAutoArrange}
        addToTopRight={handleAddToTopRight}
        handleChangeTheme={handleChangeTheme}
      />
      <div id='app'>
        <Mosaic<number>
          value={currentNode}
          onChange={handleChange}
          blueprintNamespace='bp5'
          className={THEMES[currentTheme]}
          zeroStateView={<MosaicZeroState createNode={() => totalWindowCount + 1} />}
          renderTile={(count, path) => (
            <Window
              data={data}
              path={path}
              count={count}
              totalWindowCount={totalWindowCount}
            />
          )}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default MosaicComponent;
