import '../../../src/styles/globals.css';
import '../../../src/styles/home.css';
import logo from '../../assets/icons/logo-home.svg';
import search from '../../assets/icons/search.svg';
import arrow from '../../assets/icons/right-arrow.svg';
import folderIcon from '../../assets/images/folder.svg';
import publicStoreIcon from '../../assets/images/map.svg';
import privateStoreIcon from '../../assets/images/lock.svg';

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
                <div className="large-card">
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
                </div>

                {/* Small Cards */}
                <div className="small-card-container">
                    <div className="small-card">
                        <div className="flex flex-col">
                            <div className="flex items-center">
                                <h2 className="card-title-small">퍼블릭 스토어</h2>
                                <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                            </div>
                            <p className="card-text-small mt-[3px]">
                                모든 사람이{'\n'}사용 가능한 매장으로,{'\n'}비밀번호 없이{'\n'}이용 가능해요!
                            </p>
                        </div>
                        <img src={publicStoreIcon} alt="Public Store" className="w-[30px] h-[46px]" />
                    </div>
                    <div className="small-card">
                        <div>
                            <div className="flex items-center">
                                <h2 className="card-title-small">프라이빗 스토어</h2>
                                <img src={arrow} alt="Arrow" className="w-[12px] h-[24px] ml-[5px]" />
                            </div>
                            <p className="card-text-small mt-[3px]">
                                이미 선결제가{'\n'}완료된 매장으로,{'\n'}비밀번호를 통해{'\n'}이용 가능해요!
                            </p>
                        </div>
                        <img src={privateStoreIcon} alt="Private Store" className="w-[30px] h-[41px]" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
