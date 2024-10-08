import { Counter } from '../../components/counter';
import { Welcome } from '../../containers/welcome';
import { StyledHomePage } from './HomePage.styles';

export function HomePage() {
  return (
    <StyledHomePage>
      <Welcome message="Welcome to the Landbot ESLint and Prettier config for React!">
        Click the button below to increment the counter:
      </Welcome>
      <Counter />
    </StyledHomePage>
  );
}
