export const  getStaticPaths=async()=>{
  
  const res=await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();

const paths=data.map(annex=>{
  return{
    params:{id:annex.id.toString()}
  }
})

return{
  paths,
  fallback:false
}

}

export const getStaticProps=async(context)=>{
  const id=context.params.id
  
  const res=await fetch("https://jsonplaceholder.typicode.com/users/"+id);
  const data=await res.json();

  return{
    props:{annex:data}
  }

}

function trackid({annex}) {
  return (
    <>
    <div className="p-10">
    <div className="px-20">
  
    <h3 className="text-center
     text-3xl font-semibold mb-10" >details</h3>

  <div className=" text-xl font-semibold text-justify flex-raw space-y-4">
    <h2>Name :   {annex.name}</h2>
    <h2>Email :    {annex.email}</h2>
    <h2>Website :  {annex.website}</h2>
    <h2>Address :   {annex.address.city}</h2>
    </div>
    </div>
    </div>
    </>
  )
}

export default trackid