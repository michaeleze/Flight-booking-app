import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { FlightListItemProps } from '@/components/FlightListItem';
import { useState } from 'react';

const SearchBar = dynamic(() => import('@/components/SearchBar'));
const FlightListItem = dynamic(() => import('@/components/FlightListItem'));

const Home: NextPage = () => {
  const [flightResult, setFlightResult] = useState([]);

  const handleSearch = async (
    selectedOrigin: string,
    selectedDestination: string,
    departureDate: string,
    returnDate: string,
    cabinCode: string
  ) => {
    try {
      const flightInfo = await fetch(
        `/api/flights?origin=${selectedOrigin}&destination=${selectedDestination}&departureDate=${departureDate}&returnDate=${returnDate}&cabinCode=${cabinCode}`,
        {
          method: 'GET',
        }
      );
      const flightInfoJson = await flightInfo.json();
      setFlightResult(flightInfoJson.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SearchBar handleSearch={handleSearch} headerText="Search Flights" />
      {flightResult &&
        flightResult?.map((item: FlightListItemProps) => (
          <div key={item.uuid}>
            <FlightListItem item={item} />
          </div>
        ))}
    </>
  );
};

export default Home;
