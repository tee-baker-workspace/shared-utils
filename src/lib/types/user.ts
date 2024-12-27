export type IGender = 'male' | 'female' | 'other';
export interface GenderOption {
  label: string;
  value: IGender;
}

export interface IUser {
  id: string;
  full_name: string;
  email: string;
  phone_number: string;
  user_name: string;
  gender: IGender;
  dob: Date;
  bio: string;
  password: string;
}
