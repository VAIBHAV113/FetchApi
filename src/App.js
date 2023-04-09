import './App.css';
import React,{useState , useEffect} from 'react'
import Tours from './component/tours';
// import tours from './component/tours';
import Loading from './component/loading';
 
const url = 'https://course-api.com/react-tours-project'

function App() {
 const [loading,setLoading] = useState(true)
 const [tours, settours] = useState([])

 const fetchTours = async () => {
   setLoading(true);
   try{
   const response = await fetch(url);
   const tours = await response.json();
   settours(tours);
   setLoading(false);
   }
   catch(error)
   {
    console.log(error);
   }
 }
 useEffect(()=>{
  fetchTours()
 },[])
 if(loading)
 {
  return(
 <main>
  <Loading />
 </main>
  )
 }
  return (
   <main>
    <Tours tours={tours} /> 
   </main>
  );
}

export default App;
