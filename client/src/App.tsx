import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UserApp from "./UserApp.tsx";
import AdminApp from "./AdminApp.tsx";

function App() {

  return (
      <div className="App">
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<UserApp />} />
                  <Route path="/admin" element={<AdminApp />} />
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
