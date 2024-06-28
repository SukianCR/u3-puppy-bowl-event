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

// // Import the generated hook from our RTK Query API slice
// //import { useGetUsersQuery } from "../api/puppyBowlApi";
// import { useGetUsersQuery } from "../api/puppyBowlApi";

// // Import the CSS styles for this component

// // Define a new React component
// export default Players = () => {
//   // Use the generated hook to fetch data from the API
//   // When the component is first rendered, it will start the API fetch
//   // It will re-render each time the fetch status changes (e.g., "loading", "data arrived", "error")
//   const { data = {}, error, isLoading } = useFetchPlayersQuery();

//   // Show a loading message while data is being fetched
//   if (isLoading) {
//   }

//   // Show an error message if the fetch failed
//   if (error) {
//   }

//   // Show the fetched data after it has arrived
//   return (
//     <div className="players">
//       {/* Map through the data array and generate a div for each player */}
//       {data.data.players.map((player) => (
//         // Use the player's ID as the key for this div
//         <div key={player.id} className="player-card">
//           {/* Display the player's image, with the player's name as alt text */}

//           <div className="player-details">
//             <h2> {/* Display the player's name */} </h2>

//             <p> {/* Display the player's breed */} </p>

//             <p> {/* Display the player's status */} </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// Export the component so it can be imported and used in other files
