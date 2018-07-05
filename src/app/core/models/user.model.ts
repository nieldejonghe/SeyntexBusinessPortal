export class Credentials {
  username: string;
  password?: string;  // Used for mocking
}

export class User extends Credentials{
  id: number;
  email: string;
  token: string;
}
