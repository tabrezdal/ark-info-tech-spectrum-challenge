import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import useFetchData from './utils/useFetchData';
import Posts from './components/Posts';
import DetailedPostCardComponent from './components/Post';
import Pagination from './utils/Pagination';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
  width: 100%;
  background: #efffff;
  padding: 20px 12px;
  border-radius: 12px;
  box-sizing: border-box;

  @media only screen and (max-width: 1023px) {
    gap: 16px;
  }
  
  @media only screen and (max-width: 767px) {
    gap: 12px;
  }
`;

const Heading = styled.h1`
  text-align: center;
  color: teal;
  font-family: sans-serif;
`;

const TotalPosts = styled.h4`
  color: #000000;
  font-family: sans-serif;
  margin-left: auto;
`;

const App: React.FC = () => {
  const { posts, users, totalPosts, error } = useFetchData();
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10); // State for items per page

  useEffect(() => {
    // Reset to first page when fetching new data or items per page changes
    setCurrentPage(1);
  }, [posts, itemsPerPage]); // Reset when posts or itemsPerPage change

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
  };

  const handleBackClick = () => {
    setSelectedPost(null);
  };

  if (error) {
    return <div>{error}</div>;
  }

  // Pagination logic
  const indexOfLastPost = currentPage * itemsPerPage;
  const indexOfFirstPost = indexOfLastPost - itemsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  const selectedUser = selectedPost ? users[selectedPost.userId] : null;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const onItemsPerPageChange = (itemsPerPage: number) => {
    setItemsPerPage(itemsPerPage);
  };

  return (
    <>
      <Heading>Tabrez Dal Task Assessment</Heading>
      {!selectedPost && !selectedUser ? (
        <TotalPosts>Total Posts: {totalPosts}</TotalPosts>
      ) : null}
      <Container>
        {selectedPost && selectedUser ? (
          <DetailedPostCardComponent
            post={selectedPost}
            user={selectedUser}
            onBackClick={handleBackClick}
          />
        ) : (
          <>
            <Posts
              posts={currentPosts}
              users={users}
              onPostClick={handlePostClick}
            />
          </>
        )}
      </Container>
      {!selectedPost && !selectedUser ? (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          itemsPerPage={itemsPerPage}
          onPageChange={onPageChange}
          onItemsPerPageChange={onItemsPerPageChange}
        />
      ) : null}
    </>
  );
};

export default App;
