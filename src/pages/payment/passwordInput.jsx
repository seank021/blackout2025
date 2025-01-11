import React, { useEffect, useRef, useState } from 'react';
import backBtn from '../../assets/icons/backBtn.svg';
import Web3 from 'web3';
import { useNavigate, useLocation } from 'react-router-dom';
import { contractABI } from '../../constants/abi';
import LoadingSpinner from '../../components/LoadingSpinner';

function PasswordInput() {
    const { place, privateKey, credit, storeType } = useLocation().state;
    const navigate = useNavigate();
    const inputRef = useRef(null);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
            inputRef.current.style.outline = 'none';
        }
    }, []);

    const handleAddCredit = async () => {
        setIsLoading(true);
        const contractAddress = '0xC84296F3A6B769CF798B7061681229A558DDe264';
        const walletAddress = localStorage.getItem('walletAddress');

        try {
            const web3 = new Web3(
                Web3.givenProvider || 'https://eth-sepolia.g.alchemy.com/v2/qrFrgtCIqd6BTonkCCFTZ1oFth75Ux5H'
            );

            const storeName = place.place_name || 'defaultStore';
            const signer = walletAddress;
            const recordType = storeType;
            const inputPassword = password;
            const creditAmount = web3.utils.toWei(credit, 'ether');

            const contract = new web3.eth.Contract(contractABI, contractAddress);

            const data = contract.methods
                .addCredit(
                    storeName,
                    signer,
                    recordType,
                    inputPassword,
                    creditAmount,
                    '0x4c9b625E989587aDFB1104a28D60D0E1c1F15caE' // 가게 지갑 주소
                )
                .encodeABI();

            const tx = {
                from: walletAddress, // 사용자 지갑 주소
                to: '0x4c9b625E989587aDFB1104a28D60D0E1c1F15caE', // 가게 지갑 주소
                gas: 210000,
                maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'),
                maxFeePerGas: web3.utils.toWei('50', 'gwei'),
                data: data,
            };

            const signedTx = await web3.eth.accounts.signTransaction(tx, privateKey);
            const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);

            console.log('트랜잭션 성공:', receipt);
            alert('결제가 성공되었어요 !');
            navigate('/');
        } catch (error) {
            console.error('트랜잭션 실패:', error);
            alert('결제에 실패했습니다. 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="container-col">
            {isLoading && <LoadingSpinner />}
            <img
                className="absolute top-[20px] left-[20px]"
                src={backBtn}
                alt="logo"
                onClick={() => !isLoading && navigate(-1)}
            />
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
                            onChange={e => setPassword(e.target.value)}
                            ref={inputRef}
                            className="w-[80vw] rounded-[12px] border-gray-400 self-stretch text-[24px] font-bold font-['Inter'] leading-7 py-[5px]"
                            placeholder="비밀번호를 입력해주세요"
                            type="password"
                            disabled={isLoading}
                        />
                    </div>
                </div>
                <button
                    onClick={handleAddCredit}
                    disabled={isLoading}
                    className={`w-[80vw] h-10 rounded-[10px] flex items-center justify-center text-black text-center font-['Inter'] text-[12px] font-bold ${
                        isLoading ? 'bg-gray-300 cursor-not-allowed' : 'bg-[#c4dcf7] cursor-pointer'
                    }`}
                >
                    {isLoading ? '처리중...' : '결제하기'}
                </button>
            </div>
        </div>
    );
}

export default PasswordInput;
