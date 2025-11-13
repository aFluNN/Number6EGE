// Fix: The 'JSX' namespace is not available in plain TypeScript files.
// We import `ReactElement` from 'react' to explicitly provide the correct type for the `icon` property.
import type { ReactElement } from 'react';

export interface Method {
  id: string;
  title: string;
  description: string;
  pros: string[];
  cons:string[];
  scope: string;
  icon: ReactElement;
}
