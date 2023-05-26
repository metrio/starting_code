import React, {useState} from "react";


function ItemForm({handleAddItem}){
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: ""
    })

    function handleChange(e){
        const keyName = e.target.name
        const value = e.target.value
        setFormData(
            {...formData,
            [keyName]: value}
        )
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then((r) => r.json())
        .then((newItem) => {
            handleAddItem(newItem)
        })
    }

    
    return(
        <form onSubmit={handleSubmit}>
            <h1>Item Form</h1>
            <input  name="name" value={formData.name} onChange={handleChange}/>
            <input name="description" value={formData.description} onChange={handleChange}/>
            <input name="price" value={formData.price} onChange={handleChange}/>
            <button type="submit">Add Item</button>
        </form>
    )
}

export default ItemForm;