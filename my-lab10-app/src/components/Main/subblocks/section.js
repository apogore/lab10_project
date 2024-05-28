import React from 'react';
import Links from '../../Links/links';
import banner1 from '../../../images/banner1.jpg';
import banner2 from '../../../images/banner2.jpg';
import './section.css'; // Допустим, ваш основной CSS файл

// Компонент для отдельного баннера
export function Banner({ imagePath, altText }) {
  return (
    <div className="banner">
      <img src={imagePath} alt={altText} />
    </div>
  );
}

// Раздел "Баннеры"
function BannersSection() {
  return (
    <section className="section">
      <Links />
      <div className="banners">
        <Banner imagePath={banner1} altText="Описание баннера 1" />
        <Banner imagePath={banner2} altText="Описание баннера 2" />
      </div>
    </section>
  );
}

export default BannersSection;
