
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./registerpage";
import { Homepage, Homepage1 } from "./navigation";
import { Login } from "./login";

function App() {
  return (
    <>
    {
      (sessionStorage.getItem("auth"))?
      <>
        <BrowserRouter>
        <Homepage1/>
        <Routes>
        <Route path="createproduct" exact element={<Register/>}/>
        <Route path="listallproductdetails" exact element={<ListallproductDetails/>}/>
        </Routes>
        </BrowserRouter>
      </>
      :
      <>
        <Login/>
      </>
    }
  </>
  );
}

export default App;