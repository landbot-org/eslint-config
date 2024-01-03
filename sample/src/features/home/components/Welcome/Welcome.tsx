import { WelcomeProps } from './Welcome.types';

import { StyledWelcome } from './Welcome.styles';

function Welcome({ children, message = 'Welcome!' }: WelcomeProps) {
  return (
    <StyledWelcome>
      <h2>{message}</h2>
      <div>{children}</div>
    </StyledWelcome>
  );
}

export default Welcome;
