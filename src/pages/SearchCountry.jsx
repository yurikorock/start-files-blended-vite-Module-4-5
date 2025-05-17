import Container from '../components/Container/Container';
import Heading from '../components/Heading/Heading';
import SearchForm from '../components/SearchForm/SearchForm';
import Section from '../components/Section/Section';

const SearchCountry = () => {
  const onSubmit = region => {
    console.log(region);
  };
  return (
    <Section>
      <Container>
        <SearchForm onSubmit={onSubmit} />
        <Heading title="SearchCountry" bottom />
      </Container>
    </Section>
  );
};

export default SearchCountry;
