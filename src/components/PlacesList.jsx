import React, { useState, useEffect, useRef } from 'react';
import PlaceItem from './PlaceItem';

const PlacesList = ({ places, onPlaceClick }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [shouldAllowExpand, setShouldAllowExpand] = useState(false);
    const lastScrollTop = useRef(0);

    useEffect(() => {
        setShouldAllowExpand(places.length > 2);
        setIsExpanded(false);
    }, [places]);

    const handleScroll = e => {
        if (!shouldAllowExpand) return;

        const element = e.target;
        const currentScrollTop = element.scrollTop;

        // 스크롤이 맨 위에 있고, 위로 스크롤하는 중이라면
        if (currentScrollTop < 10 && currentScrollTop < lastScrollTop.current && isExpanded) {
            setIsExpanded(false);
        }

        // 스크롤이 맨 아래에 가깝고, 아래로 스크롤하는 중이라면
        const isNearBottom = element.scrollHeight - currentScrollTop - element.clientHeight < 50;
        if (isNearBottom && currentScrollTop > lastScrollTop.current && !isExpanded) {
            setIsExpanded(true);
        }

        lastScrollTop.current = currentScrollTop;
    };

    return (
        <div
            className={`bg-white rounded-lg shadow-md w-full transition-all duration-300 ease-in-out ${
                isExpanded ? 'fixed top-0 left-0 right-0 bottom-0 z-50 overflow-hidden' : ''
            }`}
        >
            <ul
                className={`w-full ${
                    isExpanded
                        ? 'h-screen overflow-y-auto px-4 pt-4 pb-16'
                        : places.length <= 2
                          ? 'h-fit'
                          : 'max-h-[222px] overflow-y-auto'
                }`}
                onScroll={handleScroll}
            >
                {places.map((place, index) => (
                    <PlaceItem key={index} place={place} index={index} onClick={() => onPlaceClick(place)} />
                ))}
            </ul>
            {isExpanded && (
                <button
                    className="fixed bottom-4 right-4 bg-white rounded-full p-3 shadow-lg"
                    onClick={() => setIsExpanded(false)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            )}
        </div>
    );
};

export default PlacesList;
