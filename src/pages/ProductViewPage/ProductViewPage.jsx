import { useParams, Link } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import BuyBox from '../../components/BuyBox/BuyBox';
import ProductOptions from '../../components/ProductOptions/ProductOptions';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import { products } from '../../data/products';
import './ProductViewPage.css';

const productImages = Array.from({ length: 5 }, (_, i) => ({ src: `/product-image-${i + 1}.jpeg` }));

const ProductViewPage = () => {
  const { id } = useParams();
  const product = products.find((p) => String(p.id) === id) ?? products[0];
  const recommended = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <Layout>
      <div className="container">
        <p className="product-view__breadcrumb">
          <Link to="/">Home</Link> / <Link to="/products">Produtos</Link> / {product.brand} /{' '}
          <strong>{product.name}</strong>
        </p>

        <div className="product-view">
          <Gallery
            key={product.id}
            className="product-view__gallery"
            images={productImages}
            showThumbs
            width="700"
            height="570"
            radius="4px"
          />

          <BuyBox
            name={product.name}
            reference={`Casual | ${product.brand} | ${product.reference}`}
            stars={product.stars}
            rating={product.rating}
            price={product.price}
            priceDiscount={product.priceDiscount}
            description={product.description}
          >
            <div>
              <h4 className="product-view__option-title">Tamanho</h4>
              <ProductOptions options={['39', '40', '41', '42', '43']} radius="4px" shape="square" type="text" />
            </div>
            <div>
              <h4 className="product-view__option-title">Cor</h4>
              <ProductOptions options={['#6FEEFF', '#FF6969', '#5E5E5E', '#6D70B7']} shape="circle" type="color" />
            </div>
          </BuyBox>
        </div>

        <Section title="Produtos recomendados" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={recommended} />
        </Section>
      </div>
    </Layout>
  );
};

export default ProductViewPage;
