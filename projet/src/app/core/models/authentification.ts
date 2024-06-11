export interface AuthentificationRequest {
    username:string
    password:string
}

export interface TokenResponse {
    username:string
    type:string
    roles:string[]
    token:string
}
