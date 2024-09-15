import Select from 'react-select';

import { OptionForSelect, OptionsForSelect } from '../../types';
import { customStyles } from './ui';

const ReactSelect: React.FC<{
  options: OptionsForSelect | [];
  onChange: (option: OptionForSelect) => void;
}> = ({ options, onChange }) => (
  <Select
    options={options}
    maxMenuHeight={120}
    menuPlacement='auto'
    styles={customStyles}
    menuPortalTarget={document.body}
    onChange={option => onChange(option as OptionForSelect)}
  />
);

export default ReactSelect;
