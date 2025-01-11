import React from 'react';

function LoadingSpinner() {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-b-32 border-[#0763c2]"></div>
            <div className="absolute mt-24 text-white font-extrabold">처리중...</div>
        </div>
    );
}

export default LoadingSpinner;
