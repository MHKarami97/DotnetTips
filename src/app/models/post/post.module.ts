import { User } from '../user/user.module';
import { PostTag } from '../more/tag.module';
import { UserComment } from '../more/comment.module';

export interface PostData {
  Id: string;
  Title: string;
  Body: string;
  CreatedOn: string;
  Tags: PostTag;
  User: User;
  Comments: UserComment;
}
