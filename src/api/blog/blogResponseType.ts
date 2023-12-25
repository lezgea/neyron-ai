export interface Pageable {
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

export interface Data<T> {
  content: T[]; // Define the type of content if known, otherwise use 'any'
  pageable: Pageable;
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

export interface BackendResponse<T> {
  status: number;
  key: string;
  data: Data<T>;
}
export interface BlogDetailResponse {
  title: string;
  description: string;
  coverId: number;
  contentId: number;
  sequence: number;
  publishDate: string;
}
