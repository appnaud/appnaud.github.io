import { Outlet, Link } from "react-router-dom";
import {useState, useEffect } from 'react'


function Blog(){
  const [menu,setMenu] = useState([])
  
  return (
    <>
      <aside className="Menu">
        <Link to="/">Home</Link>
        {menu.map((cat)=><Link to={`/blog/${cat}`}>{cat}</Link>)}
      </aside>
      <main><Outlet/></main>
    </>
  )
}

export default Blog;