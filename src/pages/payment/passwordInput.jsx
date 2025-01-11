import React, { useEffect, useRef } from 'react';
import backBtn from '../../assets/icons/backBtn.svg';
import Web3 from 'web3'; // Web3.js 라이브러리
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { contractABI } from '../../constants/abi';
function PasswordInput() {
    const { place } = useLocation().state;
    const navigate = useNavigate();

    const inputRef = useRef(null);

    // State for input values
    const [password, setPassword] = useState('');
    const [credit, setCredit] = useState('');

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.outline = 'none';
        }
    }, []);

    const handleAddCredit = async () => {
        // 컨트랙트 정보
        const contractABI = contractABI;

        const contractAddress = '0x2aF6d726B110747F02AFaAa9a23d63B1d85D9878';

        // Web3 설정
        const web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

        // 사용자 입력값
        const storeName = place || 'defaultStore'; // 상점 이름
        const signer = '0xSignerAddress'; // 크레딧 소유자의 주소
        const recordType = 'exampleRecordType'; // 레코드 유형
        const inputPassword = password; // 비밀번호
        const creditAmount = web3.utils.toWei(credit, 'ether'); // 크레딧 값 (예시로 ETH 사용)

        // 컨트랙트 인스턴스 생성
        const contract = new web3.eth.Contract(contractABI, contractAddress);

        try {
            // 현재 사용자의 계정 가져오기
            const accounts = await web3.eth.requestAccounts();
            const account = accounts[0];

            // 트랜잭션 생성
            await contract.methods
                .addCredit(storeName, signer, recordType, inputPassword, creditAmount)
                .send({ from: account });

            alert('크레딧 추가 성공!');
        } catch (error) {
            console.error('크레딧 추가 실패:', error);
            alert('크레딧 추가에 실패했습니다. 다시 시도해주세요.');
        }
    };

    return (
        <div className="container-col ">
            <img className="absolute top-[20px] left-[20px]" src={backBtn} alt="logo" onClick={() => navigate(-1)} />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">선결제하기</div>
            </div>
            <div className="w-[100vw] h-[86vh] items-center justify-center flex-col gap-[41px] inline-flex">
                <div className="self-stretch h-[138px] flex-col justify-start items-center gap-[17px] inline-flex">
                    <div className="h-[101px] flex-col justify-start items-start gap-[18px] flex">
                        <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                            <div>
                                <span className="text-black text-sm font-medium font-['Inter'] leading-7">
                                    마지막으로
                                    <br />
                                </span>
                                <span className="text-black text-lg font-bold font-['Inter'] leading-7">
                                    선결제 매장 이용 시 사용해야 하는
                                </span>
                            </div>
                        </div>
                        <input
                            ref={inputRef}
                            className="w-[80vw] rounded-[12px] border-gray-400 self-stretch text-[24px] font-bold font-['Inter'] leading-7 py-[5px]"
                            placeholder="비밀번호를 입력해주세요"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center gap-[3px]  "></div>
                </div>
                <div className="w-[80vw] h-10 relative mt-[10px]">
                    <div
                        onClick={handleAddCredit}
                        className="w-[100%] h-10 left-0 top-0 absolute bg-[#c4dcf7] rounded-[10px] flex items-center justify-center text-black text-center font-['Inter'] text-[12px] font-bold"
                    >
                        결제하기
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PasswordInput;
