// // import React, { useState } from "react";
// // import { Link } from "react-router-dom";
// // import BlogCard from "./BlogCard";
// // import Img1 from "../../assets/places/tajmahal.jpg";
// // import Img2 from "../../assets/places/water.jpg";
// // import Img3 from "../../assets/places/boat.jpg";

// // const BlogsData = [
// //   {
// //     id: 1,
// //     image: Img1,
// //     title: "Top places to visit in India",
// //     description:
// //       "India, a land of vibrant cultures, rich history, and breathtaking landscapes, offers travelers a myriad of enchanting destinations to explore. From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India is a treasure trove of experiences waiting to be discovered. No visit to India is complete without marveling at the exquisite beauty of the Taj Mahal in Agra, a UNESCO World Heritage site often referred to as the epitome of love. Explore the vibrant Pink City of Jaipur in Rajasthan, with its majestic Amber Fort and stunning Hawa Mahal. Experience the spiritual ambiance of Varanasi, one of the oldest continuously inhabited cities in the world, situated on the banks of the sacred Ganges River. Escape to the tranquil backwaters of Kerala, cruise along the serene canals, and immerse yourself in the unique way of life. Adventure awaits in Ladakh, where dramatic landscapes of snow-capped mountains and azure lakes beckon nature lovers and thrill-seekers alike. Explore the pristine beaches and Portuguese heritage of Goa, or find solace in the yoga capital of the world, Rishikesh, nestled in the foothills of the Himalayas. Step back in time as you explore the ancient ruins of Hampi in Karnataka, lose yourself in the colonial charm of Darjeeling in West Bengal, or indulge in the romance of Udaipur, fondly referred to as the City of Lakes. With its diverse landscapes, rich cultural heritage, and warm hospitality, India promises an unforgettable journey filled with awe-inspiring experiences and lifelong memories for every traveler.",
// //     author: "Someone",
// //     date: "April 22, 2022",
// //   },
// //   {
// //     id: 2,
// //     image: Img2,
// //     title: "Top places to visit in US",
// //     description:
// //       "The United States boasts a vast array of captivating destinations, each offering its own unique blend of natural beauty, cultural richness, and iconic landmarks. From the breathtaking landscapes of the Grand Canyon and Yellowstone National Park to the vibrant cityscapes of New York City and San Francisco, there's something for every traveler to explore. Marvel at the awe-inspiring monuments in Washington D.C., immerse yourself in the glitz and glamour of Las Vegas, or discover the rich history of colonial Williamsburg. For outdoor enthusiasts, the scenic wonders of Yosemite National Park, the stunning coastline of Big Sur, and the majestic peaks of the Rocky Mountains provide endless opportunities for adventure and exploration. Whether you're seeking bustling metropolises, serene natural wonders, or charming small towns, the United States offers a diverse tapestry of experiences waiting to be discovered.",
// //     author: "Someone",
// //     date: "April 22, 2022",
// //   },
// //   {
// //     id: 3,
// //     image: Img3,
// //     title: "Top places to visit in Japan",
// //     description:
// //       "Japan offers a captivating tapestry of ancient traditions, modern marvels, and breathtaking natural beauty that beckon travelers from around the globe. Begin your journey in the bustling metropolis of Tokyo, where skyscrapers tower over historic temples and traditional tea houses. Immerse yourself in the rich cultural heritage of Kyoto, home to iconic landmarks such as the Golden Pavilion and Fushimi Inari Shrine. Explore the picturesque landscapes of Hakone, with its hot springs and stunning views of Mount Fuji, or venture to the historic city of Hiroshima, a poignant reminder of resilience and peace. Discover the timeless charm of traditional villages like Shirakawa-go and Takayama, where thatched-roof houses and narrow cobblestone streets transport you to another era. Whether you're savoring sushi in bustling food markets, contemplating the serenity of ancient gardens, or marveling at the cutting-edge technology of modern cities, Japan promises an unforgettable journey filled with cultural wonders and captivating experiences.",
// //     author: "Someone",
// //     date: "April 22, 2022",
// //   },
// // ];

// // const BlogsComp = () => {
// //   const [blogs, setBlogs] = useState(BlogsData);
// //   const [formData, setFormData] = useState({});
// //   const [isAddingBlog, setIsAddingBlog] = useState(false);
// //   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

// //   const handleAddBlog = () => {
// //     // Add a new blog post using the formData
// //     const newBlog = {
// //       id: blogs.length + 1,
// //       ...formData,
// //     };
// //     setBlogs([...blogs, newBlog]);
// //     // Clear the form data after adding
// //     setFormData({});
// //     setIsAddingBlog(false);
// //     setShowSuccessMessage(true);
// //     // Reset success message after 3 seconds
// //     setTimeout(() => {
// //       setShowSuccessMessage(false);
// //     }, 3000);
// //   };

