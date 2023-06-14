import React, {useState} from "react";
import ItemCard from "./ItemCard";
import SearchBar from "./SearchBar";


function Items({items, setCart, cart}){
    const [searchWord, setSearchWord] = useState("")
    const [category, setCategory] = useState("name")
    const [isAlphaBetized, setIsAlphaBetized] = useState(false)

    const mappedItems = items.map((item) => {
        return <ItemCard key={item.id} item={item} setCart={setCart} cart={cart} />
    })

    return (
        <div>
            <h1>Items</h1>
            <SearchBar 
                searchWord={searchWord} setSearchWord={setSearchWord}
                category={category} setCategory={setCategory}
                isAlphaBetized={isAlphaBetized} setIsAlphaBetized={setIsAlphaBetized}
            />
            {mappedItems}
        </div>
    )
}

export default Items;

 // function sortItems(){
    //     const newItems = [...items]

    //     return newItems.sort((a,b) => { 
    //         const nameA = a.name.toUpperCase() 
    //         const nameB = b.name.toUpperCase() 
    //         if (nameA < nameB) {
    //         return -1
    //         }
    //         if (nameA > nameB) {
    //         return 1
    //         }
    
    //         return 0;
    //     })

    // }

    // const sortedItems = isAlphaBetized ? sortItems() : items

    // const mappedItems = sortedItems.map((item) => {

    //     if(item[category].toLowerCase().includes(searchWord.toLowerCase())){
    //         return <ItemCard key={item.id} item={item} setCart={setCart} cart={cart}/>
    //     }

    //     return null
    // })
