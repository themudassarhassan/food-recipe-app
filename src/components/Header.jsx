export function Header({onSearchTextChange, searchText}) {
  return (
    <header className="flex justify-center pt-10">
      <form onSubmit={onSearchTextChange}>
        <input
          defaultValue={searchText}
          placeholder="Type recipe name"
          type="text"
          name="searchInput"
          className="border-indigo-500 rounded border-2 py-1 px-2"
        />
        <button
          type="submit"
          className="bg-indigo-900 rounded text-white	px-4 py-2 ml-2"
        >
          Search
        </button>
      </form>
    </header>
  );
}
