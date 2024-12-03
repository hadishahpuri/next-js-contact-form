export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  birthDate: string;
  city: string;
  state: string;
  zipCode: string;
  streetAddress: string;
};

export type Filters = {
  [k in keyof Contact]?: string;
};
