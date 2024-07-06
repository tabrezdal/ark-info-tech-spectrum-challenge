import React from 'react';
import {
  DetailedPostCard,
  DetailedPostTitle,
  DetailedPostBody,
  DetailedUserName,
  Button,
} from './PostStyledComp';

interface PostProps {
  post: {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
  user: {
    firstName: string;
    lastName: string;
  };
  onBackClick: () => void;
}

const DetailedPostCardComponent: React.FC<PostProps> = ({
  post,
  user,
  onBackClick,
}) => {
  if (!user) {
    return null;
  }

  return (
    <DetailedPostCard>
      <DetailedPostTitle>{post.title}</DetailedPostTitle>
      <DetailedPostBody>{post.body}</DetailedPostBody>
      <DetailedUserName>
        {user.firstName} {user.lastName}
      </DetailedUserName>
      <Button onClick={onBackClick}>Back to Posts</Button>
    </DetailedPostCard>
  );
};

export default DetailedPostCardComponent;
