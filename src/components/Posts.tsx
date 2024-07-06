import React from 'react';
import {
  PostCard,
  PostTitle,
  PostBody,
  UserName,
} from './PostsStyledComponents';

interface PostProps {
  posts: {
    id: number;
    title: string;
    body: string;
    userId: number;
  }[];
  users: { [key: number]: { firstName: string; lastName: string } };
  onPostClick: (post: {
    id: number;
    title: string;
    body: string;
    userId: number;
  }) => void;
}

const Posts: React.FC<PostProps> = ({ posts, users, onPostClick }) => {
  if (!posts || posts.length === 0 || !users) {
    return null; // or you can return a loading indicator
  }

  return (
    <>
      {posts.map((post) => {
        const user = users[post.userId];
        return user ? (
          <PostCard key={post.id} onClick={() => onPostClick(post)}>
            <PostTitle>{post.title}</PostTitle>
            <PostBody>{post.body}</PostBody>
            <UserName>
              {user.firstName} {user.lastName}
            </UserName>
          </PostCard>
        ) : null;
      })}
    </>
  );
};

export default Posts;
