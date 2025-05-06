import { assets } from "../../assets/assets"
import "./Footer.css"
import { useTranslation } from 'react-i18next';
function Footer() {
  const { t} = useTranslation();
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
           <div className="footer-content-left">
             <img src={assets.logo} alt="" />
             <p>{t('Choose-from-a-diverse-menu')}</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
           </div>
           <div className="footer-content-center">
            <h2>{t('COMPANY')}</h2>
              <ul>
                <li>{t('home')}</li>
                <li>{t('About-us')}</li>
                <li>{t('Delivery')}</li>
                <li>{t('Privacy-policy')}</li>
              </ul>

           </div>
           <div className="footer-content-right">
             <h2>{t('GET-IN-TOUCH')}</h2>
             <ul>
                <li>+38 063 107 00 11</li>
                <li>restaurant.dubai.kiev@gmail.com</li>
             </ul>
           </div>

        </div>
         <hr/>
         <p className="footer-copyright">Copyright 2024 © https://github.com/NizarNaser/Dubai-restaurant - {t('All-Right-Reserved')}.</p>
    </div>
  )
}

export default Footer