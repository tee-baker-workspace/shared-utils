/* eslint-disable @typescript-eslint/no-explicit-any */
import { GenderOption } from './lib/types/user.ts';

export declare function isEmptyOrNil(value: any): boolean;
export declare function generateRandomUsername(email: string): string;
export declare const GENDERS: GenderOption[];

export {
  IRegisterUser,
  ILoginUser,
  IAccessTokenResponse,
  IAuthSessionResponse,
  IUpdateUserPayload,
  GenderOption,
  GenericObject,
  IGender,
  IUser,
} from './lib/types/index.ts';
