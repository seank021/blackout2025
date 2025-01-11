import '../../../src/styles/globals.css';
import Kakaomap from './kakaomap';
import '../../styles/home.css';
import logo from '../../assets/icons/logo-small.svg';

const Payment = () => {
    return (
        <div className="container-col">
            <img className="absolute top-[20px] left-[20px]" src={logo} alt="logo" />
            <div className="flex items-center justify-center gap-[100px] mt-[25px]">
                <div className="text-black text-lg font-bold font-['Inter'] leading-7 mt-[2px]">선결제하기</div>
            </div>
            <Kakaomap />
        </div>
    );
};

export default Payment;
