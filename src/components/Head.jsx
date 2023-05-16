import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { useSelector } from "react-redux";
import { cacheResults } from "../utils/searchSlince";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const [searchIt, setSearchIt] = useState("");
  const [loggedIn, setLoggedIn] = useState(true);
  const [searching, setSearching] = useState("");
  const [putSearching, setPutSearching] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const searchCache = useSelector((store) => store.search);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searching]) {
        setShowSearch(searchCache[searching]);
      } else {
        getSearch();
      }
    }, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [searching]);

  const getSearch = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searching);
    const json = await data.json();
    setPutSearching(json[1]);
    dispatch(cacheResults({ [searching]: json[1] }));
  };

  return (
    <div className="grid grid-flow-col px-5 py-6 h-20 shadow-lg sticky top-0 bg-gray-600">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 mx-2 bg-gray-400"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToUAsdwrOoNLj_v7woMosdnVLwH2UK7sdR6nSDsHk&s"
        ></img>
        <a href="/">
          <img
            className="h-8"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/1024px-YouTube_full-color_icon_%282017%29.svg.png"
            alt="youtube-logo"
          ></img>
        </a>
      </div>
      <div className="col-span-10">
        <input
          onFocus={() => setShowSearch(true)}
          onBlur={() => setShowSearch(true)}
          className="w-1/2 border border-gray-500 p-2 rounded-l-full"
          value={searching}
          onChange={(e) => {
            setSearching(e.target.value);
          }}
          type="text"
        ></input>
        <button className="border border-gray-600 bg-gray-100 p-2 rounded-r-full font-bold">
          Search
        </button>
        {showSearch && (
          <div className="fixed bg-white w-[37rem] p-2 m-5">
            <ul>
              {putSearching.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        {loggedIn ? (
          <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
            alt="user-icon"
          ></img>
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVl1VSMVth4VoVQu17lhirQ2in-cmTSdC1Rg&usqp=CAU"
            className="h-10"
          ></img>
        )}
      </div>
    </div>
  );
};

export default Head;
