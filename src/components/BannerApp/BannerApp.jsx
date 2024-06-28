import './BannerApp.css'
import logoImage from '../../assets/images/logo.svg'
export const BannerApp = () => {

    //https://www.svgrepo.com/vectors/book/multicolor/3

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