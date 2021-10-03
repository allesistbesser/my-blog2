import './App.css';
import AppRouter from './router/AppRouter';
import { BlogContext } from "./context/BlogContext"
import { useState } from 'react';
import { ToastContainer } from "react-toastify";
import { useFetch } from './utils/Functions';



function App() {
  const [date, setDate] = useState(Date().slice(4, 21));
  const {info} = useFetch(); 
  const [loginInfo, setloginInfo] = useState([{ email: "", password: "" }])
  const [islogin, setislogin] = useState(false)
  const [BlogItem, setBlogItem] = useState()
 
  return (
    <div >
      <BlogContext.Provider value={{ info, setloginInfo, loginInfo, islogin, setislogin,BlogItem, setBlogItem, date , setDate}}>

        <AppRouter />

      </BlogContext.Provider>
      <ToastContainer />
    </div>
  );
}

export default App;
