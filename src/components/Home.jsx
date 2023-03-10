import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className='Home'>
        <h1>Welcome</h1>
        <p>Welcome come my children. Come one come all!!!</p>
        <Link to={"/posts"}>Posts</Link>
    </div>
  )
}

export default Home