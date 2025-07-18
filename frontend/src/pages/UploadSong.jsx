import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { redirect } from "react-router-dom";
import { SidebarContext } from "../Context/SibebarContext";
import { useNavigate } from "react-router-dom";
import { SongContext } from "../Context/SongContext";
const UploadSong = () => {
  const navigate = useNavigate();
  // we are using this to close the sidebar when we land on this page
  const { showMenu, setShowMenu } = useContext(SidebarContext);
  const {__URL__} = useContext(SongContext)
  useEffect(() => {
    if (showMenu) setShowMenu(false);
  }, []);

  // we are using this to upload the file
  const [file, setFile] = useState();
  const [title, setTitle] = useState();
  const [artist, setArtist] = useState();
  const [album, setAlbum] = useState();
  const [description, setDescription] = useState();

  // we are using this to handle the file change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // we are using this to handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("title", title);
    formData.append("artist", artist);
    formData.append("album", album);
    formData.append("description", description);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        "x-auth-token": localStorage.getItem("access_token"),
      },
    };
    const result = await axios.post(
      `${__URL__}/api/v1/song/upload`,
      formData,
      config
    );

    // if the file is uploaded successfully, we will redirect the user to the home page with alert message
    if (result.status === 201) {
      alert("File uploaded successfully");
      navigate("/explore");
    }
  };

  return (
    <div className="flex flex-col min-h-screen justify-center items-center bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 py-10 px-2 lg:px-0 relative overflow-hidden">
      {/* More musical, lively emoji background - evenly spread in a grid-like pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none select-none z-0">
        {/* Corners */}
        <div className="absolute top-8 left-8 text-[6rem] rotate-6 drop-shadow-lg">🎵</div>
        <div className="absolute top-8 right-8 text-[6rem] -rotate-6 drop-shadow-lg">🎶</div>
        <div className="absolute bottom-8 left-8 text-[6rem] rotate-12 drop-shadow-lg">🎧</div>
        <div className="absolute bottom-8 right-8 text-[6rem] -rotate-12 drop-shadow-lg">🎷</div>
        {/* Edges */}
        <div className="absolute top-1/2 left-8 text-[5rem] rotate-3 drop-shadow-lg">🎸</div>
        <div className="absolute top-1/2 right-8 text-[5rem] -rotate-3 drop-shadow-lg">🎤</div>
        <div className="absolute top-8 left-1/2 text-[4rem] rotate-2 drop-shadow-lg">🥁</div>
        <div className="absolute bottom-8 left-1/2 text-[4rem] -rotate-2 drop-shadow-lg">🎺</div>
        <div className="absolute top-1/4 left-8 text-[4rem] rotate-8 drop-shadow-lg">🎹</div>
        <div className="absolute top-1/4 right-8 text-[4rem] -rotate-8 drop-shadow-lg">🎼</div>
        <div className="absolute bottom-1/4 left-8 text-[4rem] rotate-10 drop-shadow-lg">🎤</div>
        <div className="absolute bottom-1/4 right-8 text-[4rem] -rotate-10 drop-shadow-lg">🎸</div>
        {/* Center-ish */}
        <div className="absolute top-1/3 left-1/3 text-[3rem] rotate-4 drop-shadow-lg">🎶</div>
        <div className="absolute top-1/3 right-1/3 text-[3rem] -rotate-4 drop-shadow-lg">🎧</div>
        <div className="absolute bottom-1/3 left-1/3 text-[3rem] rotate-5 drop-shadow-lg">🎷</div>
        <div className="absolute bottom-1/3 right-1/3 text-[3rem] -rotate-5 drop-shadow-lg">🥁</div>
      </div>
      <div className="w-full max-w-xl bg-gray-900/90 rounded-2xl shadow-2xl p-8 lg:p-12 flex flex-col items-center border border-gray-800 z-10">
        <h1 className="text-3xl font-extrabold text-center lg:text-4xl text-gray-100 mb-8 drop-shadow-lg">Upload Song</h1>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="w-full flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="px-2 text-lg text-gray-200" htmlFor="title">
              Title
            </label>
            <input
              type="text"
              name="title"
              className="px-5 py-2 text-base bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter the title name"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-2 text-lg text-gray-200" htmlFor="description">
              Description
            </label>
            <input
              type="text"
              name="description"
              className="px-5 py-2 text-base bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter the description"
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-2 text-lg text-gray-200" htmlFor="artist">
              Artist
            </label>
            <input
              type="text"
              name="artist"
              className="px-5 py-2 text-base bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter the artist name"
              onChange={(e) => setArtist(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-2 text-lg text-gray-200" htmlFor="album">
              Cover Album
            </label>
            <input
              type="text"
              name="album"
              className="px-5 py-2 text-base bg-gray-800 border border-gray-700 rounded-md text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-600"
              placeholder="Enter the album name"
              onChange={(e) => setAlbum(e.target.value)}
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-2 text-lg text-gray-200" htmlFor="audioFile">Audio File</label>
            <input
              onChange={handleFileChange}
              type="file"
              name="file"
              accept="audio/*"
              className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gray-700 file:text-gray-200 hover:file:bg-gray-600 bg-gray-800 rounded-md text-gray-100 focus:outline-none"
              required
            />
          </div>
          <button
            className="bg-gray-800 hover:bg-black text-gray-100 text-lg font-bold py-2 rounded-xl w-full shadow-lg transition-all duration-200 mt-4 border border-gray-700"
            type="submit"
            disabled={localStorage.getItem("access_token") ? false : true}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadSong;
