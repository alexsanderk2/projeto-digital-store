import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Layout from '../Layout/Layout';
import Section from '../../components/Section/Section';
import ProductListing from '../../components/ProductListing/ProductListing';
import FilterGroup from '../../components/FilterGroup/FilterGroup';
import { products, filterOptions, finalPrice } from '../../data/products';
import './ProductListingPage.css';

const normalize = (text) =>
  text.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();

const initialFilters = { brand: [], category: [], gender: [], state: [] };

const ProductListingPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('filter') ?? '';
  const [order, setOrder] = useState('menor');
  const [filters, setFilters] = useState(initialFilters);

  const toggle = (key, inputType) => (value, checked) => {
    setFilters((prev) => {
      if (inputType === 'radio') return { ...prev, [key]: [value] };
      const list = checked ? [...prev[key], value] : prev[key].filter((v) => v !== value);
      return { ...prev, [key]: list };
    });
  };

  const result = useMemo(() => {
    const term = normalize(search);
    const filtered = products.filter((product) => {
      const haystack = normalize(`${product.name} ${product.brand} ${product.category}`);
      if (term && !haystack.includes(term)) return false;
      if (filters.brand.length && !filters.brand.includes(product.brand)) return false;
      if (filters.category.length && !filters.category.includes(product.category)) return false;
      if (filters.gender.length && !filters.gender.includes(product.gender)) return false;
      if (filters.state.length && !filters.state.includes(product.state)) return false;
      return true;
    });

    return filtered.sort((a, b) =>
      order === 'menor' ? finalPrice(a) - finalPrice(b) : finalPrice(b) - finalPrice(a)
    );
  }, [search, filters, order]);

  const title = `${search ? `Resultados para "${search}" - ` : ''}${result.length} produto${
    result.length === 1 ? '' : 's'
  }`;

  return (
    <Layout>
      <div className="container listing">
        <aside className="listing__aside">
          <label className="listing__order">
            <span>Ordenar por</span>
            <select value={order} onChange={(e) => setOrder(e.target.value)}>
              <option value="menor">Menor preço</option>
              <option value="maior">Maior preço</option>
            </select>
          </label>

          <div className="listing__filters">
            <h3 className="listing__filters-title">Filtrar por</h3>
            <hr />
            <FilterGroup
              title="Marca"
              inputType="checkbox"
              options={filterOptions.brands}
              selected={filters.brand}
              onChange={toggle('brand', 'checkbox')}
            />
            <FilterGroup
              title="Categoria"
              inputType="checkbox"
              options={filterOptions.categories}
              selected={filters.category}
              onChange={toggle('category', 'checkbox')}
            />
            <FilterGroup
              title="Gênero"
              inputType="checkbox"
              options={filterOptions.genders}
              selected={filters.gender}
              onChange={toggle('gender', 'checkbox')}
            />
            <FilterGroup
              title="Estado"
              inputType="radio"
              options={filterOptions.states}
              selected={filters.state}
              onChange={toggle('state', 'radio')}
            />
            <button type="button" className="listing__clear" onClick={() => setFilters(initialFilters)}>
              Limpar filtros
            </button>
          </div>
        </aside>

        <div className="listing__content">
          <Section title={title} titleAlign="left">
            {result.length ? (
              <ProductListing products={result} columns={3} />
            ) : (
              <p className="listing__empty">Nenhum produto encontrado.</p>
            )}
          </Section>
        </div>
      </div>
    </Layout>
  );
};

export default ProductListingPage;
