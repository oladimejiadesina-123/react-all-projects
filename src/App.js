import React, { Component } from 'react'
// import Side from './components/Side' //lecture 1
import Post from './redux/Post'    //lecture 2
// import './App.css'
// import PostForm from './redux/PostForm'

import TotalBuild from './pages/TotalBuild'

export default function App() {

  return (
    <div className="App">
      {/* <Side/> */}
      {/* <PostForm/>
      <hr/>
      <Post/> */}
      
     <TotalBuild />

    </div>
  )
}
