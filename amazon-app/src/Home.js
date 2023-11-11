import React from "react";
import Header from "./Header";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <Header />
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="primeimage"
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="iQOO Neo 7 5G (Interstellar Black, 12GB RAM, 256GB Storage) | MediaTek Dimensity 8200, only 4nm Processor in The Segment | 50% Charge in 10 mins | Motion Control & 90 FPS Gaming"
          price={1099.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/41Hg9TA5PZL._SX300_SY300_QL70_FMwebp_.jpg"
        />
        <Product
          id="12321342"
          title="ILOFT Screen Scratch Guard Protector Film for OnePlus Band (Transparent)"
          price={5.99}
          rating={3}
          image="https://m.media-amazon.com/images/I/31uiQDbW22L._SX425_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321343"
          title="Firefox Bikes Bad Attitude 6-27.5T, 21 Speed MTB Mountain Cycle"
          price={20.34}
          rating={4}
          image="https://m.media-amazon.com/images/I/61lck+zplBS._SX425_.jpg"
        />
        <Product
          id="12321344"
          title="Nike Jordan MAX Aura Men's 3"
          price={180.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41s8BSCx5-L.jpg"
        />
        <Product
          id="12321345"
          title="The Power of your Subconscious Mind Paperback – 1"
          price={10.69}
          rating={5}
          image="https://m.media-amazon.com/images/I/51QTTApN-XL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321346"
          title="ES ESPINHO Maddison Solid Sal Wood Fabric Upholstered 3 Seater Right Hand Side Facing Modular, Sectional, Corner L Shape Sofa Set for Living Room, Teal Color"
          price={497.21}
          rating={4}
          image="https://m.media-amazon.com/images/I/51cf92qyyAS._SX300_SY300_QL70_FMwebp_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
