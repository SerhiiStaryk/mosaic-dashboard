import { StylesConfig } from 'react-select';

const customStyles: StylesConfig<{ value: string; label: string }> = {
  control: provided => ({
    ...provided,
    height: 26,
    minHeight: 26,
    background: '#fff',
    borderColor: '#9e9e9e',
  }),
  valueContainer: provided => ({
    ...provided,
    height: 26,
    width: 150,
    padding: '0 6px',
  }),
  input: provided => ({
    ...provided,
    margin: '0px',
  }),
  indicatorSeparator: () => ({
    display: 'none',
  }),
  indicatorsContainer: provided => ({
    ...provided,
    height: 26,
  }),
};

export { customStyles };
