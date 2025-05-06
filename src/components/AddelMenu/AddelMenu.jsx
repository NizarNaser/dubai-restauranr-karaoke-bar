import "./AddelMenu.css"
import { addel_list } from "../../assets/assets";
import { useTranslation } from 'react-i18next';
// eslint-disable-next-line react/prop-types
const ExploreMenu = ({addel,setAddel}) => {
    const {i18n } = useTranslation();
    return (
        <div className="addels">
      
      
                {addel_list.map((item, index) => {
                    return (
                        <button className={addel === item.addel_name ? "active" : ""} onClick={() => setAddel(prev => prev === item.addel_name ? "KICHEN" : item.addel_name)} key={index} >
                            
                            <p>{i18n.language==='en'?item.addel_name:item.addel_name_uk}</p>

                        </button>
                    )
                })}
     </div>
    )
}

export default ExploreMenu