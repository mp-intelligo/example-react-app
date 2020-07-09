declare const location: Location;

const { env: { NODE_ENV }} = process;

export const apiBaseUrl = NODE_ENV === 'development' ? `http://localhost:8080/api` : `${location.origin}/api`;

export enum HttpEndPoint {
    signin = '/auth/signin',
    signup = '/auth/signup',
    candidates = '/candidates'
};