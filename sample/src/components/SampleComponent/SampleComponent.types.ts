import { PropsWithChildren } from 'react';

import { BaseComponentProps } from '../../base-component.types';

export type SampleComponentProps = PropsWithChildren &
  BaseComponentProps & {
    welcomeMessage: string;
  };
