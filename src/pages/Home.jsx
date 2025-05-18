import { useEffect, useState } from 'react';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { getCountries } from '../service/countryApi';
import CountryList from '../components/CountryList/CountryList';
import Loader from '../components/Loader/Loader';

const Home = () => {
  const [countries, setCountries] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      try {
        setisLoading(true);
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.log(error);
      } finally {
        setisLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Section>
      <Container>
        <CountryList countries={countries} />
        {isLoading && <Loader />}
        <Heading title="Home" bottom />
      </Container>
    </Section>
  );
};
export default Home;
