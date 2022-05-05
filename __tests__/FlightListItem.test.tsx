import { act, cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react';
import FlightList from '@/components/FlightListItem';

const ITEM = {
    origin: 'LOS',
    departuredate: '10.10.2010',
    destination: 'FRA',
    returndate: '10.12.2010',
    seatavailability: '2',
    offertype: 'economy',
    price: {
      amount: '50',
      currency: 'EUR'
    }
};

describe('DateOption', () => {
  let component;

  beforeEach(() => {
    act(() => {
      component = render(
        <FlightList
          item={ITEM}
        />);
    });
  });

  afterEach(cleanup);

  it('should renders an item in component', async() => {
    const { getByText } = await component;
    const text = getByText(ITEM.departuredate);

    expect(text).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
