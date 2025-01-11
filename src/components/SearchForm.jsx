import React from 'react';

const SearchForm = ({ onSearch }) => {
    return (
        <div className="w-full bg-white p-4 rounded-lg shadow-md">
            <form
                onSubmit={e => {
                    e.preventDefault();
                    onSearch();
                }}
                className="flex items-center justify-center"
            >
                <div className="relative flex items-center w-full max-w-xl">
                    <img src="src/assets/icons/search.svg" alt="Search Icon" className="absolute left-3 w-5 h-5" />
                    <input
                        type="text"
                        placeholder="가게를 검색해보세요"
                        id="keyword"
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />
                    <button type="submit" className="absolute right-3 text-gray-500 hover:text-blue-500">
                        검색
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
