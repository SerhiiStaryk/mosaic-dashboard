import { MosaicWindow } from 'react-mosaic-component';

import ReactSelect from '../../select';
import { useEffect, useState } from 'react';
import CompanyComponent from '../../company';
import { Company, OptionForSelect, OptionsForSelect } from '../../../types';
import { WindowProps } from '../../../interfaces';
import { arrToObject, createOptions } from '../../../helpers';

const Window: React.FC<WindowProps> = props => {
  const [options, setOptions] = useState<OptionsForSelect>([]);
  const [companyId, setCompanyId] = useState<string | null>(null);
  const [companyList, setCompanyList] = useState<Record<string, Company>>({});

  const { data, count, path, totalWindowCount } = props;

  const content = !companyId ? (
    <p className='mt-4 text-lg text-center'>Please select a company...</p>
  ) : (
    <CompanyComponent company={companyList[companyId]} />
  );

  const handleChange = (option: OptionForSelect) => {
    const value = option.value;

    setCompanyId(value);
  };

  const title = (
    <div className='h-7 flex gap-3'>
      <p className='leading-[26px]'>Company Info</p>
      <ReactSelect
        options={options}
        onChange={handleChange}
      />
    </div>
  );

  const customToolbar = () => (
    <div className='pl-4 w-[100%] flex font-semibold text-slate-700'>
      <ReactSelect
        options={options}
        onChange={handleChange}
      />
      <p className='leading-[26px] w-[100%] text-center'>Company Info</p>
    </div>
  );

  useEffect(() => {
    if (data) {
      const companies = arrToObject(data, 'id');
      const optionsForSelect = createOptions(companies);

      setCompanyList(companies);
      setOptions(optionsForSelect);
    }
  }, [data]);

  return (
    <MosaicWindow<number>
      path={path}
      createNode={() => totalWindowCount + 1}
      title={title as React.ReactNode as string}
      renderToolbar={count === 2 ? customToolbar : null}
    >
      {content}
    </MosaicWindow>
  );
};

export default Window;
