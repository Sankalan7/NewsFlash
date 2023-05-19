import React from "react";

const FootballCard = ({ score }) => {
  return (
    <div className=" rounded overflow-hidden shadow-lg bg-white">
      <img className="w-full" src={score.thumbnailUrl} alt={score.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{score.title}</div>
        <a
          href={score.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block"
        >
          Watch it on YouTube
        </a>
      </div>
    </div>
  );
};

export default FootballCard;
