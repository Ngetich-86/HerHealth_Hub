import React, { useState } from 'react';
import Navbar from '../components/homePage/Navbar';
import Footer from '../components/homePage/Footer';
import { APIDomain } from '../Utils/APIDomain';

const Chatbot: React.FC = () => {
  const [userInput, setUserInput] = useState<string>('');
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot'; message: string }[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    const message = userInput;
    if (!message) return;

    setUserInput('');
    setChatHistory((prevHistory) => [...prevHistory, { sender: 'user', message }]);

    setLoading(true);

    try {
      const response = await fetch(`${APIDomain}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userInput: message }),
      });

      const data = await response.json();
      const botMessage = data.response;

      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'bot', message: botMessage },
      ]);
    } catch (error) {
      console.error('Error:', error);
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: 'bot', message: 'Something went wrong, please try again!' },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <div className="bg-white p-5 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-center text-2xl font-bold mb-4 text-black">HealthHer🤹‍♀️ Chatbot</h1>

        <div
          id="chat-history"
          className="overflow-y-scroll max-h-72 mb-4 p-2 border border-gray-900 rounded-lg text-black"
        >
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`p-2 mb-2 rounded-lg ${
                chat.sender === 'user'
                  ? 'bg-gray-100 text-right'
                  : 'bg-green-100 text-left'
              }`}
            >
              {chat.message}
            </div>
          ))}
        </div>

        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            id="user-input"
            placeholder="Enter your message"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            className="input input-bordered w-full mr-2"
          />
          <button
            type="submit"
            className="btn btn-primary "
            disabled={loading} // Disable the button when loading
          >
            Send
          </button>
        </form>

        {loading && (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <h1>Loading..........</h1>
          </div>
        )}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Chatbot;
