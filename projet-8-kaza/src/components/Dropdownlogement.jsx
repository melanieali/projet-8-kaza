import React, {useState,useEffect}from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdownlogement = ({description, equipments}) => {
    const [isOpenDescription, setisOpenDescription] = useState(false);
    const [isOpenEquipments, setisOpenEquipments] = useState(false);

    const showDropdownDescription = () => {
        setisOpenDescription(!isOpenDescription);
  
        if (isOpenDescription) {
            setisOpenEquipments(false);
        }
    };

    const showDropdownEquipments =() => {
        setisOpenEquipments(!isOpenEquipments);
        if (isOpenEquipments) {
            setisOpenDescription(false);
        }
    };
    useEffect(() => {
        // 👇️ if you need to listen for changes of isLoading boolean
        console.log ('description',isOpenDescription);
        console.log ('equipement',isOpenEquipments);
      }, [isOpenDescription,isOpenEquipments]);
    return (
        <div className="dropdownContenerLogement">
            <div className="dropdownTitle1">
                <div className="titleandIcon">
                    <h2>Description</h2>
                    <div onClick={showDropdownDescription}>
                        {isOpenDescription ? (
                            <div className="up1"><FontAwesomeIcon icon={faChevronUp} /></div>
                        ) : (
                            <div className="down1"><FontAwesomeIcon icon={faChevronDown} /></div>
                        )}
                    </div>
                </div>
                <div className="dropdownDescription1">
                        {isOpenDescription && <p>{description}</p>}             
                </div>
            </div>
                    
            
            <div className="dropdownTitle2">
                <div className="titleandIcon">
                    <h2>Equipements</h2>
                    <div onClick={showDropdownEquipments}>
                        {isOpenEquipments ? (
                            <div className="up1"><FontAwesomeIcon icon={faChevronUp} /></div>
                        ) : (
                            <div className="down1"><FontAwesomeIcon icon={faChevronDown} /></div>
                        )}
                    </div>
                </div>
                <div className="dropdownEquipement">
                    {isOpenEquipments && <p>{equipments}</p>}             
                </div>
            </div>
        </div>
    );
};

export default Dropdownlogement;
