import { useLocation, useNavigate } from 'react-router-dom';
import '../../../src/styles/home.css';
import privateQR from '../../assets/images/qr-private.png';
import publicQR from '../../assets/images/qr-public.png';
import backBtn from '../../assets/icons/backBtn.svg';

const QR = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const type = location.state;

    console.log(type);

    return (
        <div className="w-full h-screen bg-white flex flex-col items-center">
            {/* 상단 헤더 */}
            <div className="w-full h-[60px] flex justify-between items-center px-4 bg-white mt-2">
                <img src={backBtn} alt="back" className="ml-1 cursor-pointer" onClick={() => navigate(-1)} />
                <h1 className="text-[18px] font-bold text-black">QR Code</h1>
                <div className="w-[30px] h-[30px]"></div>
            </div>

            {/* QR 카드 */}
            <div className="w-[85%] p-6 rounded-xl flex flex-col items-center justify-center h-[calc(100%-150px)]">
                <div className="w-full bg-[#F8F9FA] p-6 rounded-xl shadow-lg flex flex-col items-center justify-center h-[400px]">
                    {/* QR 이미지 */}
                    <img
                        src={type === 'public' ? publicQR : privateQR}
                        alt="QR Code"
                        className="w-[200px] h-[200px] mb-6"
                    />

                    {/* 안내 메시지 */}
                    <p className="text-[#666] text-center text-[14px]">
                        이용하려는 매장에서 <br /> 위 QR코드를 보여주세요
                    </p>
                </div>
            </div>
        </div>
    );
}

export default QR;
