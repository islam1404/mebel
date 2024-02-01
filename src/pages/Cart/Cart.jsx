import React from "react";
import img from './image 2.png'
const Cart = () => {
  return (
    <div className="cart">
      <div className="container">
        <div className="cart__nav">
          <h3 className="cart__nav-title">Ваша корзина</h3>
          <h3 className="cart__nav-count">1 предмета</h3>
        </div>
        <div className="cart__container">
          <div className="cart__product">
            <img src={img} alt="" />
            <div>
              <div className="cart__product-nav">
                  <h3 className="cart__product-title">Кускен Navy Blue</h3>
                  <h3 className="cart__product-price">16 990₽</h3>
              </div>
              <div className="cart__product-feature">
                <p className="cart__product-text">Цвет: <span>Темно-синий</span></p>
                <p className="cart__product-text">Количество: <span>1</span></p>
                <p className="cart__product-text">Размер(Ш×Д×В): <span>218 СМ × 95 СМ × 90 СМ</span></p>
              </div>
            </div>
            <button className="cart__delete">&times;</button>
          </div>
        </div>
        <div className="cart__total">
          <p className="cart__total-price">Итоговая стоимость: <h3>69 960₽</h3></p>
          <button className="cart__total-btn">Оформить заказ</button>
        </div>

      </div>
    </div>
  );
};


export default Cart;
