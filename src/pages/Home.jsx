import React from "react";
import Announcement from "../component/Announcement";
import Navbar from "../component/Navbar";
import Slider from "../component/Slider";
import Categories from "../component/Categories";

import Newsletter from "../component/Newsletter";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
