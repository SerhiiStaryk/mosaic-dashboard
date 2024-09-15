import React from 'react';
import classNames from 'classnames';
import { IconNames } from '@blueprintjs/icons';
import { Classes, HTMLSelect } from '@blueprintjs/core';

import { THEMES } from '../../constants';
import { HeaderProps } from '../../interfaces';
import { version } from '../../../package.json';
import gitHubLogo from '../../assets/GitHub-Mark-Light-32px.png';

const Header: React.FC<HeaderProps> = props => {
  const { currentTheme, handleChangeTheme, autoArrange, addToTopRight } = props;

  return (
    <header className='w-[100%]'>
      <div className={`flex justify-between ${classNames(Classes.NAVBAR, Classes.DARK)}`}>
        <div className={Classes.NAVBAR_GROUP}>
          <a
            className='no-underline'
            href='https://github.com/nomcopter/react-mosaic'
          >
            Dashboard v.{version}
          </a>
        </div>
        <div className={`flex items-center ${classNames(Classes.NAVBAR_GROUP, Classes.BUTTON_GROUP)}`}>
          <label className={`${classNames('theme-selection')}`}>
            Theme:
            <HTMLSelect
              className='ml-2'
              value={currentTheme}
              onChange={handleChangeTheme}
            >
              {React.Children.toArray(Object.keys(THEMES).map(label => <option>{label}</option>))}
            </HTMLSelect>
          </label>
          <div className='w-0.5 h-[40px] self-stretch inline-block bg-neutral-100 dark:bg-white/10 mx-3 mt-1' />
          <span className='mx-3 actions-label'>Example Actions:</span>
          <button
            onClick={autoArrange}
            className={classNames(Classes.BUTTON, Classes.iconClass(IconNames.GRID_VIEW))}
          >
            Auto Arrange
          </button>
          <button
            onClick={addToTopRight}
            className={classNames(Classes.BUTTON, Classes.iconClass(IconNames.ARROW_TOP_RIGHT))}
          >
            Add Window to Top Right
          </button>
          <a
            className='github-link ml-3'
            href='https://github.com/nomcopter/react-mosaic'
          >
            <img src={gitHubLogo} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
