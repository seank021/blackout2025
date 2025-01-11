import '../../../src/styles/globals.css';
import '../../../src/styles/home.css';
import logo from '../../assets/icons/logo-home.svg';
import arrow from '../../assets/icons/right-arrow.svg';
import folderIcon from '../../assets/images/folder.svg';
import publicStoreIcon from '../../assets/images/map.svg';
import privateStoreIcon from '../../assets/images/lock.svg';

/* pages */
import MyStore from './my-store';
import PublicStore from './public-store';
import PrivateStore from './private-store';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='home-container'>
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="PrePay Logo" className="logo" />
            </div>
            <p className="sub-text">신뢰로 이어지는 따뜻한 연결</p>

            {/* Cards */}
            <div className="card-container">
                {/* My Store */}
                <Link className="large-card" to="/my-store">
                    <div className='flex flex-col'>
                        <div className="flex items-center">
                            <h2 className="card-title-big">마이 스토어</h2>
                            <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                        </div>
                        <p className="card-text-big mt-[7px]">
                            이미 내가 등록한 매장으로,{'\n'}자유롭게 사용이 가능해요!
                        </p>
                    </div>
                    <img src={folderIcon} alt="My Store" className="w-[90px] h-[80px]" />
                </Link>

                {/* Small Cards */}
                <div className="small-card-container">
                    <Link className="small-card" to="/public-store">
                        <div className="flex flex-col w-[100%]">
                            <div className="flex items-center mb-[3px]">
                                <h2 className="card-title-small">퍼블릭 스토어</h2>
                                <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="card-text-small">
                                    비밀번호 없이{'\n'}모두가 자유롭게{'\n'}이용 가능해요!{'\n'}
                                </p>
                                <img src={publicStoreIcon} alt="Public Store" className="w-[30px] h-[46px]" />
                            </div>
                        </div>
                    </Link>
                    <Link className="small-card" to="/private-store">
                        <div className="flex flex-col w-[100%]">
                            <div className="flex items-center mb-[3px]">
                                <h2 className="card-title-small">프라이빗 스토어</h2>
                                <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="card-text-small">
                                    비밀번호를 입력해야{'\n'}이용 가능해요!{'\n'}
                                </p>
                                <img src={privateStoreIcon} alt="Private Store" className="w-[30px] h-[41px]" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
