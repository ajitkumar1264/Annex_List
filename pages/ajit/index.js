
import Link from 'next/link'
export const getStaticProps=async()=>{

  const res=await fetch("https://jsonplaceholder.typicode.com/users");
  const data=await res.json();

  return{
    props:{
      annex:data
    }
  }

}

function index({annex}) {
  return (
    <>
    <div className="p-10">
    <div className="px-20">
    <div className="text-4xl mb-10 font-semibold ">
    <h1 className="">All Annex Member 📃 </h1>
    </div>
    {annex.map((ele)=>{
      return(
        <>
        <div className="box border-2 mb-2 p-2 text-xl w-auto">
        <Link href={`ajit/${ele.id}`}><button><h4 key={ele.id}>
       {ele.id} : {ele.name}</h4></button></Link>
        </div>
        </>
      )
    })}
   
    </div>
    </div>
    </>
  )
}

export default index