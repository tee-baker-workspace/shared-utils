import { anyPass, isEmpty, isNil, propOr } from 'ramda';
import { generateFromEmail } from 'unique-username-generator';

export const isEmptyOrNil = anyPass([isEmpty, isNil]);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const firstOrNull = propOr(null, 0 as any);

export const generateRandomUsername = (email: string) => {
  const username = generateFromEmail(email, 3);
  return username;
};
