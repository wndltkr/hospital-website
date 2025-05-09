import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  searchType: string;
  onSearchTermChange: (value: string) => void;
  onSearchTypeChange: (value: string) => void;
  onSearch: () => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  searchType,
  onSearchTermChange,
  onSearchTypeChange,
  onSearch,
  placeholder
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch();
    }
  };

  return (
    <div className="flex justify-center mb-8">
      <div className="flex items-center bg-white rounded-full shadow-md px-4 py-2 w-[600px]">
        <select
          value={searchType}
          onChange={(e) => onSearchTypeChange(e.target.value)}
          className="px-3 py-2 text-sm text-gray-600 border-r border-gray-200 focus:outline-none bg-transparent"
        >
          <option value="title">제목</option>
          <option value="content">내용</option>
        </select>
        <input
          type="text"
          placeholder={placeholder || (searchType === 'title' ? "제목으로 검색" : "내용으로 검색")}
          value={searchTerm}
          onChange={(e) => onSearchTermChange(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-2 text-sm text-gray-600 focus:outline-none bg-transparent"
        />
        <button 
          onClick={onSearch}
          className="p-2 text-gray-400 hover:text-blue-500 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SearchBar; 