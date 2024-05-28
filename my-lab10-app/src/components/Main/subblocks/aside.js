import React from 'react';
import './aside.css';
import Tags from '../../Tags/tags';
import { Banner } from './section';
import banner3 from '../../../images/banner3.jpg';

function Aside() {
  return (
    <aside className="aside">
      <Tags />
      <div className="banners">
        <Banner imagePath={banner3} altText="Описание баннера 3" />
      </div>
    </aside>
  );
}

export default Aside;
