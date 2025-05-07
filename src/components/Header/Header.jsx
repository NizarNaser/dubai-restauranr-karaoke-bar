import "./Header.css";
import { useTranslation } from 'react-i18next';

function Header() {
  const { t } = useTranslation();

  return (
    <div className="header">
      <img
        src="https://res.cloudinary.com/dii3goppc/image/upload/v1746576022/header_img_svudii.webp"
        alt={t('header_img')}
        decoding="async"
        style={{ width: "100%", height: "auto", aspectRatio: "3 / 1" }}
      />
      <div className="header-contents">
        <h2>{t('Order-your-favourite-food-here')}</h2>
        <p>{t('Choose-from-a-diverse-menu')}</p>
        <button>{t('View-Menu')}</button>
      </div>
    </div>
  );
}

export default Header;
