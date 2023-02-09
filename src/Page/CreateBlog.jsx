import React from 'react'
import { Link } from 'react-router-dom'
const CreateBlog = () => {
  return (
    <div className='container dash'>
    <div className="LeftSide">
      <ul>
      <Link to="/dashbord"> <li>Manage</li> </Link>
      <Link to="/blogCreate"> <li>blogPost</li> </Link>
        {/* <li>blogPost</li> */}
      </ul>
    </div>
    <div className="rightSide">
      <div className="form">
        <div className="formGroup">
            <label htmlFor="">UserName</label>
            <input type="text" placeholder='UserName'/>
        </div>
        <div className="formGroup">
            <label htmlFor="">Title</label>
            <input type="text" placeholder='Title'/>
        </div>
        <div className="formGroup">
            <label htmlFor="">image</label>
            <input type="file" placeholder='Title'/>
        </div>
        <div className="formGroup">
            <label htmlFor="">Description</label>
            <textarea placeholder='TitDescriptionle'/>
        </div>
        <div className="formGroup">
           <input type="submit" value="CreateBlog"className="btn"/>
        </div>
      </div>
    </div>


</div>
  )
}

export default CreateBlog