import './AppBanner.css'
import logoImage from '../../assets/images/logo.svg'
export const AppBanner = () => {

    return (
        <div className='appBannerContainer'>
            <div className='appBannerImageContainer'>
                <img className='appBannerLogoImage' src={logoImage} alt='App logo'/>
            </div>
            <div className='appBannerTitleContainer'>
               <h1>BootCamp School</h1>
            </div>
            <div className='appBannerEmptyContainer'></div>
        </div>
    );
}