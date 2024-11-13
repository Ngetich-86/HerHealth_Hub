import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import Navbar from '../components/homePage/Navbar';
import Footer from '../components/homePage/Footer';
// Sample initial blog data
const initialBlogData = [
    {
        blog_id: '1',
        blog_name: 'Empowering Women with Mental Health Tools',
        blog_description: 'Explore effective strategies and tools for enhancing mental well-being. Learn techniques for stress management and emotional balance.',
        blog_image: 'https://i.pinimg.com/474x/45/45/b3/4545b3944c3ec5bebab051118e4f5429.jpg',  // Replace with an actual image link
        blog_link: '/blogs/empowering-women-mental-health',
    },
    {
        blog_id: '2',
        blog_name: 'Holistic Wellness: Nutrition, Fitness & Mindfulness',
        blog_description: 'Discover the importance of a balanced lifestyle. Learn how nutrition, fitness, and mindfulness work together to boost overall health.',
        blog_image: 'https://i.pinimg.com/474x/15/24/80/1524808aeef81a986379fcc475f4b1ce.jpg',  // Replace with an actual image link
        blog_link: '/blogs/holistic-wellness',
    },
    {
        blog_id: '3',
        blog_name: 'Fitness Challenges for Empowered Women',
        blog_description: 'Join fitness challenges designed for women. From strength training to yoga, these workouts will inspire and empower you to achieve your fitness goals.',
        blog_image: 'https://i.pinimg.com/474x/c2/6e/4d/c26e4db9db0bc9d7e552cdc3df8d050b.jpg',  // Replace with an actual image link
        blog_link: '/blogs/fitness-challenges-empowered-women',
    },
    
];

// Component to display the blogs
const Blogs: React.FC = () => {
  const [blogs] = useState(initialBlogData);
  // const [newBlog, setNewBlog] = useState({
  //   blog_name: '',
  //   blog_description: '',
  //   blog_image: '',
  //   blog_link: '',
  // });
  // const navigate = useNavigate();

  // Redirect to the "Create Blog" page
  // const handleCreateBlog = () => {
  //   navigate('/create-blog');
  // };
  // Handler for form input changes
  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  //   const { name, value } = e.target;
  //   setNewBlog({ ...newBlog, [name]: value });
  // };

  // Handler for form submission
  // const handleAddBlog = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();

  //   // Generate a new ID for the blog
  //   const newBlogId = (blogs.length + 1).toString();

  //   // Add the new blog to the list of blogs
  //   const updatedBlogs = [
  //     ...blogs,
  //     {
  //       ...newBlog,
  //       blog_id: newBlogId,
  //     },
  //   ];

  //   setBlogs(updatedBlogs);

  //   // Clear the form after submission
  //   setNewBlog({
  //     blog_name: '',
  //     blog_description: '',
  //     blog_image: '',
  //     blog_link: '',
  //   });
  // };

  return (
    <>
    <Navbar />
    <div className="container max-w-7xl mx-auto py-6 px-4 lg:px-0">
      <h1 className="text-3xl font-bold flex justify-center text-white mb-6 px-4">HealthHer  Blogs</h1>
      {/* <button
          onClick={handleCreateBlog}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Create New Blog
        </button> */}

      
      {blogs.length === 0 ? (
        <p className="text-lg text-gray-200">No blogs available at the moment. Check back later!</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-4">
          {blogs.map((blog) => (
            <li key={blog.blog_id} className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-full">
              {blog.blog_image && (
                <img
                  src={blog.blog_image}
                  alt="Blog banner"
                  className="w-full h-40 object-cover rounded-lg mb-4"
                />
              )}
              <h2 className="text-2xl font-semibold text-white mb-2">
                {blog.blog_name}
              </h2>
              <p className="text-white mb-2"><strong>About: </strong>{blog.blog_description}</p>
              <div className="card-container flex justify-center items-center">
                <p className="mb-2 flex justify-center">
                  <a href={blog.blog_link} className="bg-drawer px-4 p-2 text-black w-[80px] rounded hover:bg-blue-500">
                    <button
                    className="bg-green-500 p-2 text-white w-[100px] rounded hover:text-blue-700 font-medium"
                    >Read</button>
                  </a>
                </p>
              </div>
              <div className="flex justify-between mt-6 space-x-4">
              {/* <button
                // onClick={() => handleEditClick(resource)}
                className="bg-blue-500 p-2 text-white w-[100px] rounded hover:text-blue-700 font-medium"
              >
                Edit
              </button>
              <button
                // onClick={() => handleDeleteClick(resource)}
                className="bg-red-500 p-2 text-white w-[100px] rounded hover:text-red-700 font-medium"
              >
                Delete
              </button> */}
            </div>
            </li>
          ))}
        </ul>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Blogs;
