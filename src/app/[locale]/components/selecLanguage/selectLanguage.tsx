'use client';

import { useContext } from 'react';
import Select, { components, DropdownIndicatorProps, GroupBase, StylesConfig } from 'react-select';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// import { useChangeLanguage } from 'src/api/language/mutations';
import { useGetLanguages } from 'src/api/language/queries';
import SelectIcon from 'src/assets/images/selectIcon.svg';
import { ISelectedLanguage } from 'src/types';

import { LayoutContext } from '../../layoutContainer';

const SelectLanguage = () => {
  const router = useRouter();
  const pathName = usePathname();
  const { data } = useGetLanguages();
  const { selectedLanguage, setSelectedLanguage } = useContext(LayoutContext);
  //   const { mutate: changeLanguage } = useChangeLanguage();

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
      value={data?.data?.find((elem) => elem?.abbreviation === selectedLanguage)}
      defaultValue={data?.data?.find((elem) => elem?.abbreviation === selectedLanguage)}
      onChange={(lang) => {
        if (lang) {
          const newPathName = pathName?.replace(selectedLanguage, lang?.abbreviation as string);
          router.push(newPathName);
          setSelectedLanguage(lang?.abbreviation);
        }
      }}
      components={{ DropdownIndicator: CustomDropdownIndicator }}
      options={data?.data}
      getOptionLabel={(elem: ISelectedLanguage) => elem?.abbreviation?.toLocaleUpperCase()}
      getOptionValue={(elem: ISelectedLanguage) => elem?.abbreviation}
    />
  );
};

export default SelectLanguage;
