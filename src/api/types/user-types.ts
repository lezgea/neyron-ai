export interface IRegisterRequest {
    email: string,
    password: string,
    source?: string,
    compaignId?: string,
    languageId?: number,
}

export type RegisterResponse = string

export interface ILoginRequest {
    email: string,
    password: string,
    rememberMe?: boolean,
}

export interface IForgetRequest {
    email: string,
}

export interface IChangeRequest {
    password: string,
    token: string,
}


export interface LoginResponse {
    data: {
        language: {
            id: number,
            name: string,
            abbreviation: string,
        },
        token: string,
    }
}


export interface IUser {
    data: {
        avatar: string,
        birthDate: string,
        campaignId: number | string,
        country: string,
        email: string,
        gender: string,
        id: number,
        languageId: number | string,
        name: string,
        role: string,
        source: string,
        status: string,
        surname: string,
    },
}

export interface IActivateUserResponse {
    success?: string;
    error?: string;
    message?: string;
}

