import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';

import { Counter } from './Counter';

describe('Counter', () => {
  it('should render', async () => {
    render(<Counter />);

    expect(screen.getByText('Count is 0')).toBeInTheDocument();

    await userEvent.click(screen.getByRole('button'));

    expect(screen.getByText('Count is 1')).toBeInTheDocument();
  });
});
