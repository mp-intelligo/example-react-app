declare const location: Location;

export const apiBaseUrl = `http://localhost:8080/api`;

export enum HttpEndPoint {
    signin = '/auth/signin',
    signup = '/auth/signup',
    candidates = '/candidates'
};