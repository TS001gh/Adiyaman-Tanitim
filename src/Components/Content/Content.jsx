import './Content.css';
import React, { useState, useEffect, useRef } from 'react';

import slidimage1 from '../../Assets/images/t.jpg';
import slidimage2 from '../../Assets/images/tt.jpg';
import slidimage3 from '../../Assets/images/tttt.jpg';
const Content = () => {
  const indicator = useRef();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slidimage1, slidimage2, slidimage3];
  const delay1 = 5000; // 10 saniye

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, delay1);

    return () => clearInterval(interval);
  }, []);

  const [text, setText] = useState('');
  const sentence = 'AADIYAMAN ŞEHRINE HOŞ GELDINIZ';
  const delay = 100;

  useEffect(() => {
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex === sentence.length - 1) {
        clearInterval(interval);
        indicator.current.style.display = 'none';
        setTimeout(() => {
          let deleteIndex = sentence.length;
          const deleteInterval = setInterval(() => {
            if (deleteIndex === 1) {
              clearInterval(deleteInterval);
            }
          }, delay);
        }, 1000); // Bekleme süresi (1 saniye) - burayı istediğiniz gibi ayarlayabilirsiniz
      } else {
        setText((prevText) => prevText + sentence[currentIndex]);
        currentIndex++;
      }
    }, delay);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="content">
        <div className="content-center">
          <h2 className="content-title">
            {text}
            <span className="typing-indicator" ref={indicator}>
              _
            </span>
          </h2>
          <p className="desc">
            Adıyaman'daki tarihi ve arkeolojik alanları tanıtmak için
            oluşturulmuş bir platformdur. Bu web sitesi, bölgedeki tarihi
            zenginlikleri ve kültürel mirası ziyaretçilere tanıtmayı amaçlar.
          </p>
          <button className="content-btn">Şimdi Keşfet</button>
        </div>
        <div
          className={`content-img ${
            currentImageIndex === images.length ? 'active' : ''
          }`}
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
      </div>
    </>
  );
};

export default Content;
