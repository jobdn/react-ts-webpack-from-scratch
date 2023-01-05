import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('should render app component', () => {
    render(<App />);

    expect(screen.getByText(/app/i)).toBeInTheDocument();
  });
});
