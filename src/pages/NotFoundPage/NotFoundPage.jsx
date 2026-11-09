import { Link } from 'react-router-dom';
import Layout from '../Layout/Layout';

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="container" style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 32, color: 'var(--dark-gray)', marginBottom: 16 }}>Página em construção</h1>
        <p style={{ marginBottom: 24 }}>O conteúdo que você procura ainda não está disponível.</p>
        <Link to="/" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
          Voltar para a Home
        </Link>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
