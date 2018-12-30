import * as React from 'react';
import { TransitionCallbacks } from './helpers';

declare interface CollapseProps
  extends TransitionCallbacks,
    React.ClassAttributes<Collapse> {
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number;
  dimension?: 'height' | 'width' | { (): string };
  getDimensionValue?: (
    dimension: number,
    element: React.ReactElement<any>,
  ) => number;
  role?: string;
}
declare class Collapse extends React.Component<CollapseProps> {}

export default Collapse;
