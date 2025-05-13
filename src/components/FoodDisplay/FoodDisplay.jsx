import { useContext, useEffect, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import { FoodItem } from "../foodItem/FoodItem";
import Loader from "../Loader/Loader";
import { useTranslation } from 'react-i18next';

const FoodDisplay = ({ category, currentPage, setCurrentPage }) => {
  const { t, i18n } = useTranslation();
  const { food_list, loading } = useContext(StoreContext);
  const itemsPerPage = 22;

  // تصفية العناصر حسب الفئة
  const filteredList = food_list.filter(item =>
    category === "All" || category === item.category
  );

  // حساب الفهارس
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredList.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  return (
    <div className="food_display" id="food_display">
      <h3 className="The_bill">{t('The_bill')}</h3>
      <h2>{t('Top-dishes-near-you')}</h2>

      <div className="food-display-list">
        {loading ? (
          <Loader />
        ) : (
          currentItems.map((item) => {
            return (
              <FoodItem
                key={item._id}
                index={item._id}
                id={item._id}
                name={i18n.language === 'en' ? item.name : item.name_uk}
                description={i18n.language === 'en' ? item.description : item.description_uk}
                price={item.price}
                gram={item.gram || ""}
                image={item.image}
              />
            );
          })
        )}
      </div>

      {/* Pagination Controls */}
      {!loading && totalPages > 1 && (
        <div className="pagination">
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            {t('Previous')}
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={currentPage === index + 1 ? "active-page" : ""}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            {t('Next')}
          </button>
        </div>
      )}
    </div>
  );
};

export default FoodDisplay;