// //   const handleDeleteBlog = (id) => {
// //     // Delete the blog post with the given id
// //     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
// //     setBlogs(updatedBlogs);
// //   };

// //   return (
// //     <>
// //       <div className="dark:bg-gray-900 dark:text-white py-10">
// //         <section data-aos="fade-up" className="container ">
// //           <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
// //             Our Latest Blogs
// //           </h1>
// //           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
// //             {blogs.map((item) => (
// //               <BlogCard key={item.id} {...item} onDelete={() => handleDeleteBlog(item.id)} />
// //             ))}
// //           </div>
// //           {isAddingBlog && (
// //             <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center">
// //               <div className="bg-gray-200 p-6 rounded-lg">
// //                 <h2 className="text-lg font-semibold mb-4">Add Blog</h2>
// //                 <input
// //                   type="text"
// //                   placeholder="Title"
// //                   value={formData.title || ""}
// //                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
// //                   className="w-full border border-gray-300 rounded-lg p-2 mb-4"
// //                 />
// //                 <textarea
// //                   placeholder="Description"
// //                   value={formData.description || ""}
// //                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
// //                   className="w-full border border-gray-300 rounded-lg p-2 mb-4"
// //                 />
// //                 <button onClick={handleAddBlog} className="bg-primary text-white rounded-lg px-4 py-2">Submit</button>
// //               </div>
// //             </div>
// //           )}
// //           {showSuccessMessage && (
// //             <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center">
// //               <div className="bg-green-500 text-white p-6 rounded-lg">
// //                 Blog added successfully!
// //               </div>
// //             </div>
// //           )}
// //           {!isAddingBlog && (
// //             <button onClick={() => setIsAddingBlog(true)} className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-4 rounded-full">Add Blog</button>
// //           )}
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default BlogsComp;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import BlogCard from "./BlogCard";
// import Img1 from "../../assets/places/tajmahal.jpg";
// import Img2 from "../../assets/places/water.jpg";
// import Img3 from "../../assets/places/boat.jpg";

// const BlogsData = [
//   {
//         id: 1,
//         image: Img1,
//         title: "Top places to visit in India",
//         description:
//           "India, a land of vibrant cultures, rich history, and breathtaking landscapes, offers travelers a myriad of enchanting destinations to explore. From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India is a treasure trove of experiences waiting to be discovered. No visit to India is complete without marveling at the exquisite beauty of the Taj Mahal in Agra, a UNESCO World Heritage site often referred to as the epitome of love. Explore the vibrant Pink City of Jaipur in Rajasthan, with its majestic Amber Fort and stunning Hawa Mahal. Experience the spiritual ambiance of Varanasi, one of the oldest continuously inhabited cities in the world, situated on the banks of the sacred Ganges River. Escape to the tranquil backwaters of Kerala, cruise along the serene canals, and immerse yourself in the unique way of life. Adventure awaits in Ladakh, where dramatic landscapes of snow-capped mountains and azure lakes beckon nature lovers and thrill-seekers alike. Explore the pristine beaches and Portuguese heritage of Goa, or find solace in the yoga capital of the world, Rishikesh, nestled in the foothills of the Himalayas. Step back in time as you explore the ancient ruins of Hampi in Karnataka, lose yourself in the colonial charm of Darjeeling in West Bengal, or indulge in the romance of Udaipur, fondly referred to as the City of Lakes. With its diverse landscapes, rich cultural heritage, and warm hospitality, India promises an unforgettable journey filled with awe-inspiring experiences and lifelong memories for every traveler.",
//         author: "Someone",
//         date: "April 22, 2022",
//       },
//       {
//         id: 2,
//         image: Img2,
//         title: "Top places to visit in US",
//         description:
//           "The United States boasts a vast array of captivating destinations, each offering its own unique blend of natural beauty, cultural richness, and iconic landmarks. From the breathtaking landscapes of the Grand Canyon and Yellowstone National Park to the vibrant cityscapes of New York City and San Francisco, there's something for every traveler to explore. Marvel at the awe-inspiring monuments in Washington D.C., immerse yourself in the glitz and glamour of Las Vegas, or discover the rich history of colonial Williamsburg. For outdoor enthusiasts, the scenic wonders of Yosemite National Park, the stunning coastline of Big Sur, and the majestic peaks of the Rocky Mountains provide endless opportunities for adventure and exploration. Whether you're seeking bustling metropolises, serene natural wonders, or charming small towns, the United States offers a diverse tapestry of experiences waiting to be discovered.",
//         author: "Someone",
//         date: "April 22, 2022",
//       },
//       {
//         id: 3,
//         image: Img3,
//         title: "Top places to visit in Japan",
//         description:
//           "Japan offers a captivating tapestry of ancient traditions, modern marvels, and breathtaking natural beauty that beckon travelers from around the globe. Begin your journey in the bustling metropolis of Tokyo, where skyscrapers tower over historic temples and traditional tea houses. Immerse yourself in the rich cultural heritage of Kyoto, home to iconic landmarks such as the Golden Pavilion and Fushimi Inari Shrine. Explore the picturesque landscapes of Hakone, with its hot springs and stunning views of Mount Fuji, or venture to the historic city of Hiroshima, a poignant reminder of resilience and peace. Discover the timeless charm of traditional villages like Shirakawa-go and Takayama, where thatched-roof houses and narrow cobblestone streets transport you to another era. Whether you're savoring sushi in bustling food markets, contemplating the serenity of ancient gardens, or marveling at the cutting-edge technology of modern cities, Japan promises an unforgettable journey filled with cultural wonders and captivating experiences.",
//         author: "Someone",
//         date: "April 22, 2022",
//       },
// ];

