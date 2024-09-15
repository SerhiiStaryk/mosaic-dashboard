/* eslint-disable @typescript-eslint/no-explicit-any */
import { MosaicNode, MosaicBranch } from 'react-mosaic-component';

import { Theme } from '../types';

export interface MosaicAppState {
  currentTheme: Theme;
  currentNode: MosaicNode<number> | null;
}

export interface WindowProps {
  data?: any;
  count: number;
  path: MosaicBranch[];
  totalWindowCount: number;
}

export interface OptionItem {
  name: string;
  [key: string]: any;
}

export interface HeaderProps {
  currentTheme: string;
  autoArrange: () => void;
  addToTopRight: () => void;
  handleChangeTheme: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}