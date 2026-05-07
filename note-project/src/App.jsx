import React, { useState } from "react";

const App = () => {
  localStorage.setItem("user", "Ronaldo");

  const player = {
    name: "Messi",
    age: 19,
  };
  localStorage.setItem("player", JSON.stringify(player));

  const fetchedPlayer = JSON.parse(localStorage.getItem("player"));
  console.log("player", player);

  const user = localStorage.getItem("user");
  console.log("User", user);

  const [title, settitle] = useState("");
  const [details, setdetails] = useState("");
  const handleSubmit = (e) => {
    // console.log("Notes", "title:", title, "details:", details);
    e.preventDefault();
    setnotes([...notes, { title: title, details: details }]);
    settitle("");
    setdetails("");
    notes.map((note) => {
      console.log(note);
    });
  };

  function deleteNotes(index) {
    const newNotes = notes.filter((item, i) => {
      return i !== index;
    });
    setnotes(newNotes);
  }

  const [notes, setnotes] = useState([]);

  return (
    <div>
      <div className="flex h-full w-full">
        <div className=" flex justify-center w-1/2 px-10 py-10 h-full">
          <form
            className="w-full"
            onSubmit={function (e) {
              handleSubmit(e);
            }}
          >
            <div className="flex flex-col gap-0.5 w-full">
              <input
                className="text-white border-2 px-5 h-10 w-full rounded-md outline-none"
                type="text"
                placeholder="Enter notes heading"
                value={title}
                onChange={(e) => {
                  settitle(e.target.value);
                  // console.log(title);
                }}
              />
              <br />
              <textarea
                className="text-white border-2 px-5 h-30 w-full rounded-md outline-none "
                type="text"
                placeholder="Write details"
                value={details}
                onChange={(e) => {
                  setdetails(e.target.value);
                }}
              />
              <br />
              <button className="text-black bg-white  px-1 py-2 w-full rounded-md outline-none ">
                Add Note
              </button>
            </div>
          </form>
        </div>
        <div className="h-full w-1/2">
          <h1 className="text-white text-3xl py-5">Recent Notes</h1>
          <div className="flex flex-wrap gap-7 justify-start items-start m-5 overflow-y-auto h-[80vh]">
            {notes.length == 0 ? (
              <div className="text-white">No notes added till now</div>
            ) : (
              notes.map((note, index) => {
                return (
                  <div className=" relative h-40 w-40 rounded-xl p-8 overflow-scroll bg-white bg-cover bg-[url('https://www.nicepng.com/png/detail/67-679001_notes-document-notepad-office-reminder-sticky-note-paper.png')]">
                    <p className="text-xl"> {note.title}</p>
                    <p className="text-gray-500">{note.details}</p>
                    <button
                      onClick={() => {
                        deleteNotes(index);
                      }}
                      className="bg-red-500 absolute bottom-2 left-0 right-0 text-white mx-6 rounded active:scale-95"
                    >
                      Delete
                    </button>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
