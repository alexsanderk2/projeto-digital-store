import Layout from '../Layout/Layout';
import Gallery from '../../components/Gallery/Gallery';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import { products } from '../../data/products';
import './HomePage.css';

// home-slide-2 a home-slide-8
const slides = Array.from({ length: 7 }, (_, i) => ({ src: `/home-slide-${i + 2}.jpeg` }));

const collections = [
  { src: '/collection-1.png', alt: 'Coleção Supreme' },
  { src: '/collection-2.png', alt: 'Coleção Adidas' },
  { src: '/collection-3.png', alt: 'Coleção Beats' },
];

const HomePage = () => {
  return (
    <Layout>
      <Gallery className="home__gallery" images={slides} width="1440" height="681" />

      <div className="container">
        <Section title="Coleções em destaque" titleAlign="center">
          <div className="home__collections">
            {collections.map((collection) => (
              <img key={collection.src} src={collection.src} alt={collection.alt} />
            ))}
          </div>
        </Section>

        <Section title="Produtos em alta" titleAlign="left" link={{ text: 'Ver todos', href: '/products' }}>
          <ProductListing products={products.slice(0, 8)} />
        </Section>
      </div>
    </Layout>
  );
};

export default HomePage;
