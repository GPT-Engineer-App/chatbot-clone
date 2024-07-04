import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mic, Volume2 } from "lucide-react"; // Import icons for voice interaction

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: "user" }, { text: input, sender: "bot" }]);
      setInput("");
    }
  };

  const handleSpeechToText = () => {
    // Implement speech-to-text functionality
    setIsListening(!isListening);
  };

  const handleTextToSpeech = (text) => {
    // Implement text-to-speech functionality
    setIsSpeaking(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.onend = () => setIsSpeaking(false);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className="flex flex-col h-full">
      <header className="p-4 border-b">
        <h1 className="text-xl">Claude AI Chatbot</h1>
      </header>
      <main className="flex-grow p-4 overflow-auto">
        <div className="space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`p-2 rounded ${message.sender === "user" ? "bg-blue-100 text-right" : "bg-gray-100 text-left"}`}
              onClick={() => handleTextToSpeech(message.text)} // Add click handler for text-to-speech
            >
              {message.text}
            </div>
          ))}
        </div>
      </main>
      <footer className="p-4 border-t flex items-center space-x-2">
        <Button variant="outline" onClick={handleSpeechToText} disabled={isListening}>
          <Mic className="h-4 w-4" />
        </Button>
        <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type your message..." className="flex-grow" />
        <Button onClick={handleSend}>Send</Button>
      </footer>
    </div>
  );
};

export default Chat;