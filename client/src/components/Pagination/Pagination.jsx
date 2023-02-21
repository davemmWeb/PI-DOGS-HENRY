import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  
    return (
      <div className={styles.container}>
        {pages.map((page) => (
          <button key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
            {page}
          </button>
        ))}
      </div>
    );
  };
  
  export default Pagination;