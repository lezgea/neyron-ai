export interface IGetLessonsListRequest {
    lang: string,
    courseId: number | string,
}


export interface IGetLessonsListResponse {
    timestamp: string,
    status: number,
    key: string,
    message: string,
    data: ILesson[],
    errors: any,
}


export interface ILesson {
    id: number | null,
    name: string,
    description: string,
    image: {
        id: number | null,
        filePath: string
    }
}