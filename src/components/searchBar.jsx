function SearchBar(){
  return (
      <form className="searchBar" method="get" action='/blog/search'>
        <input type="text" id="query" name="query"/>
        <button type="submit">🔍</button>
      </form>
  )
}

export default SearchBar;