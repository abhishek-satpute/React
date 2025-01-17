import React, { useState, useEffect } from "react";
import axios from "axios";

const Userdata = () => {
  const [udata, setData] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch xs from API
  useEffect(() => {
    const user = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        setCart(" Data not found", error);
      }
    };
    user();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User data</h1>

      {/* x List */}
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {udata.map((x) => (
          <div
            key={x.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg "
          >
            <h3 className="text-lg font-medium">ID: {x.id}</h3>
            <h3 className="text-lg font-medium">Name:{x.name}</h3>
            <h3 className="text-lg font-medium">UserName:{x.username}</h3>
            <h3 className="text-lg font-medium">Email:{x.email}</h3>
            <h3 className="text-lg font-medium">Address:{x.address.city}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userdata;
