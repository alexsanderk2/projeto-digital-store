import { useState } from 'react';
import './ProductOptions.css';

const ProductOptions = ({ options = [], radius = '4px', shape = 'square', type = 'text', onSelect }) => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    onSelect?.(option);
  };

  return (
    <div className="product-options">
      {options.map((option) => {
        const style = {};
        if (shape === 'square') style.borderRadius = radius;
        if (type === 'color') style.backgroundColor = option;

        return (
          <button
            type="button"
            key={option}
            className={[
              'product-options__item',
              `product-options__item--${shape}`,
              `product-options__item--${type}`,
              selected === option ? 'product-options__item--selected' : '',
            ].join(' ')}
            style={style}
            onClick={() => handleSelect(option)}
            aria-pressed={selected === option}
            aria-label={type === 'color' ? `Cor ${option}` : `Opção ${option}`}
          >
            {type === 'text' ? option : null}
          </button>
        );
      })}
    </div>
  );
};

export default ProductOptions;
