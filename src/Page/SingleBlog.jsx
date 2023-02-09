import React from 'react'
import MEE from '../Asset/4.jpeg'
const SingleBlog = () => {
  return (
    <>
    <div className="singleBlog">
        <div className="imgContainer">
            <img src={MEE} alt="Ifoto" />
        </div>
        <h2>What is Lorem Ipsum?</h2>
        <div className="descs">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

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