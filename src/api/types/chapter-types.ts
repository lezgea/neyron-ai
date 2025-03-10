export interface IGetChaptersListRequest {
    lang: string,
    courseId: number | string,
    dto: { size?: number, page?: number },
}


export interface IGetChaptersListResponse {
    timestamp: string,
    status: number,
    key: string,
    message: string,
    data: {
        content: IChapter[],
        totalElements: number,
    },
    errors: any,
}


export interface IChapter {
    id: number | null,
    name: string,
    description: string,
    image: {
        id: number | null,
        filePath: string
    }
}