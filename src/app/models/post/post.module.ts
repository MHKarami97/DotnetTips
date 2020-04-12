import { User } from '../user/user.module';
import { Tag } from '../more/tag.module';
import { UserComment } from '../more/comment.module';

export class PostData {
  Id: string;
  Title: string;
  Body: string;
  CreatedOn: string;
  Tags: Tag[];
  User: User;
  Comments: UserComment[];
}
