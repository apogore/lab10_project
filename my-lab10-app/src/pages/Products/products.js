import React from 'react';
import './products.css';

function Products() {
  const products = [
    { name: "Мега-креативный шампунь 'Пушистые волосы'", type: "Косметика", price: "₽699.99" },
    { name: "Волшебные носки для сна 'Лунный свет'", type: "Товары для дома", price: "₽899.99" },
    { name: "Экстремальный адреналиновый тур 'Путь на край света'", type: "Туризм", price: "₽17999.99" },
    { name: "Футуристический робот-пылесос 'Чистая эпоха'", type: "Техника", price: "₽14999.99" },
    { name: "Невесомые надувные кресла 'Летающие облака'", type: "Мебель", price: "₽3499.99" },
    { name: "Маска для лица 'Загадочная тайна'", type: "Косметика", price: "₽399.99" },
    { name: "Удивительные семена 'Растущее чудо'", type: "Садоводство", price: "₽199.99" },
    { name: "Хрустящие космические чипсы 'Галактический вкус'", type: "Еда", price: "₽249.99" },
  ];

  return (
    <div className="products-container">
      <h2 className="section-title">Продукты и услуги</h2>
      <table className="products-table">
        <thead>
          <tr>
            <th>Название</th>
            <th>Тип</th>
            <th>Цена</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.type}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Products;