// const BlogsComp = () => {
//   const [blogs, setBlogs] = useState(BlogsData);
//   const [formData, setFormData] = useState({});
//   const [isAddingBlog, setIsAddingBlog] = useState(false);
//   const [showSuccessMessage, setShowSuccessMessage] = useState(false);

//   const handleAddBlog = () => {
//     // Add a new blog post using the formData
//     const newBlog = {
//       id: blogs.length + 1,
//       ...formData,
//     };
//     setBlogs([...blogs, newBlog]);
//     // Clear the form data after adding
//     setFormData({});
//     setIsAddingBlog(false);
//     setShowSuccessMessage(true);
//     // Reset success message after 3 seconds
//     setTimeout(() => {
//       setShowSuccessMessage(false);
//     }, 3000);
//   };

//   const handleDeleteBlog = (id) => {
//     // Delete the blog post with the given id
//     const updatedBlogs = blogs.filter((blog) => blog.id !== id);
//     setBlogs(updatedBlogs);
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setFormData({ ...formData, image: reader.result });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <>
//       <div className="dark:bg-gray-900 dark:text-white py-10">
//         <section data-aos="fade-up" className="container ">
//           <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
//             Our Latest Blogs
//           </h1>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
//             {blogs.map((item) => (
//               <BlogCard key={item.id} {...item} onDelete={() => handleDeleteBlog(item.id)} />
//             ))}
//           </div>
//           {isAddingBlog && (
//             <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center">
//               <div className="bg-gray-200 p-6 rounded-lg">
//                 <h2 className="text-lg font-semibold mb-4">Add Blog</h2>
//                 <input
//                   type="text"
//                   placeholder="Title"
//                   value={formData.title || ""}
//                   onChange={(e) => setFormData({ ...formData, title: e.target.value })}
//                   className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                 />
//                 <textarea
//                   placeholder="Description"
//                   value={formData.description || ""}
//                   onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                   className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                 />
//                 <input
//                   type="file"
//                   accept="image/*"
//                   onChange={handleImageChange}
//                   className="w-full border border-gray-300 rounded-lg p-2 mb-4"
//                 />
//                 <button
//                   onClick={handleAddBlog}
//                   className="bg-primary text-white rounded-lg px-4 py-2 mr-2"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}
//           {showSuccessMessage && (
//             <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center">
//               <div className="bg-green-500 text-white p-6 rounded-lg">
//                 Blog added successfully!
//               </div>
//             </div>
//           )}
//           {!isAddingBlog && (
//             <button
//               onClick={() => setIsAddingBlog(true)}
//               className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
//             >
//               Add Blog
//             </button>
//           )}
//         </section>
//       </div>
//     </>
//   );
// };

