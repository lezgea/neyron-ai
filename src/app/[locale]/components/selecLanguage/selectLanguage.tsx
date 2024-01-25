'use client';

import { useContext } from 'react';
import Select, {
  components,
  DropdownIndicatorProps,
  GroupBase,
  MultiValue,
  OptionProps,
  SingleValue,
  SingleValueProps,
  StylesConfig,
} from 'react-select';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

// import { useChangeLanguage } from 'src/api/language/mutations';
import { useGetLanguages } from 'src/api/language/queries';
import AzerbaijanFlag from 'src/assets/images/azerbaijani.svg';
import UkFlag from 'src/assets/images/english.svg';
import SelectIcon from 'src/assets/images/selectIcon.svg';
import RussiaFlag from 'src/assets/images/turkish.svg';
import TurkiyeFlag from 'src/assets/images/turkish.svg';
import { ISelectedLanguage } from 'src/types';

import { LayoutContext } from '../../layoutContainer';

export const flags = [
  {
    abbreviation: 'en',
    flag: <Image src={UkFlag} alt="image" />,
  },
  {
    abbreviation: 'az',
    flag: <Image src={AzerbaijanFlag} alt="image" />,
  },
  {
    abbreviation: 'tr',
    flag: <Image src={TurkiyeFlag} alt="image" />,
  },
  {
    abbreviation: 'ru',
    flag: <Image src={RussiaFlag} alt="image" />,
  },
];

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

  const CustomDropdownIndicator = ({ ...props }: CustomDropdownIndicatorProps) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image src={SelectIcon} alt="select icon" />
      </components.DropdownIndicator>
    );
  };

  const SingleValue = ({ ...props }: SingleValueProps<ISelectedLanguage>) => (
    <components.SingleValue {...props}>
      {' '}
      <div className="custom-option-select">
        {flags.find((item) => item?.abbreviation === props.data?.abbreviation)?.flag}
        {props.data?.abbreviation?.toLocaleUpperCase()}
      </div>
    </components.SingleValue>
  );

  const OptionValue = ({ ...props }: OptionProps<ISelectedLanguage>) => (
    <components.Option {...props}>
      {' '}
      <div className="custom-option-select">
        {flags.find((item) => item?.abbreviation === props.data?.abbreviation)?.flag}
        {props.data?.abbreviation?.toLocaleUpperCase()}
      </div>
    </components.Option>
  );

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
      paddingLeft: '0px 0px 0px 8px',
    }),
    menu: (base: object) => ({
      ...base,
      padding: '0.88rem 1rem 0.88rem 0.81rem',
      borderRadius: '0.5625rem',
      background: '#F3F3F7',
      minWidth: '100px',
    }),
    option: (base: object, state) => ({
      ...base,
      padding: '0px',
      marginBottom: '12px',
      backgroundColor: state.isSelected || state?.isFocused ? 'inherit' : 'inherit',
      color: state.isSelected ? '#000' : '#000',
    }),
  };

  return (
    <Select
      styles={customStyles}
      value={data?.data?.find((elem) => elem?.abbreviation === selectedLanguage)}
      onChange={(newValue: SingleValue<ISelectedLanguage> | MultiValue<ISelectedLanguage>) => {
        if (newValue) {
          const newPathName = pathName?.replace(
            selectedLanguage,
            (newValue as SingleValue<ISelectedLanguage>)?.abbreviation as string,
          );
          router.push(newPathName);
          setSelectedLanguage((newValue as SingleValue<ISelectedLanguage>)?.abbreviation as string);
        }
      }}
      //   menuIsOpen={true}
      components={{ DropdownIndicator: CustomDropdownIndicator, SingleValue, Option: OptionValue }}
      options={data?.data}
      isMulti={false}
      getOptionLabel={(elem: ISelectedLanguage) => elem?.abbreviation}
      getOptionValue={(elem: ISelectedLanguage) => elem?.abbreviation}
    />
  );
};

export default SelectLanguage;
