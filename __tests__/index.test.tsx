import { act, cleanup, render, RenderResult } from '@testing-library/react';
import Home from '@/pages/index';

describe('Home', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>;

  beforeEach(() => {
    act( () => {
      component =  render(
        <Home />);
    });
  });

  afterEach(cleanup);

  it('should match snapshot', async() => {
    const HomeComponent = await component
    expect(HomeComponen).toMatchSnapshot();
  });
});
