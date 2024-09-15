import { MosaicAppState } from '../interfaces';

const MOSAIC_STATE: MosaicAppState = {
  currentNode: {
    direction: 'row',
    first: 1,
    second: {
      direction: 'column',
      first: 2,
      second: 3,
    },
    splitPercentage: 40,
  },
  currentTheme: 'Blueprint',
};

const THEMES = {
  ['None']: '',
  ['Blueprint']: 'mosaic-blueprint-theme',
};

export { THEMES, MOSAIC_STATE };
