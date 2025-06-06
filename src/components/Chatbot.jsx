import { useState } from "react";
import { Bot } from "lucide-react";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
    const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today? 🙂", sender: "bot" },
  ]);

  const getBotReply = (message) => {
    message = message.toLowerCase();
    if (message.includes("price")) return "Prices are listed on each product page.";
    if (message.includes("dog")) return "We love dogs! 🐾 Let me know what you're looking for.";
    if (message.includes("shipping")) return "We offer free shipping over ₹500!";
    if (message.includes("hello") || message.includes("hi")) return "Hello! 👋 How can I assist you today?";
    if (message.includes("order") || message.includes("how i can order products")) return "Add the products to the card and checkout";
    return "Sorry, I'm still learning. Try asking something else!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    const botReply = { text: getBotReply(input), sender: "bot" };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chatbot button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 p-3 bg-yellow-400 hover:bg-yellow-300 text-pink-500 rounded-full shadow-lg transition-all"
        title="Chat with us"
      >
        <Bot className="w-6 h-6" />
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-72 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          <div className="bg-pink-500 text-white text-sm font-semibold px-4 py-2">
            Chat with Us
          </div>
          <div className="flex-1 p-4 text-sm overflow-y-auto space-y-2">
            {/* <p className="text-yellow-600 mb-2">Hi! How can I help you today? 🙂</p> */}
            {/* Simulated response/chat */}
             {messages.map((msg, index) => (
              <div
                key={index}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "ml-auto bg-pink-300 text-right"
                    : "bg-pink-200"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="p-2 border-t flex gap-2">
            <input
              type="text"
              className="w-full px-3 py-1 text-sm border border-pink-300 rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Type your message..."
               value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button
              onClick={handleSend}
              className="bg-pink-500 text-white px-3 py-1 rounded-full hover:bg-yellow-500 text-sm"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
