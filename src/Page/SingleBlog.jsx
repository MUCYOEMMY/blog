import React from 'react'
import {useParams} from "react-router-dom";

const SingleBlog = ({blogs}) => {

    const {blogId} = useParams();
    console.log(blogId)
    const singleBlog = blogs.find((item) => item._id === blogId);
    return (
    <>
    <div className="singleBlog">
        <div className="imgContainer">
        <img src={singleBlog?.image} alt="Ifoto" />
        </div>
        <h2>{singleBlog?.title}</h2>
        <div className="descs">
        <p>{singleBlog?.description}</p>
        </div>



        <div className="coments">
            <div className="form">
                <div className="formGroup">
                    <label htmlFor="">userName</label>
                    <input type="text" placeholder='UserName'/>
                </div>
                <div className="formGroup">
                    <label htmlFor="">Drop Your Comment</label>
                    <textarea  placeholder='Description'/>
                </div>
                <div className="formGroup">
                    <input type="submit" value="comment" className='btn'/>
                </div>
            </div>
        </div>
    </div>
    
    
    </>
  )
}

export default SingleBlog