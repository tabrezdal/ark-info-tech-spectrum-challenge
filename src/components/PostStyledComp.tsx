import styled from 'styled-components';
import {
  PostCard as BasePostCard,
  PostBody as BasePostBody,
  PostTitle as BasePostTitle,
  UserName as BaseUserName,
} from './PostsStyledComponents';

export const DetailedPostCard = styled(BasePostCard)`
  cursor: unset;
`;

export const DetailedPostTitle = styled(BasePostTitle)``;

export const DetailedPostBody = styled(BasePostBody)``;

export const DetailedUserName = styled(BaseUserName)``;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 16px;
  font-size: 11px;

  &:hover {
    background-color: #0056b3;
  }
`;
