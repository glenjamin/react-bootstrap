import * as React from 'react';

import InputGroupAddon = require('./InputGroupAddon');
import InputGroupButton = require('./InputGroupButton');

declare namespace InputGroup {
  export interface InputGroupProps extends React.HTMLProps<InputGroup> {
    bsPrefix?: string;
    // size: string;
  }
}
declare class InputGroup extends React.Component<InputGroup.InputGroupProps> {
  public static Addon: typeof InputGroupAddon;
  public static Button: typeof InputGroupButton;
}
export = InputGroup;