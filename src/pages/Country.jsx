import { useParams } from 'react-router-dom';
import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import Section from '../components/Section/Section';
import { useEffect, useState } from 'react';
import { fetchCountry } from '../service/countryApi';
import CountryInfo from '../components/CountryInfo/CountryInfo';
import Loader from '../components/Loader/Loader';

const Country = () => {
  const { countryId } = useParams();
  const [isLoading, setisLoading] = useState(false);

  const [country, setCountry] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        setisLoading(true);
        const data = await fetchCountry(countryId);
        setCountry(data);
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
        {country && (
          <CountryInfo
            flag={country.flag}
            capital={country.capital}
            countryName={country.countryName}
            languages={country.languages.join(', ')}
            population={country.population}
          />
        )}
        {isLoading && <Loader />}

        <Heading title="Country" bottom />
      </Container>
    </Section>
  );
};

export default Country;
