export class IUser {
  userName: string = '';
  email: string = '';
  mailCompany: string = '';
  password: string = '';
  phone: string = '';
  ipAddress: string = '';
  country: string = '';
  public constructor(init?: Partial<IUser>) {
    Object.assign(this, init);
  }
}
