import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/layout/Layout";
import Loader from "./components/Loader/Loader";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <div className={`appie-loader ${loading ? "active" : ""}`}>
          <Loader />
        </div>
      ) : (
        <div className={`appie-visible ${loading === false ? "active" : ""}`}>
          <Layout />
        </div>
      )}
      <SpeedInsights />
    </>
  );
}

export default App;
