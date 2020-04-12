import { User } from '../../@core/data/users';

export class UserComment {
  Id: string;
  ReplyToId: number;
  Body: string;
  CreatedOn: string;
  User: User;
}
