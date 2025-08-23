import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:8080", { withCredentials: true });

const ChatRoom = () => {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Auto-login check
  useEffect(() => {
    fetch("http://localhost:8080/me", { credentials: "include" })
      .then((res) => {
        if (res.status === 401) {
          setLoggedIn(false);
          return null;
        }
        return res.json();
      })
      .then((data) => {
        if (data?.name) {
          setUsername(data.name);
          setLoggedIn(true);
        }
      })
      .catch(() => setLoggedIn(false));
  }, []);

  useEffect(() => {
    if (loggedIn) {
      fetch("http://localhost:8080/messages", { credentials: "include" })
        .then((res) => res.json())
        .then((data) => setMessages(data))
        .catch((err) => console.error("Error fetching messages:", err));
    }
  }, [loggedIn]);

  const handleSend = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const msgData = {
        user: username,
        text: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, msgData]);
      socket.emit("send_message", msgData);
      setMessage("");
    }
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    return () => socket.off("receive_message");
  }, []);

  if (!loggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <p className="text-gray-700">Please log in to join the chat.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-lg flex flex-col h-[80vh]">
        <div className="px-4 py-3 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Welcome, {username} 👋</h2>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`max-w-[70%] px-3 py-2 rounded-lg text-sm shadow ${
                msg.user === username
                  ? "bg-blue-500 text-white self-end ml-auto"
                  : "bg-gray-200 text-gray-800 self-start mr-auto"
              }`}
            >
              <span className="font-semibold">{msg.user}</span>{" "}
              <span className="text-xs opacity-80">({msg.time})</span>
              <div>{msg.text}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSend} className="flex p-3 border-t border-gray-200 gap-2">
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatRoom;
