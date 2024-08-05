import Banner from "./components/Banner";
import Banner2 from "./components/Banner2";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar";
import OurVision from "./components/OurVision";
import OverViewCounter from "./components/OverViewCounter";
import Videobanner from "./components/Videobanner";

const App = () => {
  return (
    <>
      <main className="overflow-x-hidden dark:bg-gray-900 bg-white">
        <Navbar />
        <Hero />
        <OverViewCounter />
        <OurVision />
        <Banner/>
        <Banner2/>
        <Videobanner/>
        <Blogs/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
