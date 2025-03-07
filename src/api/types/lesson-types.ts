export interface ILesson {
    id: number | null,
    name: string,
    description: string,
    textContent: string,
    content: {
        id: number | null,
        filePath: string
    }
}


// REQUESTS

export interface IGetLessonsListRequest {
    lang: string,
    chapterId: number | string,
    dto: { size?: number, page?: number },
}

export interface IGetLessonInfoRequest {
    id: number,
    lang: string,
}


// RESPONSES

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

export interface IGetLessonInfoResponse {
    timestamp: string,
    status: number,
    key: string,
    message: string,
    data: ILesson,
    errors: [
        {
            field: string,
            message: string
        }
    ]
}