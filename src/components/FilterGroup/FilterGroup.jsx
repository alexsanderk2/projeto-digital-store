import { useId } from 'react';
import './FilterGroup.css';

const FilterGroup = ({ title, inputType = 'checkbox', options = [], selected = [], onChange }) => {
  const groupId = useId();

  return (
    <fieldset className="filter-group">
      <legend className="filter-group__title">{title}</legend>
      {options.map((option, index) => {
        const value = option.value ?? option.text;
        const id = `${groupId}-${index}`;
        return (
          <label key={id} htmlFor={id} className="filter-group__option">
            <input
              id={id}
              type={inputType}
              name={inputType === 'radio' ? groupId : undefined}
              value={value}
              checked={onChange ? selected.includes(value) : undefined}
              onChange={(e) => onChange?.(value, e.target.checked)}
            />
            <span>{option.text}</span>
          </label>
        );
      })}
    </fieldset>
  );
};

export default FilterGroup;
