import { StyledSampleComponent } from './SampleComponent.styles';
import { SampleComponentProps } from './SampleComponent.types';

function SampleComponent({
  style,
  children,
  welcomeMessage = 'Welcome to SampleComponent component!',
  testId = 'ui-sample-component',
}: SampleComponentProps) {
  const d: any = 'd';

  console.log(d);

  return (
    <StyledSampleComponent style={style} data-testid={testId}>
      <h1>{welcomeMessage}</h1>
      <div>{children}</div>
    </StyledSampleComponent>
  );
}

export default SampleComponent;
