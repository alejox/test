import React from 'react';
import './pagination.scss';

export const Pagination = ({
  totalTodos,
  todoPerPage,
  setCurrentPage,
  currentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalTodos / todoPerPage); i++) {
    pages.push(i);
  }
  return (
    <section className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? 'active' : ''}
          >
            {page}
          </button>
        );
      })}
    </section>
  );
};
