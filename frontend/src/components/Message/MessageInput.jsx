import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { useMessageContext } from '../../context/messageContext';

const MessageInput = ({ userid, tkn }) => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const {messages,setMessages}=useMessageContext();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    setLoading(true);
    
    try {
      const response = await axios.post(`http://localhost:3001/api/v1/message/send/${userid}`, { message }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tkn}`
        }
      });
      console.log("Response from sendMessage:", response.data);
      setMessages([...messages,response.data]);
      console.log("after message:" ,messages)
      setMessage("");
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="post-comment">
      <form onSubmit={handleSubmit} className="flex items-center">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
          className="input text-white h-[26px] placeholder-white border-[1px] border-gray-300 border-solid bg-[#030712] rounded-md"
        />
        <button
          type="submit"
          className="flex ml-2 items-center justify-center p-2 bg-blue-500 cursor-pointer text-white rounded-r"
          disabled={loading}
        >
          {loading ? <div className='loading loading-spinner'></div> : <FontAwesomeIcon icon={faPaperPlane} />}
        </button>
      </form>
    </div>
  );
};

export default MessageInput;
