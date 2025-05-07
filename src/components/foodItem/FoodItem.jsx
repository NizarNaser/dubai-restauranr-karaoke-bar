/* eslint-disable react/prop-types */
import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./FoodItem.css";
import { StoreContext } from "../../context/StoreContext";

export const FoodItem = ({ id, name, price, ves, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  // تحسين رابط Cloudinary
  const optimizedImage = image.replace("/upload/", "/upload/q_auto,f_auto,w_300/");

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img
          className="food-item-image"
          src={optimizedImage}
          alt={optimizedImage}
          width="300"
          height="200"
          decoding="async"
          loading="lazy"// تحسين LCP
          style={{ aspectRatio: "3 / 2", objectFit: "cover", borderRadius: "10px" }}
        />

        {!cartItems[id] ? (
          <img
            loading="lazy"
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
            width="35"
            height="35"
          />
        ) : (
          <div className="food-item-counter">
            <img
              loading="lazy"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="remove from Cart"
              width="35"
              height="35"
            />
            <p>{cartItems[id]}</p>
            <img
              loading="lazy"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add to cart"
              width="35"
              height="35"
            />
          </div>
        )}
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating starts img" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">&#8372; {price}</p>
        <p className="food-item-gram">&#9878; {ves}</p>
      </div>
    </div>
  );
};
