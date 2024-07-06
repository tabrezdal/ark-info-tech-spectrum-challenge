import React, { useState } from 'react';
import styled from 'styled-components';

const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const PaginationControls = styled.div`
  display: flex;
  align-items: center;
`;

const PaginationButton = styled.button`
  margin: 0 5px;
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ItemsPerPageSelect = styled.select`
  margin-left: 10px;
  padding: 8px;
`;

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const handlePrevClick = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newItemsPerPage = parseInt(event.target.value);
    onItemsPerPageChange(newItemsPerPage);
  };

  return (
    <PaginationContainer>
      <PaginationControls>
        <PaginationButton
          onClick={handlePrevClick}
          disabled={currentPage === 1}
        >
          Previous
        </PaginationButton>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <PaginationButton
          onClick={handleNextClick}
          disabled={currentPage === totalPages}
        >
          Next
        </PaginationButton>
      </PaginationControls>
      <ItemsPerPageSelect
        value={itemsPerPage}
        onChange={handleItemsPerPageChange}
      >
        <option value="5">5 per page</option>
        <option value="10">10 per page</option>
        <option value="15">15 per page</option>
        <option value="20">20 per page</option>
      </ItemsPerPageSelect>
    </PaginationContainer>
  );
};

export default Pagination;
