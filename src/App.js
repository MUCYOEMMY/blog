import './App.css';
import Home from './Page/home';
import { Layout } from './Components/Layout';
import {Route, Routes} from 'react-router-dom'
import LoginPage from './Page/LoginPage';
import Dashbord from './Page/Dashbord'
import { RegisterPage } from './Page/RegisterPage';
import CreateBlog from './Page/CreateBlog'
import SingleBlog from './Page/SingleBlog'


function App() {
  return (
      <div className="w-screen py-2 px-3 xs:py-2 xs:px-3 sm:py-3 sm:px-6 lg:py-4 lg:px-10 xl:py-4 xl:px-12 mb-12 bg-white">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={'/Login'} element={<LoginPage/>}/>
            <Route path={'/Register'} element={<RegisterPage/>}/>
            <Route path={'/home'} element={<Home/>}/>
            <Route path={'/Dashbord'} element={<Dashbord/>}/>
            <Route path={'/blogCreate'} element={<CreateBlog/>}/>
            <Route path={'/SingleBlog'} element={<SingleBlog/>}/>
          </Route>
        </Routes>
      </div>
  );
}

export default App;
