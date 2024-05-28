import React from 'react';
import './tags.css';

function Tags() {
  
  // Предположим, что это наши теги
  const tags = ["Природа", "Наука", "Юмор", "Технологии", "Политика", "Спорт", "Культура", "Мода", "Музыка", "Здоровье"];

  return (
      <div className="tags">
        <h4 className='title'>Теги:</h4>
        {tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
  );
}

export default Tags;
