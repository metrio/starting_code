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
import NavBar from "../components/NavBar";
import Cart from "../components/Cart";
import Counter from "../components/Counter";

// const router = createBrowserRouter();
  
/* <RouterProvider router={router} /> */

function App() {
  const [items, setItems] = useState([])
  const [cart, setCart] = useState([])

  
  useEffect(() => {
    fetch("http://localhost:3000/items")
    .then((r) => r.json())
    .then(fetchedItems => setItems(fetchedItems))
  },[])

  function handleAddItem(newItem){
    setItems([...items, newItem])
  }


  return (
    <>
    <NavBar cart={cart}/>
    <Routes>
      <Route path="/" element={
        <Items items={items} setCart={setCart} cart={cart} />
        } />
      <Route path="/newItem" element={
        <ItemForm handleAddItem={handleAddItem}/>
      }/>
      <Route path="/cart" element={<Cart cart={cart}/>} />
    </Routes>
    </>
  );
}

export default App;
