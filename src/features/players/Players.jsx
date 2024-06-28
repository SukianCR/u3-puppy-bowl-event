// Import the React library
import React from "react";

import { useGetUsersQuery } from "../../api/playersApi";
import { useEffect, useState } from "react";

export default function Players() {
  const [players, setPlayers] = useState([]);
  const { data, isSuccess } = useGetUsersQuery();

  //console.log("aqui viene la data " + data);
  useEffect(() => {
    if (isSuccess) {
      const result = JSON.parse(data);

      // setPlayers(result.data.players);
      console.log(result.data.players);
      setPlayers(result.data.players);
      console.log(players);

      //console.log("viene players:" + players);
    }
  }, [isSuccess]);
  // }, [isSuccess]);

  return (
    <div className="players">
      {isSuccess &&
        players.map((player) => {
          return (
            <div key={player.id} className="player-card">
              <img
                src={player.imageUrl}
                alt={player.name}
                className="player-image"
              />
              <div className="player-details">
                <p className="nameSh">{player.name}</p>
                <p>{player.breed}</p>
                <p>{player.status}</p>
              </div>
            </div>
          );
        })}
    </div>
  );
}
