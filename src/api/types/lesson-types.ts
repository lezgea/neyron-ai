export interface IGetLessonsListRequest {
    lang: string,
    chapterId: number | string,
    dto: { size?: number, page?: number },
}


export interface IGetLessonsListResponse {
    timestamp: string,
    status: number,
    key: string,
    message: string,
    data: {
        content: ILesson[],
    },
    errors: any,
}


export interface ILesson {
    id: number | null,
    name: string,
    description: string,
    content: {
        id: number | null,
        filePath: string
    }
}