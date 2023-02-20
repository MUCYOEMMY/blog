import axios from 'axios'
import React from 'react'
import { useState,useEffect } from 'react'
import {useForm} from "react-hook-form"
import {FiEdit} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
// import Blog1 from "../Asset/4.jpeg";
const Dashbord = ({blogs}) => {
  const [selected, setSelected] = useState(null);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: selected?.title,
      description: selected?.description,
    },
  });

  const [modal, setModal] = useState(false);

  const handleDelete = async (id) => {
    try {
      await axios({
        method: "DELETE",
        url: `https://blogapi12.onrender.com/api/v1/blog/${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      // window.location.reload(true);
    } catch (error) {
      console.log(error.response);
    }
  };
const getSingleBlog = async (id) => {
  const selectedBlog = blogs.find((blog) => blog._id === id);
  setSelected(selectedBlog);

  // reset();
  console.log(selectedBlog);
};
useEffect(() => {
  reset(selected);
  // eslint-disable-next-line
}, [selected]); 

const onSubmit = async ({ image, title, description }) => {
  try {
    const formData = new FormData();
    formData.append("image", image[0]);
    formData.append("title", title);
    formData.append("description", description);
    await axios.patch(
      `https://blogapi12.onrender.com/api/v1/update/${selected._id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    alert("You made it!", "Blog updated successfully ", "Ok", {
      timeout: 2000,
    });
    setTimeout(() => {
      window.location.reload(true);
    }, 3000);
  } catch (error) {
    console.log(error.response);
  }
};

  return (
    <>
    <div className='mt-4 flex flex-col justify-center items-center text-slate-900'>
        <div className='w-full flex justify-end'>
            {/* <Drop/> */}
        </div>
        {/* {blogs && <p></p>} */}
    <div className='container dash'>
        <div className="LeftSide">
          <ul>
          <Link to="/dashbord"> <li>Manage</li> </Link>
          <Link to="/blogCreate"> <li>blogPost</li> </Link>
          <Link to="/Charts"> <li>charts</li> </Link>
            {/* <li>blogPost</li> */}
          </ul>
        </div>
        <div className="rightSide">
        {
        ! blogs  ?<h1>Loading...</h1>:
  blogs.map((item) =>{
  return (
          <div className="rigthSidescard">
          <div className="image">
        <img src={item.image} alt="" className="rounded-xl xl:w-full lg:w-full" />
      </div>
      <div className='text'>
           <h2> {item.title}</h2>
          
                
      </div>
            <div className="icons">
              <AiFillDelete className='AiFillDelete'
               onClick={() => {
                handleDelete(item._id);
               }}
              />
              <FiEdit className='FiEdit'
              onClick={() => {
                getSingleBlog(item._id);
                setModal(!modal);
              }}
              />
            </div>
          </div>
          )
        })}
        </div>
    </div>
  
  </div>
  <div>
    { modal &&
        <form className="bg-blue-200 absolute top-0 left-0 w-screen h-screen flex flex-col items-center justify-center" onSubmit={handleSubmit(onSubmit)}>
          <h1>Update Blog</h1>
          <br />
          <div className="blog-form-control p-4 w-1/2">
            <label className='w-full'>Title:</label><br />
            <input type="text" {...register("title")}  className="w-full"/>
          </div>
          <div className="blog-form-control  p-4 w-1/2">
            <label className='w-full'>Description</label><br />
            <textarea className="w-full"
              type="text"
              cols="20"
              rows="5 "
              {...register("description")}
            />
          </div>
          <div className="blog-form-control p-4 w-1/2">
            <label className='w-full'>Image</label><br />
            <input type="file" 
            {...register("image")}
            className="w-full"/>
          </div>
          <div className="modal-footer flex gap-5">
            <button className="bg-blue-300 px-6 py-3 rounded-lg" type='Submit'>Save updates</button>
            <button
              className="bg-blue-100 px-6 py-3 rounded-lg"
              onClick={() => setModal(!modal)}
            >
              cancel
            </button>
          </div>
        </form>
      }
      </div>
  </>
  
  )}

export default Dashbord