import { StyledWelcome } from './Welcome.styles';
import { WelcomeProps } from './Welcome.types';

export function Welcome({ children, message = 'Welcome!' }: WelcomeProps) {
  return (
    <StyledWelcome>
      <h2>{message}</h2>
      <div>{children}</div>
    </StyledWelcome>
  );
}
