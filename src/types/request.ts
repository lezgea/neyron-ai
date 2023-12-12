export interface SuccessResponse {
  status: number;
  key: string;
  data: number;
}

export interface ErrorResponse {
  timestamp: string;
  status: number;
  key: string;
}
