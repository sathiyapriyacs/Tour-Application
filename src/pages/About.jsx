import React from "react";
import BlogsComp from "../components/Blogs/BlogsComp";
import Location from "../components/Location/Location";

const About = () => {
  return (
    <>
      <div className="container pt-14">
        <div className="py-10">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            About us
          </h1>
          <p>
          we're passionate about exploration, adventure, and making unforgettable memories. Our mission is to make travel seamless, exciting, and tailored to your unique preferences.
          We are a team of travel enthusiasts, tech aficionados, and customer experience experts dedicated to revolutionizing the way you experience the world. With a blend of cutting-edge technology and personalized service, we strive to provide you with the ultimate travel companion.
          </p>
          <br />
          <p>
          we envision a world where travel is not just a destination, but a transformative experience that enriches your life and broadens your horizons. Join us on this journey as we redefine the way you explore the glob
          Ready to embark on your next adventure?
          </p>
        </div>
      </div>
      <Location />
      <BlogsComp />
    </>
  );
};

export default About;
