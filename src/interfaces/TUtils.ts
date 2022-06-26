export type FailedResponse = {
    error: number,
    code: string,
    message: string
}

export type Response = {
    success: boolean;
}

export type UnsplashImage = {
    id?: number;
    url: string;
    photographer: string;
    city: string;
    country: string;
    created_at?: Date;
}