/** @format */

import React, { useEffect, useState } from "react";
import Player from "./Player";
import "./slayerList.css";

function PlayerList(props) {
  let [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7735/api/players")
      .then((res) => res.json())
      .then((json) => {
        setPlayers(json);
      });
  }, []);
  return (
    <div>
      {players.map((item) => {
        return (
          <div className="player">
            <Player
              playerName={item.playerName}
              level={item.level}
              job={item.job}
              exp={item.exp}
            ></Player>
          </div>
        );
      })}
    </div>
  );
}

export default PlayerList;
