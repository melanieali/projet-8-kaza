import React from "react";
import { useParams, Navigate } from "react-router-dom";
import logement from '../datas/listeLogements.json';
import Dropdownlogement from "./Dropdownlogement";
import Carroussel from "../components/Carroussel";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const renderRatingStars = (rating) => {
    const starIcons = [];
    const maxRating = 5; 
  
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className="star" />);
      } else {
        starIcons.push(<FontAwesomeIcon key={i} icon={faStar} className="star empty" />);
      }
    }
  
    return starIcons;
  };

const Logement = () => {
    const {id} = useParams();
    const detailsLogement = logement.find((item) => item.id === id);
    console.log('Id logement',id,detailsLogement);

    if (!detailsLogement) {
        return <Navigate to="./components/Error"/>
    }

    const { description, equipments } = detailsLogement;

    return (
        <div className="logement">
            <Carroussel data={detailsLogement}/>
            <div className="presentation">
                <div className="titreLocationandTags">
                    <h2 className="titrelogement">{detailsLogement.title}</h2>
                    <p className="location">{detailsLogement.location}</p>
                    <div className="tags">
                        {detailsLogement.tags.map((tag, index) => (
                        <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="hostAndRating">
                    <ul className="host">
                        <p className="name">{detailsLogement.host.name}</p>
                        <img className="hostpicture" src={detailsLogement.host.picture} alt={`${detailsLogement.host.picture} pictures`}/>
                        
                    </ul>
                    {renderRatingStars(detailsLogement.rating)}

                </div>
            </div>
            <div className="dropdownlogement">
            <Dropdownlogement description={description} equipments={equipments}/>
            </div>
        </div>
        
    )
}

export default Logement;