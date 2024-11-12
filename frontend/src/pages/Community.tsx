import { FaLinkedin, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/homePage/Navbar';
import Footer from '../components/homePage/Footer';
const Community = () => {
  return (
    <>
    <Navbar />
        <div className="flex flex-col container mx-auto md:flex-row-reverse items-center py-4 text-md ">
        <div className="flex items-center justify-center w-[100%]">
          <img src="https://i.pinimg.com/474x/2a/58/5b/2a585b228e3b428c03bfa96a9e3c488c.jpg"
          // {communityImage}
           alt="community pic" className="rounded mb-4 w-[400px] md:mb-0" />
        </div>
        <div className=" ml-[30px] md:w-1/2 p-8 card">
          <h2 className="text-2xl font-bold mb-2">Join our Community✨</h2>
          <p>Be part of a growing network dedicated to empowering individuals through learning resources 📚, cloud solutions ☁️, Power BI 📊, and more. Our startup is focused on sharing knowledge, enabling users to skill up 🚀, and helping them reach new heights in their careers 💼. Whether you're looking
             to expand your cloud expertise or get hands-on with data solutions, we provide everything you need to succeed 🎯.</p>
          
          <div className="flex justify-center space-x-10 py-4">
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700">
        <FaLinkedin size={30} />
      </a>
      <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="text-green-500">
        <FaWhatsapp size={30} />
      </a>
      <a href="mailto:username@example.com" className="text-red-500">
        <FaEnvelope size={30} />
      </a>
    </div>
    {/* <form>
    <h6 className="footer-title">Newsletter</h6>
    <p>Stay connected with the latest updates by subscribing to our newsletter! 💌</p>
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label>
      <div className="join">
        <input
          type="text"
          placeholder="username@gmail.com"
          className="input input-bordered join-item" />
        <button className="btn btn-primary join-item">Subscribe</button>
      </div>
    </fieldset>
  </form> */}
        </div>
      </div>
      <Footer />
      </>
  )
}

export default Community