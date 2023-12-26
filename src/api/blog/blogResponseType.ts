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
  content: T[]; // Define the type of content if known, otherwise use 'any'
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
export interface IBlogDetailResponse {
  title: string;
  description: string;
  coverId: number;
  contentId: number;
  sequence: number;
  publishDate: string;
}
