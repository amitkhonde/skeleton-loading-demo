import { useEffect, useState } from "react";

import "./styles.css";

import UserCard from "./UserCard";

export default function App() {
  // Adding 3 empty objects for showing user the shimmer
  const [users, setUsers] = useState([{}, {}, {}]);

  useEffect(() => {
    // Addind setTimeout to make sure shimmer is noticable
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((usersRes) => {
          const usersFromResponse = usersRes.map(({ name, email }, index) => ({
            name,
            email,
            profileUrl: `https://i.pravatar.cc/200?image=${index}`
          }));

          setUsers(usersFromResponse);
        });
    }, 2000);
  }, []);

  return (
    <div className="App">
      {users.map(({ name, email, profileUrl }, index) => {
        return (
          <UserCard
            key={index}
            name={name}
            email={email}
            profileUrl={profileUrl}
          />
        );
      })}
    </div>
  );
}
