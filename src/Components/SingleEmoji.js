import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { useEffect } from "react";

const SingleEmoji = ({ singleEmoji }) => {
  const [iscopied, setCopy] = useState(false);

  useEffect(
    (_) => {
      if (iscopied) {
        setTimeout((_) => {
          setCopy(false);
        }, 2500);
      }
    },
    [iscopied]
  );
  return (
    <CopyToClipboard text={singleEmoji.emoji} onCopy={(_) => setCopy(true)}>
      <div className={`item ${iscopied ? "copied" : ""}`}>
        <p className="emoji">{iscopied ? <span>✔</span> : singleEmoji.emoji}</p>

        <p className="description">
          {iscopied ? "Emoji-Copied" : singleEmoji.description}
        </p>
      </div>
    </CopyToClipboard>
  );
};

export default SingleEmoji;
