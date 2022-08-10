import React,{useState} from 'react';
import Script from 'next/script';

import{ client } from '../lib/client';
import { Product, FooterBanner, HeroBanner} from '../components';

const Home = ({ products, bannerData}) => {
  const [showProducts, setShowProcuts] = useState(products)

  const showOgradi = () => {
    setShowProcuts(products?.filter(p=>p.type==="ogradi"));
  }
  const showAll = () => {
    setShowProcuts(products);
  }
  const showVrati = () => {
    setShowProcuts(products?.filter(p=>p.type==="vrati"));
  }
  const showPeleti = () => {
    setShowProcuts(products?.filter(p=>p.type==="peleti"));
  }
  const showTermopaneli = () => {
    setShowProcuts(products?.filter(p=>p.type==="termo"));
  }
  const showKonteineri = () => {
    setShowProcuts(products?.filter(p=>p.type==="konteineri"));
  }
  const showVoda = () => {
    setShowProcuts(products?.filter(p=>p.type==="voda"));
  }

  const showPopup = (e) => {
    e.preventDefault();
    return  <Script type="text/javascript" src="https://app.getresponse.com/view_webform_v2.js?u=toutm&webforms_id=zMHvs" data-webform-id="zMHvs"></Script>;
  }

  return (
      <div>
        <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>

        <div className='products-heading'>
          <h2>Нашите Продукти</h2>
          <p>Всичко за дома</p>
        </div>
        <div className='filter'>
          <span onClick={showAll}>Всички</span>
          <span onClick={showOgradi}>Огради</span>
          <span onClick={showVrati}>Врати</span>
          <span onClick={showPeleti}>Пелети</span>
          <span onClick={showTermopaneli}>Термопанели</span>
          <span onClick={showKonteineri}>Контейнери</span>
          <span onClick={showVoda}>Вода</span>
        </div>
        <div className='products-container'>
          {showProducts?.map((product) => <Product key={product._id} product={product} />)}
        </div>

        <Script type="text/javascript" src="https://app.getresponse.com/view_webform_v2.js?u=toutm&webforms_id=zMH1O" data-webform-id="zMH1O"></Script>

        <FooterBanner footerBanner={bannerData && bannerData[0]} />
      </div>
  )

};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home