import "./Header.css"
import header_img from '/header_img.jpg'
import { useTranslation } from 'react-i18next';
function Header() {
  const { t} = useTranslation();
  return (
    <div className="header">
      <img src={header_img} alt={t('header_img')} />
      <div className="header-contents">

        <h2>{t('Order-your-favourite-food-here')}</h2>
        <p>{t('Choose-from-a-diverse-menu')}</p>
<button>{t('View-Menu')}</button>

      </div>
    
    </div>
  )
}

export default Header