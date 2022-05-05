import {
  act,
  cleanup,
  render,
  RenderResult,
  fireEvent,
} from '@testing-library/react';
import Home from '@/pages/index';

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
