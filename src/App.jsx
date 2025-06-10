import { BrowserRouter, Routes, Route } from "react-router-dom"; //nav and routing letting me build multipage experience without refreshing the page
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "./components/ui/toaster";

function App() {

  return (
    <> 
    <Toaster />
    <BrowserRouter basename="/portfolio">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="*" element={<NotFound />} /> {/*what this means is that everything that hasnt been defined will default to NotFound*/}
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App
