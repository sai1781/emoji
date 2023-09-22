import emojiList from "../emojiList";
import { useEffect, useState } from "react";
import EmojiContainer from "./EmojiContainer";
// import React from "react";

function Main() {
  const [list, setList] = useState(emojiList);
  const [keyword, setKeyword] = useState("");

  const typed = (e) => {
    const value = e.target.value;
    setKeyword(value);
  };

  useEffect(
    (_) => {
      const filterList = emojiList.filter((singleEmoji) => {
        if (singleEmoji.emoji === keyword) {
          return true;
        }
        if (singleEmoji.description.startsWith(keyword)) {
          return true;
        }
        if (singleEmoji.category.startsWith(keyword)) {
          return true;
        }
        if (singleEmoji.aliases.some((e) => e.startsWith(keyword))) {
          return true;
        }

        return false;
      });
      setList(filterList);
    },
    [keyword]
  );

  return (
    <main className="search">
      <div>
        <input type="text" placeholder="search 🔎" onKeyUp={typed}></input>
        {keyword === "" ? false : <h3> Result for - {keyword} </h3>}
      </div>

      <hr />
      {list.length === 0 ? (
        <h3 className="no-result">No Emoji Found 😲</h3>
      ) : (
        <EmojiContainer list={list} />
      )}
    </main>
  );
}

export default Main;
