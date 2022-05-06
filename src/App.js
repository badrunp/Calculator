import { useEffect } from "react";
import Calculator from "./components/Calculator";

function App() {
  useEffect(() => {
    document.title = "Calculator";
  }),
    [];
  return <Calculator />;
}

export default App;
