import { JSX } from 'react';

interface MatchProps<T> {
  when: T | undefined | null | false
  children: JSX.Element
};
export function Match<T>(props: MatchProps<T>): JSX.Element {
  if(props.when) {
    return <>{props.children}</>;
  }
  return <></>;
}

export default Match;
