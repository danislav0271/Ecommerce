 import React, {useState} from 'react';
 import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar, AiFillFacebook, AiFillInstagram } from 'react-icons/ai';
 import olx from '../../public/olx.ico';
 import {client, urlFor} from '../../lib/client';
 import { Product } from '../../components';
 import { useStateContext } from '../../context/StateContext';
 
 const ProductDetails = ({ product, products}) => {
    const { image, name, details, price} = product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleBuyNow = () => {
        onAdd(product, qty);

        setShowCart(true);
    }

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img src={urlFor(image && image[index])} className='product-detail-image'/>
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img key={i} src={urlFor(item)} className={i === index ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setIndex(i)}/>
                        ))}
                    </div>
                </div>

                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                    </div>
                    <h4>Детайли:</h4>
                    <p>{details}</p>
                    <p className='price'>от {price} лв</p>
                    <div className='buttons'>
                        <a className='buy-now' href='tel:+359892698676'>Обади ни се за поръчка: 0892698676</a>
                        <a className='buy-now' href='tel:+359882710547'>Обади ни се за поръчка: 0882710547</a>
                        <div className='icons-container'>
                        <p>Или ни пиши на:</p>
                        <p className='icons'>
                            <a href='https://www.facebook.com/hepacobg/' target='_blank'><AiFillFacebook /></a>
                            <a href='https://www.instagram.com/hepacobg/' target='_blank'><AiFillInstagram /></a>
                            <a href='https://www.olx.bg/' target='_blank'><img src={olx.src} alt="olx" /></a>
                        </p>
                    </div>
                    </div>
                </div>
            </div>

            <div className='maylike-products-wrapper'>
                <h2>Може да харесате също</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map((item) => (
                            <Product key={item._id} product={item}/>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
 }

 export const getStaticPaths = async() => {
    const query = `*[_type == "product"] {
        slug {
            current
        }
    }`;

    const products = await client.fetch(query);
    const paths = products.map((product) => ({
        params: {
            slug: product.slug.current
        }
    }));

    return {
        paths,
        fallback : 'blocking'
    }
 }

 export const getStaticProps = async ({ params: { slug }}) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);
  
    return {
      props: { products, product }
    }
  }
 
 export default ProductDetails