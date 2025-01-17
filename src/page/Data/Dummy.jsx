import React, { useEffect, useState } from "react";
import axios from "axios";
const Dummy = () => {
  const [udata, setData] = useState([]);
  const [Loding, setLoding] = useState(true);
  const [Erroer, seterroer] = useState(null);

  useEffect(() => {
    async function featchdata() {
      try {
        const reponse = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(reponse.data);

        setData(reponse.data);

        setLoding(false);
      } catch (error) {
        seterroer("Api is not found....".error);

        setLoding(false);
      }
    }
    featchdata();
  }, []);
  if (Loding) return <p>Loding....</p>;
  if (Erroer) return <p>{Erroer}</p>;

  return (
    <>
      <div>
        <div>
          {udata.map((x) => (
            <div key={x.id}>
              <div className=" ml-6">Id :{x.id}</div>
              <div className=" ml-6">UserId :{x.userId}</div>
              <div className=" ml-6">UserId :{x.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dummy;
