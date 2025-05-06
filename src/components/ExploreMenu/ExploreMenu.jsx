import "./ExploreMenu.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../../components/Loader/Loader";

const ExploreMenu = ({ category, setCategory, addel }) => {
    const { i18n } = useTranslation();
    const [cat_list, setCatList] = useState([]);
    const [loading, setLoading] = useState(true);

    const url = import.meta.env.VITE_API_URL;

    const fetchList = async () => {
        try {
            const response = await axios.get(`${url}/api/cat/list-cat`);
            if (response.data.success) {
                setCatList(response.data.data);
                setLoading(false);

            } else {
                toast.error("Error fetching categories");
                setLoading(false);

            }
        } catch (error) {
            toast.error("Failed to fetch data");
            console.error("Fetch error:", error);
        }
    };

    useEffect(() => {
        fetchList();
       
    }, []);
    if (loading) return <Loader />;
    return (
        <div className="explore-menu" id="explore-menu">
            <div className="explore-menu-list">
                {cat_list.length > 0 && cat_list[0].hasOwnProperty("addel") ? (
                    cat_list.filter(item => item.addel === addel).map((item, index) => (
                        <div
                            key={index}
                            className="explore-menu-list-item"
                            onClick={() => setCategory((prev) => (prev === item.name ? "All" : item.name))}
                        >
                            <img
                                className={category === item.name ? "active" : ""}
                                src={item.image}
                                alt={i18n.language === "en" ? item.name : item.name_uk}
                            />
                            <p>{i18n.language === "en" ? item.name : item.name_uk}</p>
                        </div>
                    ))
                ) : (
                    <p>No categories found or 'addel' is missing</p>
                )}
            </div>
            <hr />
        </div>
    );
};

export default ExploreMenu;
