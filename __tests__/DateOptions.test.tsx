import { act, cleanup, fireEvent, render } from '@testing-library/react';
import DateOption from '@/components/DateOption';

const LABEL = 'Departure date';
const DEPATURE_DATE = '01.10.2020';
const handleChangeDepartureDate = jest.fn(() => ({
  event: {
    target: {
      value: DEPATURE_DATE,
    },
  },
}));

describe('DateOption', () => {
  let component;

  beforeEach(() => {
    act(() => {
      component = render(
        <DateOption
          label={LABEL}
          handleSelectDate={handleChangeDepartureDate}
          value={DEPATURE_DATE}
        />
      );
    });
  });

  afterEach(cleanup);

  it('should render component', () => {
    const { getByTestId } = component;
    const label = getByTestId(/date-input--label/i);

    expect(label).toBeInTheDocument();
  });

  it('should fire onChange', () => {
    const { getByTestId } = component;

    fireEvent.change(getByTestId('date-input'), {
      target: { value: DEPATURE_DATE },
    });

    expect(handleChangeDepartureDate).toHaveBeenCalledTimes(1);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
