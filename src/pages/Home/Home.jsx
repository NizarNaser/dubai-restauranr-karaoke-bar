import { useState, useEffect } from "react";
import AddelMenu from "../../components/AddelMenu/AddelMenu";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import Header from "../../components/Header/Header";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function Home() {
  const [category, setCategory] = useState("All");
  const [addel, setAddel] = useState("KICHEN");
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();

  // إعادة تعيين الصفحة إلى 1 عند تغيير الكاتيجوري
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  return (
    <div>
      <Helmet>
        <title>{t("title")}</title>
        <meta name="description" content={t("description")} />
        <meta name="keywords" content={t("keywords")} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <Header />
      <AddelMenu addel={addel} setAddel={setAddel} />
      <ExploreMenu
        category={category}
        setCategory={setCategory}
        addel={addel}
        setCurrentPage={setCurrentPage}
      />
      <FoodDisplay
        category={category}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Home;
