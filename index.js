import React, { useState } from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaTshirt, FaMusic, FaEnvelope } from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const BirthdayInvitation = () => {
  const [showSongForm, setShowSongForm] = useState(false);
  const [showMessageForm, setShowMessageForm] = useState(false);
  const [song, setSong] = useState("");
  const [message, setMessage] = useState("");

  const eventDetails = {
    date: "Noviembre 17, 2024",
    place: "Jano's Eventos - Gral. Güemes 897, B1873 Crucecita, Provincia de Buenos Aires",
    dressCode: "Elegante",
    mapPosition: [-33.3190937, -60.2320488]
  };

  const handleSongSubmit = (e) => {
    e.preventDefault();
    console.log("Song added:", song);
    setShowSongForm(false);
  };

  const handleMessageSubmit = (e) => {
    e.preventDefault();
    console.log("Message added:", message);
    setShowMessageForm(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96 bg-cover bg-center" style={{backgroundImage: `horizontal1.jpg`}}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">15th Birthday Bash!</h1>
          </div>
        </div>

        <div className="p-6 sm:p-8 md:p-10 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <FaCalendarAlt className="text-2xl text-pink-500" />
              <p className="text-xl"><span className="font-semibold">Dia:</span> {eventDetails.date}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaMapMarkerAlt className="text-2xl text-pink-500" />
              <p className="text-xl"><span className="font-semibold">Lugar:</span> {eventDetails.place}</p>
            </div>
            <div className="flex items-center space-x-3">
              <FaTshirt className="text-2xl text-pink-500" />
              <p className="text-xl"><span className="font-semibold">Dress Code:</span> {eventDetails.dressCode}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setShowSongForm(true)}
              className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-opacity-50"
              aria-label="Play Song"
            >
              <FaMusic className="inline-block mr-2" /> Play Song
            </button>
            <button
              onClick={() => setShowMessageForm(true)}
              className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
              aria-label="Special Message"
            >
              <FaEnvelope className="inline-block mr-2" /> Special Message
            </button>
          </div>

          <div className="h-64 sm:h-80 rounded-lg overflow-hidden shadow-md">
            <MapContainer center={eventDetails.mapPosition} zoom={13} style={{ height: "100%", width: "100%" }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={eventDetails.mapPosition}>
                <Popup>Party Location!</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>

      {showSongForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add a Song to the Playlist</h2>
            <form onSubmit={handleSongSubmit} className="space-y-4">
              <input
                type="text"
                value={song}
                onChange={(e) => setSong(e.target.value)}
                placeholder="Enter song name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowSongForm(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
                >
                  Add Song
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showMessageForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add a Special Message</h2>
            <form onSubmit={handleMessageSubmit} className="space-y-4">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Enter your special message"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                required
              ></textarea>
              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowMessageForm(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  Add Message
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirthdayInvitation;
