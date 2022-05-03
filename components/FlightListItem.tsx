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
  uuid: string;
};

export default function FlightListItem({
  item,
}: {
  item: FlightListItemProps;
}) {
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
    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700 flow-root my-8 mx-auto flex max-w-5xl flex-col space-x-4 rounded-xl bg-white p-6 shadow-md">
      <li className="py-3 sm:py-4">
        <div className="flex items-center space-x-4 container">
          <div className="flex flex-1 min-w-0 gap-6">
            <MdFlightTakeoff size={28} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {origin}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {departuredate}
              </p>
            </div>
          </div>
          <div className="flex flex-1 min-w-0 gap-6">
            <MdFlightLand size={28} className="h-8 w-8 rounded-full" />
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                {destination}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                {returndate}
              </p>
            </div>
          </div>
          <div className="flex flex-1 min-w-0 gap-6">
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white text-center">
                {seatavailability}
              </p>
              <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                Seat availability
              </p>
            </div>
          </div>
          <div className="flex flex-1 min-w-0 gap-6">
            <div className="flex flex-col gap-2">
              <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
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
