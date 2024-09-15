import { Companies, Company, OptionForSelect, OptionsForSelect, OptionsObject } from '../types';

const fetchFromServer = (url: string) => async () => {
  const response = await fetch(url);

  return await response.json();
};

const arrToObject = (arr: Companies, key: keyof Company): Record<string, Company> =>
  arr.reduce((acc: Record<string, Company>, item: Company) => {
    acc[item[key] as string] = item;

    return acc;
  }, {});

const createOptions = (obj: OptionsObject): OptionsForSelect => {
  const options: OptionsForSelect = [];

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const option: OptionForSelect = {
        label: obj[key].name,
        value: key,
      };

      options.push(option);
    }
  }

  return options;
};

const uniqId = () => Math.floor(Math.random() * 1000);

export { uniqId, arrToObject, createOptions, fetchFromServer };
