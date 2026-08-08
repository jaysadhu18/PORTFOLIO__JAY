import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { AnimatePresence } from "framer-motion";
import { Loading } from "../components/Loading";
import { setProgress } from "../components/utils/setProgress";

type LoadingContextValue = {
  isLoading: boolean;
  setIsLoading: (state: boolean) => void;
  loading: number;
  setLoading: (percent: number) => void;
};

const LoadingContext = createContext<LoadingContextValue | null>(null);

export function LoadingProvider({ children }: PropsWithChildren) {
  const [isLoading, setIsLoading] = useState(true);
  const [loading, setLoading] = useState(0);

  // Phase 1: fake ramp until assets exist; Phase 4 Character will call progress.loaded()
  useEffect(() => {
    const progress = setProgress(setLoading);
    const done = window.setTimeout(() => {
      void progress.loaded();
    }, 1600);
    return () => {
      window.clearTimeout(done);
      progress.clear();
    };
  }, []);

  const value = useMemo(
    () => ({ isLoading, setIsLoading, loading, setLoading }),
    [isLoading, loading],
  );

  return (
    <LoadingContext.Provider value={value}>
      <AnimatePresence>{isLoading && <Loading key="loading" percent={loading} />}</AnimatePresence>
      <main className={`main-body${isLoading ? "" : " main-active"}`}>{children}</main>
    </LoadingContext.Provider>
  );
}

export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
}
