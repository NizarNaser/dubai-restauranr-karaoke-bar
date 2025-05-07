import { useState } from "react"
import AddelMenu from "../../components/AddelMenu/AddelMenu"
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu"
import Header from "../../components/Header/Header"
import "./Home.css"
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay"
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
function Home() {
    const [category,setCategory] = useState('All')
    const [addel,setAddel] = useState('KICHEN')
    const { t } = useTranslation();

  return (
    <div>
      <Helmet>
        <title>{t('title')}</title>
        <meta name="description" content={t('description')} />
        <meta name="keywords" content={t('keywords')} />
        <meta name="robots" content="index, follow" />
       
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1KFV1NEV6E"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-1KFV1NEV6E');
</script>
        <link
  rel="preload"
  as="image"
  href="https://res.cloudinary.com/dii3goppc/image/upload/v1746576022/header_img_svudii.webp"
  type="image/webp"
/>
      </Helmet>
        <Header/>
        <AddelMenu addel={addel} setAddel={setAddel} />
        <ExploreMenu category={category} setCategory={setCategory} addel={addel} />
        <FoodDisplay category={category}/>
        
    </div>
  )
}

export default Home