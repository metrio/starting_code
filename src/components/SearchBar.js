

function SearchBar({searchWord, category, isAlphaBetized, setSearchWord, setCategory, setIsAlphaBetized}){


    return(
        <>
         <input value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="name">Name</option>
                <option value="description">Description</option>
                <option value="price">Price</option>
                </select>
        <label>Alphabetize</label>
        <input type="checkbox" checked={isAlphaBetized}  onChange={(e) => setIsAlphaBetized(e.target.checked)}/>
        </>
    )
}

export default SearchBar;