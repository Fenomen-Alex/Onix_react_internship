/* eslint-disable no-plusplus,react/prop-types,react/no-array-index-key */
import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const SlPagination = (props) => {
  const {
    currentPage, totalCount, pageSize, setCurrentPage 
  } = props;
  const pagesCount = Math.ceil(totalCount / pageSize);

  const handleClick = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };
  
  return (
    <div className="pagination-wrapper">

      <Pagination aria-label="Page navigation example">

        <PaginationItem disabled={currentPage <= 0}>

          <PaginationLink
            onClick={(e) => handleClick(e, currentPage - 1)}
            previous
            href="#"
          />

        </PaginationItem>

        {[...Array(pagesCount)].map((page, i) => (
          <PaginationItem active={i === currentPage} key={i}>
            <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
              {i + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem disabled={currentPage >= pagesCount - 1}>

          <PaginationLink
            onClick={(e) => handleClick(e, currentPage + 1)}
            next
            href="#"
          />

        </PaginationItem>

      </Pagination>

    </div>

  );
};

export default SlPagination;
