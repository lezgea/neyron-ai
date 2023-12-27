export interface Cover {
  id: number;
  filePath: string;
}

export interface Content {
  id: number;
  filePath: string;
}

export interface ILanguageResponse<T> {
  timestamp: string;
  status: number;
  key: string;
  message: string;
  data: T[];
  errors: Error[];
}
export interface IPageable {
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface IData<T> {
  content: T[];
  pageable: IPageable;
  last: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface IBackendResponse<T> {
  status: number;
  key: string;
  data: IData<T>;
}

// blog detail
export interface Error {
  field: string;
  message: string;
}

export interface IBlogDetail {
  timestamp: string;
  status: number;
  key: string;
  message: string;
  data: IBlogDetailResponse;
  errors: Error[];
}

export interface IBlogDetailResponse {
  id: number;
  title: string;
  description: string;
  cover: Cover;
  content: Content;
  publishDate: string;
}
