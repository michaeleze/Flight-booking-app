import React from 'react';

type SearchBarProps = {
  headerText?: string;
};

const SearchBar: React.FC<SearchBarProps> = ({
  headerText = 'Search Flights',
}) => {
  return (
    <div className="my-8 mx-auto flex max-w-5xl flex-col space-x-4 rounded-xl bg-white p-6 shadow-md">
      <h1 className="pb-16 text-3xl">{headerText}</h1>
      <div>
        <input
          className="bg-gray-20 my-6 max-w-2xl rounded border border-gray-100 border-gray-100 p-2 text-gray-900"
          type="text"
          placeholder="FROM"
        />
        <input
          className="bg-gray-20 my-6 max-w-2xl rounded border border-gray-100 border-gray-100 p-2 text-gray-900"
          type="text"
          placeholder="TO"
        />
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="date"
            className="bg-gray-20 block w-2/5 rounded-lg border border-gray-100 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="Select date"
          />
        </div>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="date"
            className="bg-gray-20 block w-2/5 rounded-lg border border-gray-100 p-2.5 pl-10 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
            placeholder="Select date"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
