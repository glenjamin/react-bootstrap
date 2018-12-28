import * as React from 'react';
import { SelectCallback } from './helpers';

declare namespace NavItem {
  export interface NavItemProps extends React.HTMLProps<NavItem> {
    active?: boolean;
    brand?: any; // TODO: Add more specific type
    // size: string;
    variant?: string;
    componentClass?: React.ReactType;
    defaultNavExpanded?: boolean;
    eventKey?: any;
    fixedBottom?: boolean;
    fixedTop?: boolean;
    fluid?: boolean;
    inverse?: boolean;
    linkId?: string;
    navExpanded?: boolean;
    onSelect?: SelectCallback;
    onToggle?: Function;
    staticTop?: boolean;
    toggleButton?: any; // TODO: Add more specific type
    toggleNavKey?: string | number;
  }
}
declare class NavItem extends React.Component<NavItem.NavItemProps> {}
export = NavItem;