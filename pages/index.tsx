import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import { FlightListItemProps } from '@/components/FlightListItem';
import { useState } from 'react';

const SearchBar = dynamic(() => import('@/components/SearchBar'));
const FlightListItem = dynamic(() => import('@/components/FlightListItem'));

const Home: NextPage = () => {
  const [flightResult, setFlightResult] = useState([]);

  const handleSearch = async (
    selectedOrigin?: string,
    selectedDestination?: string,
    departureDate?: string,
    returnDate?: string,
    cabinCode?: string
  ) => {
    if (!selectedOrigin || !selectedDestination) {
      alert('Please select origin and destination');
      return;
    }

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
    <div data-testid="home" className="container m-6 mx-auto">
      <SearchBar handleSearch={handleSearch} headerText="Flight Booking" />
      {flightResult &&
        flightResult?.map((item: FlightListItemProps) => (
          <div key={item.uuid}>
            <FlightListItem item={item} />
          </div>
        ))}
    </div>
  );
};

export default Home;
