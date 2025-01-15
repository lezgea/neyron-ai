export interface IGetChaptersListRequest {
    lang: string,
    courseId: number | string,
}


export interface IGetChaptersListResponse {
    timestamp: string,
    status: number,
    key: string,
    message: string,
    data: {
        id: number | null,
        name: string,
        description: string,
        image: {
            id: number | null,
            filePath: string
        }
    }[],
    errors: any,
}