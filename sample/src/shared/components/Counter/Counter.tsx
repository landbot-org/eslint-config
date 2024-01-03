import { useCounter } from '../../hooks/useCounter';

import { StyledButton, StyledCounter } from './Counter.styles';

function Counter() {
  const { count, increment } = useCounter(0);

  return (
    <StyledCounter>
      <StyledButton onClick={increment}>Count is {count}</StyledButton>
    </StyledCounter>
  );
}

export default Counter;
