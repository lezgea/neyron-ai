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

export interface IDataTypeLanguage {
  id: number;
  name: string;
  abbreviation: string;
}

export type ChangeHandler = (newValue: boolean) => void;

export interface ISelectedLanguage {
  id: number;
  name: string;
  abbreviation: string;
}
