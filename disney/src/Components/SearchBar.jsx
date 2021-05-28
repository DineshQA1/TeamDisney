
const SearchBar = (props) => {
    const { query, queryFunction } = props;
    return (
    <>
        <label>Search:</label>
        <input
            type="text"
            name="q"
            id="q"
            value={query}
            onChange={queryFunction}
        />
    </>
    )
}

export default SearchBar;