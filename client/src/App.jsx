import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

const App = () => (
  <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<div className="min-h-screen">
            <div className="gradient-bg-welcome">
              <Navbar />
              <Welcome />
            </div> 
            <Services />
            <Transactions />
            <Footer />
          </div>} />
        </Routes>
      </Router>
    </div>

  // <div className="min-h-screen">
  //   <div className="gradient-bg-welcome">
  //     <Navbar />
  //     <Welcome />
  //   </div>
  //   <Services />
  //   <Transactions />
  //   <Footer />
  // </div>
);

export default App;
