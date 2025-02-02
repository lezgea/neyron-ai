export interface ICourse {
    id: number,
    name: string,
    description: string,
    image: {
        id: number,
        filePath: string
    }
}

export interface ICoursesResponse {
    timestamp: string,
    status: number,
    key: string,
    message: string,
    data: {
        content: ICourse[],
    },
    errors: [
        {
            field: string,
            message: string
        }
    ]
}

export interface ICoursesRequest {
    lang: string,
    dto: { size?: number, page?: number },
}





export interface IMessageResponse {
    error?: string,
    success?: string,
    message?: string,
    data?: {
        success?: string,
        error?: string,
        message?: string,
    }
}

export interface ICompetitionsRequest {
    categoryId: number;
    data: { page: number, count: number },
}

export interface IAttendedCompetitionsRequest {
    data: { page: number, count: number, userHasSubmitted?: boolean },
}

export interface IScoreboardRequest {
    data: { page: number, count: number, competitionId?: string | number },
}

export interface IAttendedCompetition {
    competitionId: number,
    competitionName: string,
    text: string,
    awardAmount: number,
    currencySymbol: string,
    lifeTimeDays: number,
    fullName: string,
    nickname: string,
    phoneNumber: string | number,
    resultFileId: string,
    imageUrl?: string,
}

export interface IScoreboard extends IAttendedCompetition {
    profileImageUrl?: string,
    score?: number,
    rank?: number,
}

export interface IAttendedCompetitionsResponse {
    userCompetitions: IAttendedCompetition[],
    hasNext: boolean,
    lastPageNumber: number,
    totalElements: number,
}

export interface IScoreboardResponse {
    userCompetitions: IScoreboard[],
    hasNext: boolean,
    lastPageNumber: number,
    totalElements: number,
}

export interface ICompetitionInfoRequest {
    id: string | number,
}


export interface ICompetitionComment {
    id: number,
    text: string,
    userId: number,
    datasetId: number,
    isEditable?: true,
    repliedCommentDto: string,
    fullName: string,
    nickname: string,
    userImageUrl: string,
    createdAt: number,
}

export interface ICompetitionCreateCommentRequest {
    id: string | number | undefined,
    data: {
        repliedComment?: {
            commentId: number,
        },
        text: string,
    }
}

export interface ICompetitionCreateCommentResponse { }


export interface IGetCompetitionCommentsRequest {
    id: string | number | undefined,
}

export type IGetCompetitionCommentsResponse = ICompetitionComment[]

export interface IDeleteCompetitionCommentRequest {
    commentId: string | number | undefined,
}

export interface ICompetitionUpdateCommentRequest {
    commentId: string | number | undefined,
    data: {
        text: string,
    }
}