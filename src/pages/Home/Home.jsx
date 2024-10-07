// ** React related imports **
import { useEffect } from "react"; // Hook used to set document title on component mount

const Home = () => {
  useEffect(() => {
    // Set the document title when the component mounts
    document.title = "Home | Doctors Portal";
  }, []);
  return (
    <main id="home">
      <div className="container">
        <h1>Home</h1>
      </div>
    </main>
  );
};

export default Home;
