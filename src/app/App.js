import React, { useEffect, useState } from "react";
import About from "../components/About";
import SignUp from "../components/SignUp";
import Articles from "../components/Articles";
import Article from "../components/Article";
import Categories from "../components/Categories";
import Category from "../components/Category";
import Author from "../components/Author";
import Profile from "../components/Profile";
import EditProfileForm from "../components/EditProfileForm";
import Root from "../components/Root";
import "./App.css";
import { RouterProvider, Routes, Route, createBrowserRouter } from 'react-router-dom';
import Items from "../components/Items";
import ItemForm from "../components/ItemForm";





// const router = createBrowserRouter();
  
/* <RouterProvider router={router} /> */

function App() {
  const [items, setItems] = useState([])
  
  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((r) => r.json())
    .then(fetchedItems => setItems(fetchedItems))
  },[])

  function handleAddItem(newItem){
    setItems([...items, newItem])
  }

  /**
   * 1. Created a Component called Items, need props of items: 
   *    a. Mapped over the items and displayed them 
   * 
   * 2. Created a Form that will add news items to our state when we submit the new item
   *    a. State to keep track of the data from the form
   *    b. Callback function to add the new item to the original state
   * 
   */

  return (
    <>
    <Routes>
      <Route path="/" element={
        <Items items={items}/>
        } />
        <Route path="/newItem" element={
          <ItemForm handleAddItem={handleAddItem}/>
        }/>
    </Routes>

      
      
    </>
  );
}

export default App;
