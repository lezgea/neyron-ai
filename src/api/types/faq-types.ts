
export interface IGetFaqListRequest {
    langId: number,
    isOnMainPage: boolean,
}

export interface IGetFaqListResponse {
    data: IFaqItem[],
    key: number,
    status: string,
}

export interface IFaqItem {
    id: number,
    question: string,
    answer: string,
}