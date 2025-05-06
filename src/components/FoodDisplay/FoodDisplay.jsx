/* eslint-disable react/prop-types */
import { useContext } from "react"
import "./FoodDisplay.css"
import { StoreContext } from "../../context/StoreContext"
import { FoodItem } from "../foodItem/FoodItem"

import { useTranslation } from 'react-i18next';

const FoodDisplay = ({ category }) => {
  const { t, i18n } = useTranslation();
  const { food_list } = useContext(StoreContext)
  return (
    <div className="food_display" id="food_display">
      <h3 className="The_bill">{t('The_bill')}</h3>
      <h2>{t('Top-dishes-near-you')}</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {

            return <FoodItem key={index} id={item._id} name={i18n.language === 'en' ? item.name : item.name_uk} description={i18n.language === 'en' ? item.description : item.description} price={item.price} ves={item.ves} image={item.image} />

          }
        })}
      </div>

    </div>
  )
}

export default FoodDisplay