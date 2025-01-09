/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenderOption } from './lib/types';

export declare function isEmptyOrNil(value: any): boolean;
export declare function generateRandomUsername(email: string): string;
export declare const GENDERS: GenderOption[];

export { IGender, GenderOption, IUser } from './lib/types/user';
export {
  IRegisterUser,
  ILoginUser,
  IAccessTokenResponse,
  IAuthSessionResponse,
  IUpdateUserPayload,
} from './lib/types/auth';
export { GenericObject } from './lib/types/generic';
