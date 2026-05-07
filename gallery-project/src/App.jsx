import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setUserData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${page}&limit=30`,
    );
    console.log(response.data);
    setUserData(response.data);
  };

  const [page, setPage] = useState(1);

  useEffect(
    function () {
      getData();
    },
    [page],
  );

  return (
    <div className="text-white bg-black h-screen w-full overflow-x-auto">
      {/* <button onClick={getData} className="bg-blue-500 px-3 py-1">
        Get data
      </button> */}
      <div className="flex flex-wrap gap-5 justify-center p-10">
        {userData.length == 0 ? (
          <div>Loading....</div>
        ) : (
          userData.map((elem, index) => {
            return (
              <a href={elem.url} target="_blank">
                <div className="rounded-2xl overflow-hidden object-cover">
                  <img className="h-50 w-50" src={elem.download_url} alt="" />
                  <div>
                    <h1 className="font-bold px-1">{elem.author}</h1>
                  </div>
                </div>
              </a>
            );
          })
        )}
      </div>
      <div className="flex justify-center gap-5 pb-5">
        <button
          onClick={() => {
            if (page > 1) {
              setUserData([]);
              setPage(page - 1);
            }
          }}
          className="bg-yellow-500 px-5 py-1 rounded text-black"
        >
          Prev
        </button>
        <h1>Page {page}</h1>
        <button
          onClick={() => {
            setUserData([]);
            setPage(page + 1);
          }}
          className="bg-yellow-500 px-5 py-1 rounded text-black"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
