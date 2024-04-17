import React, { useState } from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const [showForm, setShowForm] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [testimonialData, setTestimonialData] = useState([
    {
      id: 1,
      name: "Samuel",
      text:
        "Absolutely love how easy it is to plan and book trips with this app - makes travel a breeze!",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "John Doe",
      text:
        "The personalized recommendations feature is spot on, helped me discover hidden gems I wouldn't have found otherwise.",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Smith",
      text:
        "Customer support is top-notch - had a small issue during my trip and they resolved it quickly and efficiently, highly recommend!",
      img: "https://picsum.photos/103/103",
    },
  ]);

  const handleToggleForm = () => {
    setShowForm(!showForm);
  };

  const handleSubmitForm = (formData) => {
    setTestimonialData([...testimonialData, formData]);
    setShowForm(false);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 2000); // Hide popup after 2 seconds
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div>
        <div className="text-center">
          <button
            onClick={handleToggleForm}
            className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary transition duration-300"
          >
            Add Review
          </button>
        </div>
        {showPopup && (
          <div className="fixed bottom-10 right-10 bg-white p-4 rounded-md shadow-md">
            <p>Review submitted successfully!</p>
          </div>
        )}
        {showForm && (
          <ReviewForm onSubmit={handleSubmitForm} onCancel={handleToggleForm} />
        )}
        <Slider {...settings}>
          {testimonialData.map(({ id, name, text, img }) => (
            <div key={id} className="my-6">
              <div className="flex flex-col justify-center items-center gap-4 text-center shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                <img src={img} alt="" className="rounded-full block mx-auto" />
                <h1 className="text-xl font-bold">{name}</h1>
                <p className="text-gray-500 text-sm">{text}</p>
                <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                  ,,
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

const ReviewForm = ({ onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ name: "", text: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", text: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        className="my-2 px-3 py-2 border border-gray-300 rounded-md"
      />
      <textarea
        name="text"
        placeholder="Your review"
        value={formData.text}
        onChange={handleChange}
        className="my-2 px-3 py-2 border border-gray-300 rounded-md"
      ></textarea>
      <div className="text-center mt-4">
        <button
          type="submit"
          className="bg-primary text-white py-2 px-4 rounded-md shadow-md hover:bg-secondary transition duration-300 mr-2"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default Testimonial;
