import React, {useState} from "react";
import ItemCard from "./ItemCard";


function Items({items, setCart, cart}){
    const [searchWord, setSearchWord] = useState("")
    const [category, setCategory] = useState("name")
    const [isAlphaBetized, setIsAlphaBetized] = useState(false)

    function sortItems(){
        const newItems = [...items]

        return newItems.sort((a,b) => { 
            const nameA = a.name.toUpperCase() 
            const nameB = b.name.toUpperCase() 
            if (nameA < nameB) {
            return -1
            }
            if (nameA > nameB) {
            return 1
            }
    
            return 0;
        })

    }

    const sortedItems = isAlphaBetized ? sortItems() : items

    const mappedItems = sortedItems.map((item) => {

        if(item[category].toLowerCase().includes(searchWord.toLowerCase())){
            return <ItemCard key={item.id} item={item} setCart={setCart} cart={cart}/>
        }

        return null
    })



    return (
        <div>
            <h1>Items</h1>
            <input value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="name">Name</option>
                <option value="description">Description</option>
                <option value="price">Price</option>
            </select>
            <label>Alphabetize</label>
            <input type="checkbox" checked={isAlphaBetized}  onChange={(e) => setIsAlphaBetized(e.target.checked)}/>
            {mappedItems}
        </div>
    )
}

export default Items;