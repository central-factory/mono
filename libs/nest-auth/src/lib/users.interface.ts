

export interface User {
  id: string;
  email: string;
  thirdParties: {
    [key: string]: any;
  }
  [key: string]: any;
}

export interface UsersService {
  create(user : Partial<User>): Promise<any>;
  findOne(username: string): Promise<User>;
  findOneByMail(email: string): Promise<User>;
  updateThirdParties(userId: string, thirdParties: any): Promise<any>;
}
