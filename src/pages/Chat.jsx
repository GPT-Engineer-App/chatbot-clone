import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }, { text: input, sender: "bot" }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 border-b">
        <h1 className="text-xl">Claude AI Chatbot</h1>
      </header>
      <main className="flex-grow p-4 overflow-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div key={index} className={`p-2 rounded ${message.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}>
              {message.text}
            </div>
          ))}
        </div>
      </main>
      <footer className="p-4 border-t flex items-center space-x-2">
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-grow" />
        <Button onClick={handleSend}>Send</Button>
      </footer>
    </div>
  );
};

export default Chat;