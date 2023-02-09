import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Hamburger = () => {
    const [menu, setMenu] = useState(false)
  return (
    <div className='
    block
    xs:block
    sm:block
    md:hidden
    xl:hidden
    '>
        <button>
            {menu ?
                <FaTimes
                    onClick={()=>setMenu(!menu)}
                />
                :
                <FaBars
                    onClick={()=>setMenu(!menu)}
                />
            }
        </button>
        {menu ? 
            <div className="bg-indigo-100 absolute right-0 mt-6 z-10 mr-4 rounded-lg px-4 py-1 flex flex-col ">
                <Link 
                    to="/login" 
                    className='text-lg duration-300 hover:border-b rounded-lg hover:bg-indigo-900 hover:text-indigo-50 border-indigo-900 px-8 py-2 my-2'
                    onClick={()=>setMenu(!menu)}
                    >
                    Login
                </Link>

                <Link 
                    to="/register" 
                    className='text-lg duration-300 border rounded-lg hover:bg-indigo-900 hover:text-indigo-50 border-indigo-900 px-8 py-2 my-2'
                    onClick={()=>setMenu(!menu)}
                >
                    register
                </Link>
            </div>
            :
            <div></div>
        }
    </div>
  )
}

export default Hamburger
