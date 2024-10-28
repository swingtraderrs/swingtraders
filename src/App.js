
import { BrowserRouter,Route,Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Home from "./componants/home";
import About from "./componants/about";
import Contact from "./componants/contact";
import Error from "./componants/errorpage";

function App() {
  return (
    
   <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="*" element={<Error />} />

         </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
