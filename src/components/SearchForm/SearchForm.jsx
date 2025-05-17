import { FiSearch } from 'react-icons/fi';
import styles from './SearchForm.module.css';
import { useState } from 'react';
const regions = [
  { id: 'africa', value: 'africa', name: 'Africa' },
  { id: 'america', value: 'america', name: 'America' },
  { id: 'asia', value: 'asia', name: 'Asia' },
  { id: 'europe', value: 'europe', name: 'Europe' },
  { id: 'oceania', value: 'oceania', name: 'Oceania' },
];
//задача форми отримати від користувача дані та предати вище на SearchCountry
const SearchForm = ({ onSubmit }) => {
  const [region, setRegion] = useState('');

  //записуємо в локальний стейт форми region
  const handleChange = event => {
    setRegion(event.target.value);
  };

  // а при сабміті передаємо цей region пропсом { onSubmit } на SearchCountry
  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(region);
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <button className={styles.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <select
        aria-label="select"
        className={styles.select}
        name="region"
        required
        defaultValue="default"
        onChange={handleChange}
      >
        <option disabled value="default">
          Select a region
        </option>
        {regions.map(region => (
          <option key={region.id} value={region.value}>
            {region.name}
          </option>
        ))}
      </select>
    </form>
  );
};

export default SearchForm;
