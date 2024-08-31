import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { PostsService } from './posts.service';

interface PostModel {
  id: number;
  author: string;
  title: string;
  content: string;
  likeCount: number;
  commentCount: number;
}

const posts: PostModel[] = [
  {
    id: 1,
    author: 'newjeans_official',
    title: '뉴진스 민지',
    content: '메이크업 고치고 있는 민지',
    likeCount: 100000,
    commentCount: 99999,
  },
  {
    id: 2,
    author: 'newjeans_official',
    title: '뉴진스 해린',
    content: '연습하는 해린',
    likeCount: 100000,
    commentCount: 99999,
  },
  {
    id: 3,
    author: 'blackpink_official',
    title: '블랙핑크 로제',
    content: '종합운동장에서 공연하는 로제',
    likeCount: 100000,
    commentCount: 99999,
  },
];

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  // 1) GET /posts - 모든 post를 다 가져온다.
  @Get()
  getPosts() {
    return posts;
  }
  // 2) GET /posts/:id - id에 해당하는 post를 가져온다.
  @Get(':id')
  getPost(@Param('id') id: string) {
    const post = posts.find((post) => post.id === +id);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }
  // 3) POST /posts - post를 생성한다.
  // 4) PUT /posts/:id - id에 해당하는 post를 변경한다.
  // 5) DELETE /posts/:id - id에 해당하는 post를 삭제한다.
}
