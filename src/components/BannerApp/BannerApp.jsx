import './BannerApp.css'
import logoImage from '../../assets/images/logo.svg'
export const BannerApp = () => {

    return (
        <div className='BannerAppContainer'>
            <div className='ImageContainer'>
                <img className='LogoImage' src={logoImage} alt='App logo'/>
            </div>
            <div className='TitleContainer'>
               <h1>BootCamp School</h1>
            </div>
            <div className='EmptyContainer'></div>
        </div>
    );
}