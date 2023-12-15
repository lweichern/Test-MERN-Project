import "./App.css";
import Blogs from "./components/Blogs.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />

      <section>
        <Blogs />
      </section>
    </>
  );
}

export default App;
