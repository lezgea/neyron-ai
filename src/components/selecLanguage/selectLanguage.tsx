'use client';

import { useGetLanguages } from 'src/api/language/queries';
import { DataTypeLanguage } from 'src/types';

const SelectLanguage = () => {
  const { data } = useGetLanguages();
  return (
    <select name="language-select" id="lang-select">
      {data?.data?.map((elem: DataTypeLanguage) => (
        <option value="ENG" defaultValue={'ENG'} key={elem?.id}>
          {elem?.abbreviation.toUpperCase()}
        </option>
      ))}
    </select>
  );
};

export default SelectLanguage;
