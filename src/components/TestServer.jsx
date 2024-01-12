"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
const TestServer = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/getUsers")
      .then((response) => setUsers(response.data))
      .catch((err) => console.log(err));
    console.log("hello", users.name);
  }, []);
  return (
    <div>
      <table className="w-100 h-96 bg-gray-700 text-white flex justify-center items-center py-20 my-10">
        <thead>
          <tr>
            <th>Name</th>
            <th>email</th>
            <th>age</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, i) => (
            <tr key={i}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestServer;
