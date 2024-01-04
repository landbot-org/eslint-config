import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import { Welcome } from './Welcome';

describe('Welcome', () => {
  const children = 'Welcome children';

  it('Should render success bg', () => {
    render(<Welcome message="Hello World!">{children}</Welcome>);

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
