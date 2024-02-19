import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Index from './frontEnd'
import Dashboard from './frontEnd/dashboard/dashboard'
import RecipeDetails from './frontEnd/dashboard/components/recipeDetails'

function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index/>}>
            <Route index element={<Dashboard />} />
            <Route path='/recipe' element={<RecipeDetails/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
