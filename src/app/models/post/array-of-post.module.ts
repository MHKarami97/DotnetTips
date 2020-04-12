import { PostData } from './post.module';

export class ResultData {
  ArrayOfPost: ResultPostData;
}

export class ResultPostData {
  Post: PostData[];
}
