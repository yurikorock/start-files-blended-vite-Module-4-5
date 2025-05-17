import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';
import { fetchByRegion } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const SearchCountry = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const region = searchParams.get('region');

    const getData = async () => {
      try {
        const data = await fetchByRegion(region);
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [searchParams]);
  const onSubmit = region => {
    setSearchParams({ region });
  };

  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <CountryList countries={countries} />
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default SearchCountry;
