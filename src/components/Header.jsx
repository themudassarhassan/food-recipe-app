import { useLocation, useHistory } from "react-router-dom";
export function Header({ onSearchTextChange, initialText }) {
  const location = useLocation();
  const history = useHistory();

  const shouldShowBackBtn = location.pathname.includes("/recipe");

  if (shouldShowBackBtn) {
    return (
      <div className="pt-10 px-28">
        <button
          className="bg-indigo-900 rounded text-white	px-4 py-2 ml-2"
          type="button"
          onClick={() => history.push("/")}
        >
          Go Back
        </button>
      </div>
    );
  }
  return (
    <header className="flex justify-center pt-10">
      <form onSubmit={onSearchTextChange}>
        <input
          defaultValue={initialText}
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
