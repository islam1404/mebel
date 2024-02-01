import React from 'react';

const Room = () => {
    return (
        <section className="room">
        <div className="container">
          <div className="room__bonus">
            <div className="room__bonus-head">
              <h3 className="room__bonus-title">Бонусная программа</h3>
              <div>
                <p className="room__bonus-count">
                  У вас <span>0</span> бонусных баллов
                </p>
                <a href="#" className="room__bonus-rules">
                  Правила бонусной программы
                </a>
              </div>
            </div>
            <div className="room__bonus-return"></div>
          </div>
        </div>
      </section>
    );
}

export default Room;
