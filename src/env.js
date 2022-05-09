let __HOST__;

switch (process.env.REACT_APP_STAGE) {
    case 'prod':
        __HOST__ = 'http://localhost:3000/';
        break;
    case 'dev':
        __HOST__ = 'http://localhost:3000/';
        break;
    default:
        __HOST__ = 'http://localhost:3000/';
}

export const SERVER = __HOST__;
