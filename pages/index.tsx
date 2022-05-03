import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import * as mock from 'mock.json';
import { FlightListItemProps } from '@/components/FlightListItem';

const SearchBar = dynamic(() => import('@/components/SearchBar'));
const FlightListItem = dynamic(() => import('@/components/FlightListItem'));

const Home: NextPage = () => {
  const flightResult = mock?.meta?.data;

  return (
    <>
      <SearchBar />
      {flightResult &&
        flightResult.map((item: FlightListItemProps) => (
          <FlightListItem item={item} />
        ))}
    </>
  );
};

export default Home;
