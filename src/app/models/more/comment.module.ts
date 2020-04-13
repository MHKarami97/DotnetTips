import { User } from '../user/user.module';

export interface UComment {
  Id: string;
  ReplyToId: string;
  Body: string;
  CreatedOn: string;
  User: User;
}

export interface UserComment {
  Comment: UComment[];
}
