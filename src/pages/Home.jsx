import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';

const Home = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  console.log(countries);
  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};
export default Home;
