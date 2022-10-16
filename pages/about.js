import React from "react";

function about() {
  return (
    <>
      <div className="p-10 ">
      <div className="px-20">
      <div className="text-3xl font-bold">
        <h1>About component</h1>
        </div>
        <div className="mt-10 flex container items-center justify-between space-x-4">
    
         <p className="text-xl text-justify mr-52">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi hic
          harum earum, fugiat, nisi ab maxime ut doloribus beatae quibusdam
          voluptatem delectus aut, accusantium similique consequatur. Aliquam
          perspiciatis animi corporis dolorum facilis, voluptatem cupiditate,
          labore nihil, cumque aliquid expedita distinctio? Repellat odio
          exercitationem similique enim!
         </p>
        <div className="">
        <img src="/vercel.svg" className="mr-40" width={700}  height={400} alt="" />
        </div>
       
       
        
      </div>
      </div>
      </div>
    </>
  );
}

export default about;
