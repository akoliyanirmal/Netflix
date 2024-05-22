import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzFiZjdkMGZiYjViNTUyNjhmNzQ5MTBhY2JmMDBmZiIsInN1YiI6IjY2NGQ2YWZiNDZiZWEwMmEyNGIwZDY1MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jD_BGhBLu0kWyN0gsZm8qs9cmPQ9HpaTgTOewgzwtC0",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <div className="player">
        <img
          src={back_arrow_icon}
          alt=""
          onClick={() => {
            navigate(-2);
          }}
        />
        <iframe
          src={`https://www.youtube.com/embed/${apiData.key}`}
          width="90%"
          height="90%"
          title="Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <div className="player-info">
          <p>{apiData.published_at.slice(0, 10)}</p>
          <p>{apiData.name}</p>
          <p>{apiData.type}</p>
        </div>
      </div>
    </>
  );
};

export default Player;
