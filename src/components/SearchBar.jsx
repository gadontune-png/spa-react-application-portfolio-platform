function SearchBar({ searchTerm, setSearchTerm }) {

  return (
    <div className="search-container">

      <input
      className="search-input"
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

    </div>
  );
}

export default SearchBar;