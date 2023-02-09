import React from 'react'
import {FiEdit} from 'react-icons/fi'
import {AiFillDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const Dashbord = () => {
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
          <div className="rigthSidescard">
            <h5>Umukanda_nzujyi</h5>
            <div className="icons">
              <AiFillDelete className='AiFillDelete'/>
              <FiEdit className='FiEdit'/>
            </div>
          </div>
          <div className="rigthSidescard">
            <h5>UmuryaKariho</h5>
            <div className="icons">
              <AiFillDelete className='AiFillDelete'/>
              <FiEdit className='FiEdit'/>
            </div>
          </div>
          <div className="rigthSidescard">
            <h5>Mwene Mibambwe</h5>
            <div className="icons">
              <AiFillDelete className='AiFillDelete'/>
              <FiEdit className='FiEdit'/>
            </div>
          </div>
          <div className="rigthSidescard">
            <h5>Mwene Mibambwe</h5>
            <div className="icons">
              <AiFillDelete className='AiFillDelete'/>
              <FiEdit className='FiEdit'/>
            </div>
          </div>
          <div className="rigthSidescard">
            <h5>Mwene Mibambwe</h5>
            <div className="icons">
              <AiFillDelete className='AiFillDelete'/>
              <FiEdit className='FiEdit'/>
            </div>
          </div>
        </div>


    </div>
  )
}

export default Dashbord