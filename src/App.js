
import Header from "./componants/header";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./componants/home";
function App() {
  return (
    
   <>
       <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
         </Routes>
       </BrowserRouter>
   </>
  );
}

export default App;
