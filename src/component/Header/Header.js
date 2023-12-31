import './Header.css'
import logo from "../../image/logo/winelogo.jpg";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeIcon from "@mui/icons-material/Home";
import {data} from "../../mockData";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Header () {

    return (
        <div className="header_search">
            <div className="header_navbar">
                <div className="header_navbar_contact">
                    <div className="header_navbar-company_name_Vietname">CÔNG TY CỔ PHẦN THƯƠNG MAI DỊCH VỤ VÀ ĐẦU TƯ QUỐC TẾ Ý-VIỆT</div>
                    <div className="header_navbar-company_name_English">y - viet service trading and international investment joint stock company</div>
                    <div className="header_navbar-company_address">Địa chỉ : Số 9 Liễu Giai, Ba Đình, Hà Nội</div>
                </div>
                <div className="header_navbar_logo">
                    <img className="header_navbar_logo-img" src={logo} alt={logo}/>
                </div>
                <div className="header_navbar_search">
                    <div className="header_navbar_search-inside">
                        <div className="header_navbar_search-component">
                            <div className="header_navbar_search-text">Nhập từ khóa cần tìm</div>
                            <div className="header_navbar_search-icon">
                                <div className="header_navbar_search-icon-text"><SearchIcon/></div>
                            </div>
                        </div>
                        <div className="header_navbar_search-cart"><ShoppingCartOutlinedIcon/></div>
                    </div>
                </div>
            </div>
            <div className="header_navbar_middle">
                <div className="header_navbar_middle-inside">
                    <div className="header_navbar_middle-icon"><HomeIcon/></div>
                    <div>Rượu Vang</div>
                    <div>Bia nhập khẩu</div>
                    <div>Vang bịch</div>
                    <div>chamgpage</div>
                    <div>Quà tặng-phụ kiện</div>
                    <div>VIDEO</div>
                    <div>Flash sales</div>
                    <div>Tin tức</div>
                    <div>A-Z</div>
                </div>
            </div>
                <div className="header_navbar_bottom">
                <div className='relative flex items-center'>
                    <div id='slider' className='slider'
                         style={{overflow: 'hidden'}}
                    >
                            {data.map((item) => (
                                <img key={item.id}
                                     className='slider-item'
                                     src={item.img}
                                     alt='banner'/>
                            ))}
                    </div>
                </div>
            </div>
            <div className="header_intro">
                <div className="header_intro-header">
                    <h2> IVCom - Rượu vang nhập khẩu chính hãng. </h2>
                    <p> Nơi quy tụ những dòng vang nổi tiếng </p>
                    <h1>" Mang cảm xúc từ Sicilia - Italy đến Việt Nam "</h1>
                </div>
            </div>
        </div>
    )
}

export default Header