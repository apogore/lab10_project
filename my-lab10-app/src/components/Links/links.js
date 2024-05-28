import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './links.css';

const Links = () => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    news: false,
    about: false,
    contact: false,
    products: false
  });

  const handleToggleDropdown = (menu) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu]
    }));
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.li}>
          <span
            style={styles.navItem}
            onClick={() => handleToggleDropdown('news')}
          >
            Новости
          </span>
          {isDropdownOpen.news && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/news')}>Новости 1</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/news')}>Новости 2</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/news')}>Новости 3</a></li>
            </ul>
          )}
        </li>
        <li style={styles.li}>
          <span
            style={styles.navItem}
            onClick={() => handleToggleDropdown('products')}
          >
            Продукты и услуги
          </span>
          {isDropdownOpen.products && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/products')}>Продукты и услуги 1</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/products')}>Продукты и услуги 2</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/products')}>Продукты и услуги 3</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/products')}>Продукты и услуги 4</a></li>
            </ul>
          )}
        </li>
        <li style={styles.li}>
          <span
            style={styles.navItem}
            onClick={() => handleToggleDropdown('contact')}
          >
            Обратная связь
          </span>
          {isDropdownOpen.contact && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/contact')}>Обратная связь 1</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/contact')}>Обратная связь 2</a></li>
            </ul>
          )}
        </li>
        <li style={styles.li}>
          <span
            style={styles.navItem}
            onClick={() => handleToggleDropdown('about')}
          >
            Об авторе
          </span>
          {isDropdownOpen.about && (
            <ul style={styles.dropdown}>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/about')}>Об авторе 1</a></li>
              <li style={styles.dropdownItem}><a href="#" onClick={() => handleNavigate('/about')}>Об авторе 2</a></li>
            </ul>
          )}
        </li>
        
        
      </ul>
    </nav>
  );
};

export default Links;
