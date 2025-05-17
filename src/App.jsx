import { Route, Routes } from 'react-router-dom';
import Heading from './components/Heading/Heading';
import Home from './pages/Home';
import Header from './components/Header/Header';
import SearchCountry from './pages/SearchCountry';
import Country from './pages/Country';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country" element={<SearchCountry />} />
        <Route path="/country/:countryId" element={<Country />} />
      </Routes>
    </>
  );
};
