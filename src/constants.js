import { SERVER } from './env';

export const TOKEN = 'token';
export const SESSION = 'profile';
export const ES = 'es';
export const EN = 'en';
export const LANGUAGE = 'language';


export const AUTH = {
    LOGIN: `${SERVER}v1/app/auth/login`,
    VERIFY: `${SERVER}v1/app/auth/verify`,
    DEVICE_INFO: `${SERVER}v1/app/auth/device-info`,
    CHECK_VERSION: `${SERVER}v1/app/auth/check-version`,
    DOWNLOAD_AVATAR: `${SERVER}v1/app/auth/avatar/`,
    SET_AVATAR: `${SERVER}v1/app/auth/set-avatar/`,
    SET_AVATAR_V2: `${SERVER}v1/app/auth/set-avatar/v2/`,
    UPDATE_PLAYER_ID: `${SERVER}v1/app/auth/player-id/`,
    SET_PASSWORD: `${SERVER}v1/app/auth/set-password/`,
    SET_PASSWORD_V2: `${SERVER}v1/app/auth/set-password/v2/`,
    PASSWORD_RECOVERY: `${SERVER}v1/app/auth/password-recovery`,
    PLAYER_AREAS: `${SERVER}v1/app/auth/areas/`,
}