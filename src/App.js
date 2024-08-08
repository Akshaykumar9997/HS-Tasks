import Navbar from "./Compponents/Navbar";
import Addtask from "./Pages/Addtask";
import Layout from "./Pages/Layout";
import Tasklist from "./Pages/Tasklist";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
       <Tasklist/>
      {/* <BrowserRouter>
      <Routes>
<Route path="/" element={<Layout/>}> 
<Route index element={<Tasklist/>}/>
</Route>

      </Routes>
      </BrowserRouter>
      <Tasklist /> */}
    </div>
  );
}

export default App;
