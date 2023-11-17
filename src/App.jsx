import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Create from './components/users/Create.jsx';
import Index from './components/users/Index.jsx';
import Details from './components/users/Details.jsx';
export default function App(){
 
  return(
    <Routes>
       <Route path='/' element={<Index/>}/>
      <Route path='/user/index' element={<Index/>}/>
      <Route path='/user/create' element={<Create/>}/>
      <Route path='*' element={<h2>user not found</h2>}/>
      <Route path='/user/:id' element={<Details/>}/>
    </Routes>
  )


}