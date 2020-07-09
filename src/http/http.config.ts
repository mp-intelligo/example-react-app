declare const location: Location;

export const apiBaseUrl = `${location.origin}/api`;

export enum HttpEndPoint {
    signin = '/auth/signin',
    signup = '/auth/signup',
    candidates = '/candidates'
};