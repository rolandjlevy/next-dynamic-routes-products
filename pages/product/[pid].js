import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Nav from '../../components/nav';
import styles from '../../styles/Home.module.css';

const Product = () => {
  const router = useRouter();
  const { pid } = router.query;
  const [content, setContent] = useState(null);

  const getProduct = async () => {
    const product = await axios.get(`https://fakestoreapi.com/products/${pid}`);
    setContent(product?.data);
  }

  useEffect(() => {
    (async () => {
      await getProduct();
    })();
  }, [pid]);
  
  return (
    <main className={styles.bodycontainer}>
      <Nav />
      <p>Product ID: {pid}</p>
      {content && (
        <section className={styles.productcard}>
          <h2>{content.title}</h2>
          <h3>Category: {content.category}</h3>
          <p>{content.description}</p>
          <img src={content.image} />
          <h3>&pound;{content.price}</h3>
        </section>
      )}
    </main>
  )
}

export default Product;