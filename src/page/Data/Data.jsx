import axios from "axios";
import React, { useState, useEffect } from "react";

const Data = () => {
  const [data, setData] = useState([]);
  const [errror, seterroer] = useState(null);
  useEffect(() => {
    const fechdate = async () => {
      try {
        const reponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(reponse.data);
      } catch (error) {
        seterroer("Failes to date ", error);
      }
    };
    fechdate();
    console.log(data);
  }, []);

  if (errror) return <h1>{errror}</h1>;

  return (
    <>
      <div className="">
        <div>
          <table>
            <thead>
              <tr>
                <th className="border border-gray-500">ID</th>
                <th className="border border-gray-500">USERID</th>
                <th className="border border-gray-500">Title</th>
                <th className="border border-gray-500">BODY</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id} className=" p-3">
                  <td className="border border-gray-500 p-3">{item.id}</td>
                  <td className="border border-gray-500 p-3">{item.userId}</td>
                  <td className="border border-gray-500 p-3">{item.title}</td>
                  <td className="border border-gray-500 p-3">{item.body}</td>
                </tr>
              ))}
            </tbody>
                
          </table>
        </div>
      </div>
    </>
  );
};

export default Data;
