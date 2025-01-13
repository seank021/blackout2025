import React, { useState } from 'react';

const PasswordModal = ({ isOpen, onClose, onConfirm, prepayId }) => {
    const [password, setPassword] = useState('');

    if (!isOpen) return null;

    const handleConfirm = () => {
        onConfirm(prepayId, password); // id와 password를 전달
        setPassword(''); // 비밀번호 초기화
        onClose(); // 모달 닫기
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
                <h2 className="text-lg font-bold mb-4 text-center">비밀번호 입력</h2>
                <input
                    type="text"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="비밀번호를 입력하세요"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 transition-colors mb-4"
                />
                <div className="grid grid-cols-2 gap-4">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-200 rounded-lg text-gray-700 hover:bg-gray-300 transition"
                    >
                        취소
                    </button>
                    <button
                        onClick={handleConfirm}
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        확인
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PasswordModal;
