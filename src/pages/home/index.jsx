import '../../../src/styles/globals.css';
import '../../../src/styles/home.css';
import logo from '../../assets/icons/logo-home.svg';
import search from '../../assets/icons/search.svg';
import folderIcon from '../../assets/images/folder.svg';
import publicStoreIcon from '../../assets/images/map.svg';
import privateStoreIcon from '../../assets/images/lock.svg';

const Home = () => {
    return (
        <div>
            {/* Logo */}
            <div className="logo-container">
                <img src={logo} alt="PrePay Logo" className="logo" />
            </div>

            {/* Search Bar */}
            <div className="search-bar-container">
                <div className="search-bar">
                    <img src={search} alt="Search Icon" className="search-icon" />
                    <input
                        type="text"
                        placeholder="가게를 검색해보세요"
                        placeholderTextColor="#CCC"
                        className="search-input"
                    />
                </div>
            </div>
            <p className="sub-text">신뢰로 이어지는 따뜻한 연결</p>

            {/* Cards */}
            <div className="card-container">
                {/* My Store */}
                <div className="large-card">
                    <div>
                        <h2 className="card-title-big">마이 스토어  &gt;</h2>
                        <p className="card-text-big mt-[10px]">
                            이미 등록된 가게로, 자유롭게{'\n'}사용이 가능해요
                        </p>
                    </div>
                    <img src={folderIcon} alt="My Store" className="w-[88px] h-[80px]" />
                </div>

                {/* Small Cards */}
                <div className="small-card-container">
                    <div className="small-card">
                        <div>
                            <h2 className="card-title-small">퍼블릭 스토어  &gt;</h2>
                            <p className="card-text-small">
                                모든 사람이 사용 가능한 매장으로, 비밀번호 없이
                                이용 가능해요
                            </p>
                        </div>
                        <img src={publicStoreIcon} alt="Public Store" className="w-[30px] h-[46px]" />
                    </div>
                    <div className="small-card">
                        <div>
                            <h2 className="card-title-small">프라이빗 스토어 &gt;</h2>
                            <p className="card-text-small">
                                이미 선결제가 완료된 매장으로, 비밀번호를 통해
                                이용 가능해요
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
