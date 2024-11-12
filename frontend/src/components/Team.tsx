import { FaGithub, FaLinkedin,FaTwitter } from "react-icons/fa";

const Team = () => {
  return (
    <div className="my-10 bg container mx-auto">
    <h2 className="text-3xl font-bold text-center mb-8">Meet Our Consultants</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:mb-10 gap-8">
      {/* Team Member 1 */}

      <div className="bg-gray-800  mb-10 shadow-lg rounded-lg overflow-hidden">
        <img src="https://i.pinimg.com/474x/b0/57/3f/b0573f1b940b17b9460613f02e97f51a.jpg" alt="Team Member 2" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
          <p className=" mb-4">Consultant</p>
          <div className='flex justify-between'>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaTwitter size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      {/* Team Member 2 */}
      <div className="bg-gray-800  mb-10 shadow-lg rounded-lg overflow-hidden">
        <img src="https://i.pinimg.com/474x/b0/57/3f/b0573f1b940b17b9460613f02e97f51a.jpg" alt="Team Member 4" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
          <p className=" mb-4">Consultant</p>
          <div className='flex justify-between'>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaTwitter size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Team Member 3 */}
      <div className="bg-gray-800  mb-10 shadow-lg rounded-lg overflow-hidden">
        <img src='https://i.pinimg.com/474x/b0/57/3f/b0573f1b940b17b9460613f02e97f51a.jpg' alt="Team Member 3" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Jane Doe</h3>
          <p className=" mb-4"> Consultant</p>
          <div className='flex justify-between'>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaTwitter size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Team Member 4 */}
      <div className="bg-gray-800  mb-10 shadow-lg rounded-lg overflow-hidden">
        <img src='https://i.pinimg.com/474x/b0/57/3f/b0573f1b940b17b9460613f02e97f51a.jpg' alt="Team Member 1" className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold mb-2">Jane Doe </h3>
          <p className=" mb-4"> Consultant </p>
          <div className='flex justify-between'>
            <a href="/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaLinkedin size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaTwitter size={24} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
</div>
  )
}

export default Team