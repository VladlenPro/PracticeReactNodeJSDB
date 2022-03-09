/** @format */

import React from "react";

function Player(props) {
  return (
    <div>
      <p>{props.playerName}</p>
      <p>{props.level}</p>
      <p>{props.job}</p>
      <p>{props.exp}</p>
    </div>
  );
}

export default Player;
