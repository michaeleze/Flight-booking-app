import React, { ChangeEvent } from 'react';
import { MdFlight } from 'react-icons/md';
import { ORIGIN, DESTINATION, CABIN_CODE } from '@/constants/index';
import dynamic from 'next/dynamic';

const DateOption = dynamic(() => import('./DateOption'));
const SelectOption = dynamic(() => import('./SelectOption'));

export type SearchParamsProps = {
  origin: string;
  destination: string;
  departureDate: string;
  returnDate: string;
  cabinCode: string;
};

type SearchBarProps = {
  headerText?: string;
  handleSearch: (
    origin: string,
    destination: string,
    departureDate: string,
    returnDate: string,
    cabinCode: string
  ) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ headerText, handleSearch }) => {
  const [selectedOrigin, setSelectedOrigin] = React.useState<string>('');
  const [selectedDestination, setSelectedDestination] =
    React.useState<string>('');
  const [departureDate, setDepartureDate] = React.useState<string>('');
  const [returnDate, setReturnDate] = React.useState<string>('');
  const [cabinCode, setCabinCode] = React.useState<string>('');

  const handleSelectOrigin = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedOrigin(event?.target?.value);
  };

  const handleSelectDestination = (event: ChangeEvent<HTMLSelectElement>) =>
    setSelectedDestination(event?.currentTarget?.value);

  const handleChangeDepartureDate = (event: ChangeEvent<HTMLInputElement>) =>
    setDepartureDate(event?.currentTarget?.value);

  const handleChangeReturnDate = (event: ChangeEvent<HTMLInputElement>) =>
    setReturnDate(event?.currentTarget?.value);

  const handleSelectCode = (event: ChangeEvent<HTMLSelectElement>) =>
    setCabinCode(event?.currentTarget?.value);

  const selectOptions = [
    {
      options: ORIGIN,
      label: 'Departure',
      selected: selectedOrigin,
      handleSelect: handleSelectOrigin,
    },
    {
      options: DESTINATION,
      label: 'Destination',
      selected: selectedDestination,
      handleSelect: handleSelectDestination,
    },
  ];

  const dateOptions = [
    {
      label: 'Departure date',
      value: departureDate,
      handleSelectDate: handleChangeDepartureDate,
    },
    {
      label: 'Return date',
      value: returnDate,
      handleSelectDate: handleChangeReturnDate,
    },
  ];

  return (
    <div className="container group relative z-0 mx-auto flex max-w-5xl flex-col space-x-4 rounded-xl bg-white p-6 shadow-md">
      <div className="flex gap-3 pb-10">
        <MdFlight size={28} />
        <h1 className="text-2xl">{headerText}</h1>
      </div>
      <div className="flex flex-col gap-12 py-5 md:flex-row">
        {selectOptions.map((option) => (
          <>
            <SelectOption {...option}></SelectOption>
          </>
        ))}
      </div>
      <div className="flex flex-col gap-12 py-5 md:flex-row">
        {dateOptions.map((option) => (
          <>
            <DateOption {...option}></DateOption>
          </>
        ))}
        <div className="group relative z-0 mb-6 md:w-1/4">
          <SelectOption
            label="Travel class"
            options={CABIN_CODE}
            selected={cabinCode}
            handleSelect={handleSelectCode}
          />
        </div>
      </div>
      <button
        onClick={() =>
          handleSearch(
            selectedOrigin,
            selectedDestination,
            departureDate,
            returnDate,
            cabinCode
          )
        }
        type="button"
        className=" my-8 self-center rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-1/4 md:self-end"
      >
        Search flights
      </button>
    </div>
  );
};

export default SearchBar;
