import React, { useState, useEffect } from 'react';
import ContactCard from "./components/ContactCard";
import './App.css';

const App = () => {
  // const contacts = [
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Jenny Han",
  //     email: "jenny@gmail.com",
  //     age: 25
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Paul Han",
  //     email: "paul@gmail.com",
  //     age: 33
  //   },
  //   {
  //     avatarUrl: "https://via.placeholder.com/150",
  //     name: "Peter Han",
  //     email: "peter@gmail.com",
  //     age: 26
  //   },
  // ];

  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/?results=5")
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setResults(data.results);
      });
  }, [])




  return (
    <div>
      {results.map((result, index) => {
        return (
          <ContactCard
            key={index}
            avatarUrl={result.picture.large}
            name={result.name.first}
            email={result.email}
            age={result.dob.age}
          />
        )
      })}

    </div>

  );
}

export default App;
