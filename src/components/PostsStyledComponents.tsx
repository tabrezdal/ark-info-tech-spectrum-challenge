import styled from 'styled-components';

export const PostCardDetailed = styled.div`
  border: 1px solid #efefef;
  border-radius: 8px;
  padding: 16px;
  max-width: calc(25% - 20px); /* This sets max-width to 25% of the parent width minus 20px */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background: #fff;
  box-sizing: border-box;

  @media only screen and (max-width: 1023px) {
    max-width: calc(50% - 16px);
  }

  @media only screen and (max-width: 767px) {
    max-width: 100%;
  }
`;

export const PostCard = styled(PostCardDetailed)`
  cursor: pointer;
`;

export const PostTitle = styled.h2`
  font-size: 1em;
  color: teal;
  margin-top: 0;
  margin-bottom: 8px;
  font-family: sans-serif;
`;

export const PostBody = styled.p`
  font-size: 0.8em;
  color: #555;
  font-family: sans-serif;
`;

export const UserName = styled.p`
  font-size: 0.8em;
  color: orange;
  margin-top: 8px;
  font-family: sans-serif;
  font-weight: 600;
`;
