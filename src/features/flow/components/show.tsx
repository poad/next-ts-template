export function Show<T>(props: {
  when: T | undefined | null | false
  fallback?: JSX.Element
  children: JSX.Element | ((item: T) => JSX.Element)
}): JSX.Element {
  if (props.when) {
    return (
      <>
        {props.children}
      </>
    );
  }
  return <>{props.fallback}</>;
}

export default Show;
