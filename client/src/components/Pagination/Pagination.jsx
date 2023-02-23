import React from 'react'
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, onPageChange, setCurrentPage }) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    const handlerClickPrev = (event) =>{
      event.preventDefault()
      if(currentPage > 1)
      setCurrentPage(currentPage - 1)
    }
    const handlerClickNext = (event) =>{
      event.preventDefault()
      if(currentPage < totalPages)
      setCurrentPage(currentPage + 1)
    }
  
    return (
      <div className={styles.container}>
        <button onClick={handlerClickPrev}>Prev</button>
        {pages.map((page) => (
          <button key={page} onClick={() => onPageChange(page)} disabled={currentPage === page}>
            {page}
          </button>
        ))}
        <button onClick={handlerClickNext}>Next</button>
      </div>
    );
  };
  
  export default Pagination;