export type gameBlockIconType = { name: string; color: string; tag: string };

const iconsTypes = {
  startIcon: 'startIcon',
  middleIcon1: 'middleIcon1',
  middleIcon2: 'middleIcon2',
  endIcon: 'endIcon',
};

type keyMapperType<type> = {
  [key in keyof type | string]: gameBlockIconType;
};

export type gameBlockIconsType = keyMapperType<typeof iconsTypes>;

export const gameBlockIcons: gameBlockIconsType = {
  startIcon: {
    name: 'codicon:debug-start',
    color: '',
    tag: '<Icon icon="codicon:debug-start" />',
  },
  middleIcon1: {
    name: 'mdi:ray-start-vertex-end',
    color: '',
    tag: '<Icon icon="mdi:ray-start-vertex-end" />',
  },
  middleIcon2: {
    name: 'mdi:ray-start-vertex-end',
    color: '',
    tag: '<Icon icon="mdi:ray-start-vertex-end" />',
  },
  endIcon: {
    name: 'material-symbols:line-end',
    color: '',
    tag: '<Icon icon="material-symbols:line-end" />',
  },
};
