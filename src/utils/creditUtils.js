import { ethers } from 'ethers';

const CONTRACT_ADDRESS = process.env.REACT_APP_CONTRACT_ADDRESS;
const NODIT_API_KEY = process.env.REACT_APP_NODIT_API_KEY;
const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;

// 컨트랙트 ABI - 필요한 함수만 포함
const ABI = [
    {
        inputs: [
            { name: 'store_name', type: 'string' },
            { name: 'signer', type: 'address' },
            { name: 'record_type', type: 'string' },
            { name: 'password', type: 'string' },
            { name: 'credit', type: 'uint256' },
        ],
        name: 'addCredit',
        outputs: [],
        stateMutability: 'nonpayable',
        type: 'function',
    },
];

export const addCredit = async (storeName, recordType, password, amount) => {
    try {
        // Nodit 프로바이더 설정
        const provider = new ethers.providers.JsonRpcProvider(`https://ethereum-holesky.nodit.io/${NODIT_API_KEY}`);

        // 지갑 연결
        const signer = new ethers.Wallet(PRIVATE_KEY, provider);

        // 컨트랙트 인스턴스 생성
        const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);

        // addCredit 호출
        const tx = await contract.addCredit(
            storeName, // store_name
            signer.address, // signer address
            recordType, // record_type
            password, // password
            ethers.utils.parseEther(amount.toString()) // credit amount in wei
        );

        // 트랜잭션 완료 대기
        const receipt = await tx.wait();

        return receipt;
    } catch (error) {
        console.error('크레딧 추가 실패:', error);
        throw error;
    }
};
