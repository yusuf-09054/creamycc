
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./registerpage";
import { Homepage } from "./navigation";
import { Login } from "./login";

function App() {
  return (
    <>
     <BrowserRouter>
     <Homepage/>
     <Login/>
    <Routes>
      <Route path="createproduct" exact element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;