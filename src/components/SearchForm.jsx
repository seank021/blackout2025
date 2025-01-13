import React from 'react';
import searchIcon from '../assets/icons/search.svg';

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
                <div className="relative flex items-center w-[95%] max-w-xl">
                    {/* Input Field */}
                    <input
                        type="text"
                        placeholder="가게를 검색해보세요"
                        id="keyword"
                        className="w-full pl-4 pr-12 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                    />

                    {/* Search Icon Button */}
                    <button type="submit" className="absolute right-3 flex items-center justify-center w-6 h-6">
                        <img src={searchIcon} alt="Search Icon" className="w-full h-full" />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default SearchForm;
