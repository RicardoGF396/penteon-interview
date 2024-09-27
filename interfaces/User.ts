export interface IUserPayload {
    results: IUser[];
}

export interface IUser {
    name: IUserPersonalInfo;
    picture: IPictureInfo;
    login: ICredentials;
}

interface IUserPersonalInfo {
    first: string;
    last: string;
}

interface IPictureInfo {
    large: string;
    medium: string;
    thumbnail: string;
}

interface ICredentials {
    uuid: string;
}
