import "./App.css";
import { useState } from "react";
import SearchButton from "./Components/SearchButton";
import MainPage from "./Components/MainPage";
function App() {
  const [showSearchPage, setShowSearchpage] = useState(false);
  const SearchHandler = () => {
    setShowSearchpage(!showSearchPage);
  }

  return (
    <div className="app">
      {showSearchPage ? (
        <SearchButton onSearchHandler={SearchHandler}/>
      ) : (
        <MainPage onSearchHandler={SearchHandler}/>
      )}
    </div>
  );
}

export default App;
