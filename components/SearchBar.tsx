import React, { ChangeEvent } from 'react';
import { MdFlight } from 'react-icons/md';
import { ORIGIN, DESTINATION, CABIN_CODE } from '../constants';
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
    origin?: string,
    destination?: string,
    departureDate?: string,
    returnDate?: string,
    cabinCode?: string
  ) => void;
};

type StateProps = {
  origin?: string;
  destination?: string;
  departureDate?: string;
  returnDate?: string;
  cabinCode?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({ headerText, handleSearch }) => {
  const [state, setState] = React.useState<StateProps | undefined>();

  const handleSelect = (event: ChangeEvent<HTMLSelectElement>) => {
    const name = event?.target?.name;
    const value = event?.target?.value;

    setState({ ...state, [name]: value });
  };

  const selectOptions = [
    {
      options: ORIGIN,
      label: 'Departure',
      name: 'origin',
      selected: state?.origin,
      handleSelect,
    },
    {
      options: DESTINATION,
      label: 'Destination',
      name: 'destination',
      selected: state?.destination,
      handleSelect,
    },
  ];

  const dateOptions = [
    {
      label: 'Departure date',
      value: state?.departureDate,
      name: 'departureDate',
      handleSelect,
    },
    {
      label: 'Return date',
      name: 'returnDate',
      value: state?.returnDate,
      handleSelect,
    },
  ];

  return (
    <div className="container group relative z-0 mx-auto flex max-w-5xl flex-col space-x-4 rounded-xl bg-white p-6 shadow-md">
      <div className="flex gap-3 pb-10">
        <MdFlight size={28} />
        <h1 className="text-3xl font-bold">{headerText}</h1>
      </div>
      <div className="flex flex-col gap-12 py-5 md:flex-row">
        {selectOptions.map((option, index) => (
          <div key={index} className="container md:w-1/2">
            <SelectOption {...option}></SelectOption>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-12 py-5 md:flex-row">
        {dateOptions.map((option, index) => (
          <div
            key={index}
            className="group container relative z-0 mb-6 md:w-1/3"
          >
            <DateOption {...option}></DateOption>
          </div>
        ))}
        <div className="group relative z-0 mb-6 md:w-1/3">
          <SelectOption
            label="Travel class"
            name="cabinCode"
            options={CABIN_CODE}
            selected={state?.cabinCode}
            handleSelect={handleSelect}
          />
        </div>
      </div>
      <button
        onClick={() =>
          handleSearch(
            state?.origin,
            state?.destination,
            state?.departureDate,
            state?.returnDate,
            state?.cabinCode
          )
        }
        type="button"
        data-testid="search-button"
        className=" my-8 self-center rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:w-1/4 md:self-end"
      >
        Search flights
      </button>
    </div>
  );
};

export default React.memo(SearchBar);
