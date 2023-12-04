
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Register } from "./registerpage";
import { Homepage1 } from "./navigation";
import {  Login1 } from "./login";
import { ListallproductDetails } from "./listproductdetails";
import { Reading1} from "./Readingpage"
import { Updating } from "./updatepage";

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
        <Route path="reading/:myid" exact element={<Reading1/>} />
        <Route path="updating/:myid" exact element={<Updating/>} />
        </Routes>
        </BrowserRouter>
      </>
      :
      <>
        <Login1/>
      </>
    }
  </>
  );
}

export default App;