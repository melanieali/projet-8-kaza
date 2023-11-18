import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp,faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Dropdown = ({titre, contenu, customStyle}) => {
    const [isOpen, setisOpen] = useState(false);

    const showDropdown = () => {
        setisOpen(!isOpen);
    }
    console.log(contenu);
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
            {isOpen && (
                <div>
                    {Array.isArray(contenu) ? (
                        <ul>
                            {contenu.map((item, index) => (
                            <li key={index}>{item}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{contenu}</p>
                    )}
                </div>
            )}             
            </div>
        </div>
    );
};

export default Dropdown;