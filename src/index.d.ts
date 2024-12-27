import { GenderOption } from "./lib/types";

export function isEmptyOrNil(value: any): boolean;
export function generateRandomUsername(email: string): string;
export const GENDERS: GenderOption[];
export { IGender, GenderOption, IUser } from "./lib/types/user";
export {
  IRegisterUser,
  ILoginUser,
  IAccessTokenResponse,
  IAuthSessionResponse,
  IUpdateUserPayload,
} from "./lib/types/auth";
export { GenericObject } from "./lib/types/generic";
