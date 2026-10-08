import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages";
import Books from "./pages/books";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Team from "./pages/team";
import Contact from "./pages/kontak";

function  App() {
  return (
    <>
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="books" element={<Books />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />

          <Route path="auth">
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;