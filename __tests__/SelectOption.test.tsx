import { act, cleanup, fireEvent, render } from '@testing-library/react';
import SelectOption from '@/components/SelectOption';
import { DESTINATION } from '../constants';

const handleSelect = jest.fn();

describe('DateOption', () => {
  let component;

  beforeEach(() => {
    act(() => {
      component = render(
        <SelectOption
          options={DESTINATION}
          handleSelect={handleSelect}
          label="Departure"
        />
      );
    });
  });

  afterEach(cleanup);

  it('should renders select component', async () => {
    const { getByTestId } = await component;
    const selectComponent = getByTestId('select-Departure');

    expect(selectComponent).toBeInTheDocument();
  });

  it('should renders options', async () => {
    const { getByTestId } = await component;
    const selectComponent = getByTestId('select-option-FCO');

    expect(selectComponent).toBeInTheDocument();
  });

  it('should renders options', async () => {
    const { getByTestId } = await component;
    const selectComponent = getByTestId('select-Departure');

    act(() => {
      fireEvent.change(selectComponent);
    });

    expect(selectComponent).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
