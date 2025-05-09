import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange
}) => {
  return (
    <div className="mt-8 flex justify-center">
      <nav className="flex items-center space-x-1">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-2 rounded-lg text-gray-500 hover:text-blue-500 disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        {[...Array(totalPages)].map((_, index) => {
          const pageNumber = index + 1;
          const isCurrentPage = currentPage === pageNumber;
          const isNearCurrentPage = 
            Math.abs(pageNumber - currentPage) <= 1 || 
            pageNumber === 1 || 
            pageNumber === totalPages;

          if (!isNearCurrentPage) {
            if (pageNumber === 2 || pageNumber === totalPages - 1) {
              return <span key={pageNumber} className="px-2 text-gray-500">...</span>;
            }
            return null;
          }

          return (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                isCurrentPage
                  ? 'bg-gray-700 text-white shadow-md'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {pageNumber}
            </button>
          );
        })}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-2 rounded-lg text-gray-500 hover:text-blue-500 disabled:opacity-30 disabled:hover:text-gray-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </nav>
    </div>
  );
};

export default Pagination; 