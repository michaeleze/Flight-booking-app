import React from 'react';
import { MdFlightTakeoff, MdFlightLand } from 'react-icons/md';

export type FlightListItemProps = {
  origin?: string;
  departuredate?: string;
  destination?: string;
  returndate?: string;
  offertype?: string;
  seatavailability?: string;
  price?: {
    amount?: string;
    currency?: string;
  };
  uuid?: string;
};

function FlightListItem({ item }: { item: FlightListItemProps }) {
  const {
    origin,
    departuredate,
    destination,
    returndate,
    seatavailability,
    offertype,
    price,
  } = item;
  return (
    <ul
      role="list"
      className="my-8 mx-auto flex flow-root max-w-5xl space-x-4 divide-y divide-gray-200 rounded-xl bg-white p-6 shadow-md dark:divide-gray-700 sm:flex-row md:flex-col"
    >
      <li className="container py-3 sm:py-4">
        <div className="container flex flex-col items-center gap-y-6 space-x-4 md:flex-row md:gap-y-0">
          <div className="flex min-w-0 flex-1 flex-col text-center md:flex-row md:gap-6 md:text-left">
            <MdFlightTakeoff
              size={28}
              className="m-auto h-8 w-8 rounded-full "
            />
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {origin}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {departuredate}
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 flex-col text-center md:flex-row md:gap-6 md:text-left">
            <MdFlightLand size={28} className=" m-auto h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {destination}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {returndate}
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 justify-center gap-6 text-center md:text-left">
            <div className="item-center flex flex-col gap-2">
              <p className="truncate text-center text-sm font-medium text-gray-900 dark:text-white">
                {seatavailability}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                Seat availability
              </p>
            </div>
          </div>
          <div className="flex min-w-0 flex-1 justify-center gap-6">
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-blue-800 dark:text-white">
                {offertype}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                Offer type
              </p>
            </div>
          </div>
          <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
            {price?.amount}
            {price?.currency}
          </div>
        </div>
      </li>
    </ul>
  );
}

export default React.memo(FlightListItem);
