import { Injectable } from '@nestjs/common';

export type User = any;

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 'cfaad35d-07a3-4447-a6c3-d8c3d54fd5df',
      name: 'Brian Hughes',
      email: 'hughes.brian@company.com',
      avatar: 'assets/images/avatars/brian-hughes.jpg',
      status: 'online',
      password: '321654987',
    },
    {
      id: 'asdfasdf-07a3-4447-a6c3-234234',
      name: 'Hazem Safwat',
      email: 'hazem@company.com',
      avatar: 'assets/images/avatars/brian-hughes.jpg',
      status: 'online',
      password: '321654987',
    },
  ];

  async findOne(email: string): Promise<User | undefined> {
    console.log(
      'findOne',
      email,
      this.users.find((user) => user.email === email),
    );
    return this.users.find((user) => user.email === email);
  }
}
