import { JSX } from 'react';

export function Switch(props: {
  fallback?: JSX.Element
  children: JSX.Element
}): JSX.Element {
  const children: JSX.Element[] = Array.isArray(props.children) ? props.children : [props.children];

  for (const child of children) {
    if (child.props.when) return <>{child}</>;
  }

  return <>{props.fallback}</>;
}

export default Switch;
