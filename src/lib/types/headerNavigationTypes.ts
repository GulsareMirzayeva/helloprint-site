import { MouseEventHandler } from 'react';

export type NavigationType = {
  path: string;
  value: string;
};

export type SubNavigationType = {
  path: string;
  value: string;
  callBack: MouseEventHandler<HTMLAnchorElement>;
};
export type ExpandableLinkType = {
  children: React.ReactNode;
};
