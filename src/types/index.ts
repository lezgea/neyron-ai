export interface IContactFormState {
  name: string;
  email: string;
  message: string;
}

interface IContent {
  id: number;
  filePath: string;
}

export interface IDataType {
  title: string;
  description: string;
  cover: IContent;
  content: IContent;
  publishDate: Date;
  id: number;
}

export type ChangeHandler = (newValue: boolean) => void;

export interface ISelectedLanguage {
  id: number;
  name: string;
  abbreviation: string;
}

export interface ICountries {
  id: string;
  name: string;
  code: string;
}

export type FormDataProfile = {
  name: string;
  birthDate: string;
  surname: string;
  email: string;
  password?: string;
  gender: string;
  countryId: string;
};
