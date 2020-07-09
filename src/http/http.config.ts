declare const location: Location;

const { env: { NODE_ENV }} = process;

export const apiBaseUrl = NODE_ENV === 'production' ? `${location.origin}/api` : `http://localhost:8080/api`;

export enum HttpEndPoint {
    signin = '/auth/signin',
    signup = '/auth/signup',
    candidates = '/candidates'
};