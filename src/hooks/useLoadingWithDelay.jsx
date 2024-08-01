import { useEffect, useState, Suspense } from "react";
import Loading from "../components/Loading/Loading";

 const useLoadingWithDelay = (delay) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return loading;
};

export const SuspenseWithDelay = ({ children, delay }) => {
  const loading = useLoadingWithDelay(delay);

  return (
    <Suspense fallback={<Loading />}>
      {loading ? <Loading /> : children}
    </Suspense>
  );
};
