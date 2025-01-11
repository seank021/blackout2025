import React from 'react';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places, onPlaceClick, onSearch }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="text-center mb-4">
                <form
                    onSubmit={e => {
                        e.preventDefault();
                        onSearch();
                    }}
                    className="flex items-center justify-center gap-2"
                >
                    <span>키워드 :</span>
                    <input
                        type="text"
                        defaultValue="이태원 맛집"
                        id="keyword"
                        className="border border-gray-300 rounded px-2 py-1"
                    />
                    <button type="submit" className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                        검색하기
                    </button>
                </form>
            </div>

            <hr className="border-t-2 border-gray-200 my-4" />

            <ul className="space-y-2 max-h-[400px] overflow-y-auto">
                {places.map((place, index) => (
                    <PlaceItem key={index} place={place} index={index} onClick={() => onPlaceClick(place)} />
                ))}
            </ul>
        </div>
    );
};

export default PlacesList;
