const names = [
  'K-Swiss V8 - Masculino',
  'Tênis Nike Revolution 6',
  'Tênis Adidas Ultraboost',
  'Tênis Puma Smash V2',
  'Tênis Asics Gel-Nimbus',
  'Tênis Nike Air Max SC',
  'Tênis Adidas Grand Court',
  'Tênis Puma Cali Dream',
  'Tênis Asics Gel-Contend',
  'K-Swiss Court Express',
  'Tênis Nike Court Vision',
  'Tênis Adidas Run Falcon',
  'Tênis Puma Carina 2.0',
  'Tênis Asics Japan S',
  'K-Swiss Classic VN',
];

const brands = ['K-Swiss', 'Nike', 'Adidas', 'Puma', 'Asics'];
const categories = ['Esporte e lazer', 'Casual', 'Corrida', 'Utilitário'];
const genders = ['Masculino', 'Feminino', 'Unisex'];

export const products = names.map((name, index) => {
  const price = 120 + ((index * 37) % 280);
  const hasDiscount = index % 2 === 0;

  return {
    id: index + 1,
    name,
    image: `/product-thumb-${(index % 5) + 1}.jpeg`,
    price,
    priceDiscount: hasDiscount ? Math.round(price * 0.7 * 100) / 100 : undefined,
    brand: name.startsWith('K-Swiss') ? 'K-Swiss' : brands.find((b) => name.includes(b)),
    category: categories[index % categories.length],
    gender: genders[index % genders.length],
    state: index % 4 === 0 ? 'Usado' : 'Novo',
    reference: `REF:${38416 + index * 7}`,
    stars: (4 + (index % 10) / 10).toFixed(1),
    rating: 90 + index * 11,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  };
});

export const filterOptions = {
  brands: brands.map((text) => ({ text })),
  categories: categories.map((text) => ({ text })),
  genders: genders.map((text) => ({ text })),
  states: [{ text: 'Novo' }, { text: 'Usado' }],
};

export const finalPrice = (product) => product.priceDiscount ?? product.price;
