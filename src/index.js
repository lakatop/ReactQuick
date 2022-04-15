import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/ResponsiveBar";
import Home from "./pages/Home";
import Second from "./pages/Second";
import Increment from "./pages/IncrementPage";
import Decrement from "./pages/DecrementPage";
import { CounterProvider } from "./CounterContext";


export default function App() {
  return (
    <CounterProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="second" element={<Second />} />
          <Route path="increment" element={<Increment />} />
          <Route path="decrement" element={<Decrement />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </CounterProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));