// export default BlogsComp;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  // Your blog data remains the same
  {
            id: 1,
            image: Img1,
            title: "Top places to visit in India",
            description:
              "India, a land of vibrant cultures, rich history, and breathtaking landscapes, offers travelers a myriad of enchanting destinations to explore. From the majestic Himalayas in the north to the serene backwaters of Kerala in the south, India is a treasure trove of experiences waiting to be discovered. No visit to India is complete without marveling at the exquisite beauty of the Taj Mahal in Agra, a UNESCO World Heritage site often referred to as the epitome of love. Explore the vibrant Pink City of Jaipur in Rajasthan, with its majestic Amber Fort and stunning Hawa Mahal. Experience the spiritual ambiance of Varanasi, one of the oldest continuously inhabited cities in the world, situated on the banks of the sacred Ganges River. Escape to the tranquil backwaters of Kerala, cruise along the serene canals, and immerse yourself in the unique way of life. Adventure awaits in Ladakh, where dramatic landscapes of snow-capped mountains and azure lakes beckon nature lovers and thrill-seekers alike. Explore the pristine beaches and Portuguese heritage of Goa, or find solace in the yoga capital of the world, Rishikesh, nestled in the foothills of the Himalayas. Step back in time as you explore the ancient ruins of Hampi in Karnataka, lose yourself in the colonial charm of Darjeeling in West Bengal, or indulge in the romance of Udaipur, fondly referred to as the City of Lakes. With its diverse landscapes, rich cultural heritage, and warm hospitality, India promises an unforgettable journey filled with awe-inspiring experiences and lifelong memories for every traveler.",
            author: "Someone",
            date: "April 22, 2022",
          },
          {
            id: 2,
            image: Img2,
            title: "Top places to visit in US",
            description:
              "The United States boasts a vast array of captivating destinations, each offering its own unique blend of natural beauty, cultural richness, and iconic landmarks. From the breathtaking landscapes of the Grand Canyon and Yellowstone National Park to the vibrant cityscapes of New York City and San Francisco, there's something for every traveler to explore. Marvel at the awe-inspiring monuments in Washington D.C., immerse yourself in the glitz and glamour of Las Vegas, or discover the rich history of colonial Williamsburg. For outdoor enthusiasts, the scenic wonders of Yosemite National Park, the stunning coastline of Big Sur, and the majestic peaks of the Rocky Mountains provide endless opportunities for adventure and exploration. Whether you're seeking bustling metropolises, serene natural wonders, or charming small towns, the United States offers a diverse tapestry of experiences waiting to be discovered.",
            author: "Someone",
            date: "April 22, 2022",
          },
          {
            id: 3,
            image: Img3,
            title: "Top places to visit in Japan",
            description:
              "Japan offers a captivating tapestry of ancient traditions, modern marvels, and breathtaking natural beauty that beckon travelers from around the globe. Begin your journey in the bustling metropolis of Tokyo, where skyscrapers tower over historic temples and traditional tea houses. Immerse yourself in the rich cultural heritage of Kyoto, home to iconic landmarks such as the Golden Pavilion and Fushimi Inari Shrine. Explore the picturesque landscapes of Hakone, with its hot springs and stunning views of Mount Fuji, or venture to the historic city of Hiroshima, a poignant reminder of resilience and peace. Discover the timeless charm of traditional villages like Shirakawa-go and Takayama, where thatched-roof houses and narrow cobblestone streets transport you to another era. Whether you're savoring sushi in bustling food markets, contemplating the serenity of ancient gardens, or marveling at the cutting-edge technology of modern cities, Japan promises an unforgettable journey filled with cultural wonders and captivating experiences.",
            author: "Someone",
            date: "April 22, 2022",
          },
];

const BlogsComp = () => {
  const [blogs, setBlogs] = useState(BlogsData);
  const [formData, setFormData] = useState({});
  const [isAddingBlog, setIsAddingBlog] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleAddBlog = () => {
    // Add a new blog post using the formData
    const newBlog = {
      id: blogs.length + 1,
      ...formData,
    };
    setBlogs([...blogs, newBlog]);
    // Clear the form data after adding
    setFormData({});
    setIsAddingBlog(false);
    setShowSuccessMessage(true);
    // Reset success message after 3 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 3000);
  };

  const handleDeleteBlog = (id) => {
    // Delete the blog post with the given id
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {blogs.map((item) => (
              <BlogCard key={item.id} {...item} onDelete={() => handleDeleteBlog(item.id)} />
            ))}
          </div>
          {isAddingBlog && (
            <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="bg-gray-200 p-6 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">Add Blog</h2>
                <input
                  type="text"
                  placeholder="Title"
                  value={formData.title || ""}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                />
                <textarea
                  placeholder="Description"
                  value={formData.description || ""}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full border border-gray-300 rounded-lg p-2 mb-4"
                />
                <button
                  onClick={handleAddBlog}
                  className="bg-primary text-white rounded-lg px-4 py-2 mr-2"
                >
                  Submit
                </button>
              </div>
            </div>
          )}
          {showSuccessMessage && (
            <div className="bg-white fixed top-0 left-0 w-full h-full flex justify-center items-center">
              <div className="bg-green-500 text-white p-6 rounded-lg">
                Blog added successfully!
              </div>
            </div>
          )}
          {!isAddingBlog && (
            <button
              onClick={() => setIsAddingBlog(true)}
              className="bg-gradient-to-r from-primary to-secondary hover:bg-bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white px-3 py-1 rounded-full"
            >
              Add Blog
            </button>
          )}
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
