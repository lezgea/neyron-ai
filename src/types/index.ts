export interface ContactFormState {
  name: string;
  email: string;
  message: string;
}

interface Content {
  id: number;
  filePath: string;
}

export interface DataType {
  title: string;
  description: string;
  cover: Content;
  content: Content;
  publishDate: Date;
  id: number;
}
export interface DataTypeLanguage {
  id: number;
  name: string;
  abbreviation: string;
}
export type ChangeHandler = (newValue: boolean) => void;
