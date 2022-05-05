import {
  act,
  cleanup,
  render,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import Home from '@/pages/index';
import SearchBar from '../components/SearchBar';

const handleSearch = jest.fn(
  (
    origin = 'FRA',
    destination = 'FCO',
    departureDate = '2020-10-01',
    returnDate = '2020-10-02',
    cabinCode = 'economy'
  ) => null
);

describe('Home', () => {
  let component: RenderResult<
    typeof import('@testing-library/dom/types/queries'),
    HTMLElement
  >;

  beforeEach(() => {
    act(() => {
      component = render(<Home />);
    });
  });

  afterEach(cleanup);

  it('should match snapshot', async () => {
    const HomeComponent = await component;
    expect(HomeComponent).toMatchSnapshot();
  });

  it('should match snapshot', () => {
    // const { getByTestId } = render(<SearchBar handleSearch={handleSearch} />);
    const { getByText, getByTestId } = component;

    fireEvent.change(getByTestId('select-Departure'), {
      target: { value: 'FRA' },
    });
    fireEvent.change(getByTestId('select-Destination'), {
      target: { value: 'MEX' },
    });
    fireEvent.click(getByTestId('search-button'));

    expect(getByText('FRA')).toBeInTheDocument();
  });
});
