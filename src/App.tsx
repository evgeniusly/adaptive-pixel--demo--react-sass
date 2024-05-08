import { useEffect, useState } from "react";
import { getApxInterface, getIsMobileInterface } from "adaptive-pixel";
import Main from "./components/Main/Main";
import "./main.sass";

function App() {
  const [apx, setApx] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const apxInterface = getApxInterface({
      setter: setApx,
    });
    const isMobileInterface = getIsMobileInterface({
      setter: setIsMobile,
    });

    apxInterface.calculate();
    isMobileInterface.calculate();

    apxInterface.startListeners();
    isMobileInterface.startListeners();

    return () => {
      apxInterface.cleanListeners();
      isMobileInterface.cleanListeners();
    };
  }, []);

  useEffect(() => console.log("apx", apx), [apx]);
  useEffect(() => console.log("isMobile", isMobile), [isMobile]);

  return <Main isMobile={isMobile} apx={apx} />;
}

export default App;
