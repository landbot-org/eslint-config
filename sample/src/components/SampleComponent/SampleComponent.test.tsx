import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import SampleComponent from './SampleComponent';

describe('SampleComponent', () => {
  const children = 'SampleComponent children';

  it('Should render success bg', () => {
    render(<SampleComponent welcomeMessage="Hello World!">{children}</SampleComponent>);

    expect(screen.getByText(children)).toBeInTheDocument();
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});
