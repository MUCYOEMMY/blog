import React from 'react'
import { Link } from 'react-router-dom'
// import { FaUser } from 'react-icons/fa'
import { useNavigate} from 'react-router-dom'
// import * as yup  from "yup"
// import  {yupResolver} from "@hookform/resolvers/yup"
import axios from "axios";
import { useForm } from 'react-hook-form';
import Charts from './Charts';


const REGISTER_URL = "https://blogapi12.onrender.com/api/v1/postBlog";

// const schema = yup
//   .object()
//   .shape({
  
   
//   })
  
export const ChartsDashboard = () => {

  const  {register ,handleSubmit } =  useForm({
    // resolver:yupResolver()
  })

  const navigate  = useNavigate();
  const   onSubmit  = async  (data) =>{
         const  blogData =  new FormData();
      blogData.append("title",data.title);
      blogData.append("description",data.description);
      blogData.append("image",data.image[0]);
       try {
        const  response  = await  axios.post(REGISTER_URL, blogData,{
          headers:{
            "content-type":"multipart/form-data",
            Authorization:`Bearer ${localStorage.getItem("token")}`
          }
        })
        console.log(response);
        navigate("/Dashbord")

      } catch (error) {
        console.log(error.response);
      }
  }

  return (
    <div className='container dash'>
    <div className="LeftSide">
      <ul>
      <Link to="/dashbord"> <li>Manage</li> </Link>
      <Link to="/blogCreate"> <li>blogPost</li> </Link>
      <Link to="/Charts"> <li>charts</li> </Link>
        {/* <li>blogPost</li> */}
      </ul>
    </div>
    <div className="rightSide flex justify-center items-center">
      <Charts/>
    </div>


</div>
  )
}

export default ChartsDashboard