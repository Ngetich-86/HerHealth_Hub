

const Health = () => {
  return (
    <div className="h-fill min-h-[70vh] flex justify-center">
      <div className="max-w-[1400px] flex items-start justify-between max-xl:flex-col max-xl:px-8 w-full h-full pt-12">
        <div className="flex-1 h-full w-full max-xl:flex justify-center items-center animate-image-features">
          <img src="https://i.pinimg.com/474x/4c/ef/82/4cef82e56b0c02468c9ff24335bd6681.jpg" alt="Featured Banner" />
        </div>
        <div className="flex-1 h-full w-full">
          <h2 className="font-medium text-4xl animate-title">Tackling Women Health</h2>
          {/* <h3 className="text-gradient font-medium text-2xl animate-title-2">
             Web, Cloud and Data
          </h3> */}

          <div className="flex items-center h-fit lg:h-36 w-full bg-zinc-100 mt-4 rounded-md relative overflow-hidden info-card">
            {/* <div className="w-1 bg-[#2409CF] absolute left-0 top-0 h-full"></div> */}
            <div className="flex-1 h-full p-3 bg-black">
              <div className="flex items-center gap-x-3 ">
               
              </div>
              <p className="text-sm my-2">
              Explore our curated blogs and stay updated with the latest trends in web development, cloud computing, and data analytics. Whether you're looking to sharpen 
              your skills or dive deep into new topics, our blogs provide insightful resources to help you grow. Join our community and take the next step in your learning journey today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Health