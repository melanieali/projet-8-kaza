import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({titre, contenu, customStyle}) => {
    const [isOpen, setisOpen] = useState(false);

    const showDropdown = () => {
        setisOpen(!isOpen);
    }

    return (
        <div className={`dropdownContener ${customStyle}`}>
            <div className="dropdownTitle">
                <h2>{titre}</h2>
                <div onClick={showDropdown}>
                    {isOpen ? (
                        <div className="up"><FontAwesomeIcon icon={faChevronUp} /></div>
                    ) : (
                        <div className="down"><FontAwesomeIcon icon={faChevronDown} /></div>
                    )}
                </div>
            </div>
            <div className="dropdownDescription">
                   {isOpen && <p>{contenu}</p>}             
            </div>
        </div>
    );
};

export default Dropdown;