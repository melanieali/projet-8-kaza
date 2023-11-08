import React from 'react';
import Dropdown from './Dropdown';
import aProposJson from '../datas/apropos.json';
import Banner from './Banner';
import ImageApropos from '../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2.png';

const Apropos = () => {
  return (
    <div className='apropos'>
      <Banner image={ImageApropos} titre="" />

      <div className='dropDown'>
        {aProposJson.map((item) => {
          return (
            <div key={item.id}>
              <Dropdown titre={item.titre} contenu={item.contenu} />
            </div>
          );
        })}
      </div>
    </div>
  )
}

export default Apropos;
