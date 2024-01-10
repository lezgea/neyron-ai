'use client';

import { useContext } from 'react';
import Select, { components, DropdownIndicatorProps, GroupBase, StylesConfig } from 'react-select';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// import { useChangeLanguage } from 'src/api/language/mutations';
import { useGetLanguages } from 'src/api/language/queries';
import SelectIcon from 'src/assets/images/selectIcon.svg';
import { IDataTypeLanguage, ISelectedLanguage } from 'src/types';

import { LayoutContext } from '../../layoutContainer';

const SelectLanguage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { data } = useGetLanguages();
  const { selectedLanguage, setSelectedLanguage } = useContext(LayoutContext);

  //   const { mutate: changeLanguage } = useChangeLanguage();

  type SelectChangeHandler = (lang: ISelectedLanguage | null) => void;

  type CustomDropdownIndicatorProps = DropdownIndicatorProps<
    ISelectedLanguage,
    false,
    GroupBase<ISelectedLanguage>
  >;

  const CustomDropdownIndicator = (props: CustomDropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={SelectIcon} alt="select icon" />
      </components.DropdownIndicator>
    );
  };

  const handleChange: SelectChangeHandler = (lang) => {
    // first selected language is current language
    if (lang) {
      const newPathName = pathName?.replace(selectedLanguage?.abbreviation, lang?.abbreviation as string);
      router.push(newPathName);
      setSelectedLanguage(lang);
    }
    //   changeLanguage({ id: lang.id })
  };

  const customStyles: StylesConfig<ISelectedLanguage, boolean, GroupBase<ISelectedLanguage>> = {
    control: (base: object) => ({
      ...base,
      padding: '0.25rem 0.81rem',
      borderRadius: '0.5625rem',
      background: '#f4f5fb',
      textTransform: 'uppercase',
      outline: 'none',
      border: 'none',
      cursor: 'pointer',
    }),
    menuList: (base: object) => ({
      ...base,
      maxHeight: '200px',
    }),
    multiValue: (base: object) => ({
      ...base,
      borderRadius: '12px',
    }),
    valueContainer: (base: object) => ({
      ...base,
      padding: 0,
    }),
    indicatorSeparator: () => ({ display: 'none' }),
    dropdownIndicator: (base: object) => ({
      ...base,
      color: 'red',
      paddingLeft: '0px 0px 0px 8px',
    }),
  };

  return (
    <Select
      styles={customStyles}
      value={selectedLanguage}
      //   defaultValue={selectedLanguage}
      onChange={handleChange}
      components={{ DropdownIndicator: CustomDropdownIndicator }}
      options={data?.data}
      getOptionLabel={(elem: IDataTypeLanguage) => elem.abbreviation?.toLocaleUpperCase()}
      getOptionValue={(elem: ISelectedLanguage) => elem?.abbreviation}
    />
  );
};

export default SelectLanguage;
