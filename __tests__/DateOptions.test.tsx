import { act, cleanup, fireEvent, render, RenderResult, screen } from '@testing-library/react';
import DateOption from '@/components/DateOption';

const LABEL = "Departure date";
const DEPATURE_DATE = '01.10.2020';
const handleChangeDepartureDate = jest.fn();

describe('DateOption', () => {
  let component;

  beforeEach(() => {
    act(() => {
      component = render(
        <DateOption
          label={LABEL}
          handleSelectDate={handleChangeDepartureDate}
        />);
    });
  });

  afterEach(cleanup);

  it('should renders component', async () => {
    const { getByTestId } = await component;
    const label = getByTestId(/date-input--label/i);

    expect(label).toBeInTheDocument();
  });

  it('should fire onChange',async  () => {
    const { getByTestId } = await component;

    fireEvent.change(getByTestId('date-input'), { target: { value: DEPATURE_DATE } })

    expect(handleChangeDepartureDate).toHaveBeenCalledOnce();
  });

  it('should fire onChange', async () => {
    const { getByTestId } = await component;

    fireEvent.change(getByTestId('date-input'), { target: { value: DEPATURE_DATE } })

    expect(component).toHaveValue(DEPATURE_DATE);
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
