import './AppBanner.css'
import logoImage from '../../assets/images/logo.svg'
export const AppBanner = () => {

    return (
        <div className='bannerAppContainer'>
            <div className='imageContainer'>
                <img className='logoImage' src={logoImage} alt='App logo'/>
            </div>
            <div className='titleContainer'>
               <h1>BootCamp School</h1>
            </div>
            <div className='emptyContainer'></div>
        </div>
    );
}