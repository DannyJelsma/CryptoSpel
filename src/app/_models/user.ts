export class UserModel {
  public username: string;
  public password: string;
  public email: string;

  static transform(object: any): UserModel {
    const user = new UserModel();
    Object.assign(user, object);
    return user;
  }
}
