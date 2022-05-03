import React, { ChangeEvent } from 'react';
import { MdFlight } from 'react-icons/md';
import { ORIGIN, DESTINATION, CABIN_CODE } from '@/constants/index';
import dynamic from 'next/dynamic';

const DateOption = dynamic(() => import('./DateOption'));
const SelectOption = dynamic(() => import('./SelectOption'));

type SearchBarProps = {
  headerText?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  headerText = 'Search Flights',
}) => {
  const [selectedOrigin, setSelectedOrigin] = React.useState<string>('');
  const [selectedDestination, setSelectedDestination] =
    React.useState<string>('');
  const [departureDate, setDepartureDate] = React.useState<string>('');
  const [returnDate, setReturnDate] = React.useState<string>('');
  const [selectedCode, setSelectedCode] = React.useState<string>('');

  const handleSelectOrigin = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedOrigin(event?.target?.value);

  const handleSelectDestination = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedDestination(event?.currentTarget?.value);

  const handleChangeDepartureDate = (event: ChangeEvent<HTMLInputElement>) =>
    setDepartureDate(event?.currentTarget?.value);

  const handleChangeReturnDate = (event: ChangeEvent<HTMLInputElement>) =>
    setReturnDate(event?.currentTarget?.value);

  const handleSelectCode = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedCode(event?.currentTarget?.value);

  return (
    <div className="container my-8 mx-auto flex max-w-5xl flex-col space-x-4 rounded-xl bg-white p-6 shadow-md">
      <div className="flex gap-3 pb-10">
        <MdFlight size={28} />
        <h1 className="text-2xl">{headerText}</h1>
      </div>
      <div className="flex flex-row gap-12 py-5">
        <div className="group relative z-0 mb-6 w-1/2">
          <SelectOption
            label="Departure"
            options={ORIGIN}
            selected={selectedOrigin}
            handleSelect={handleSelectOrigin}
          />
        </div>
        <div className="group relative z-0 mb-6 w-1/2">
          <SelectOption
            label="Destination"
            options={DESTINATION}
            selected={selectedDestination}
            handleSelect={handleSelectDestination}
          />
        </div>
      </div>
      <div className="flex flex-row gap-12 py-5">
        <DateOption
          label="Departure date"
          handleSelectDate={handleChangeDepartureDate}
          value={departureDate}
        />
        <DateOption
          label="Return date"
          handleSelectDate={handleChangeReturnDate}
          value={returnDate}
        />
        <div className="group relative z-0 mb-6 w-1/4">
          <SelectOption
            label="Travel class"
            options={CABIN_CODE}
            selected={selectedCode}
            handleSelect={handleSelectCode}
          />
        </div>
      </div>
      <button
        type="button"
        className="my-6 mr-2 w-1/4 self-end rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Search flights
      </button>
    </div>
  );
};

export default SearchBar;
