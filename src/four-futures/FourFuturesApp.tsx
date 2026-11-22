/*
  The Four Futures section (/four-futures/*), ported from the earlier standalone site
  (github.com/idilkale/emerging-futures). It keeps its own header, footer and styling
  until it is redesigned; the rest of the microsite's header/footer is not shown here.
*/
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ExplorerSection } from "./components/ExplorerSection";
import { FutureDetailPage } from "./components/FutureDetailPage";
import { HowToReadPage } from "./components/HowToReadPage";
import "./four-futures.css";

const editorialEase = [0.16, 1, 0.3, 1] as const;

function PageTransition({ title, children }: { title: string; children: React.ReactNode }) {
  const { hash } = useLocation();

  useEffect(() => {
    document.title = title;
    // Links like /four-futures#personas jump to that section; otherwise start at the top
    const target = hash ? document.getElementById(decodeURIComponent(hash.slice(1))) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [title, hash]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, ease: editorialEase }}
    >
      {children}
    </motion.div>
  );
}

export default function FourFuturesApp() {
  const location = useLocation();

  return (
    <div className="ff-root min-h-screen bg-paper">
      <Routes location={location} key={location.pathname}>
        <Route
          index
          element={
            <PageTransition title="The Four Futures | Emerging Futures Studio">
              <ExplorerSection />
            </PageTransition>
          }
        />
        <Route
          path="futures/:slug"
          element={
            <PageTransition title="The Four Futures | Emerging Futures Studio">
              <FutureDetailPage />
            </PageTransition>
          }
        />
        <Route
          path="how-to-read"
          element={
            <PageTransition title="How to read the futures | Emerging Futures Studio">
              <HowToReadPage />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition title="The Four Futures | Emerging Futures Studio">
              <ExplorerSection />
            </PageTransition>
          }
        />
      </Routes>
    </div>
  );
}
