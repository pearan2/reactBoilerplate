import { ReactNode, Suspense } from "react";
import ErrorBoundary from "./errorBoundary";

interface WithAsyncPropsType<T> {
  child: React.FC<T>;
  suspenseFallback?: ReactNode;
  errorFallback?: ReactNode;
}

const withAsync = <P,>(props: WithAsyncPropsType<P> & P) => {
  const Compo = (innerProps: P) => {
    return (
      <ErrorBoundary fallback={props.errorFallback}>
        <Suspense fallback={props.suspenseFallback}>
          <props.child {...props}></props.child>;
        </Suspense>
      </ErrorBoundary>
    );
  };

  return Compo;
};

export default withAsync;
