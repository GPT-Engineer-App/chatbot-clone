import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-3xl mb-4">Welcome to Claude AI Chatbot Clone</h1>
      <p className="mb-6">Experience the power of AI-driven conversations with our Claude AI Chatbot clone.</p>
      <Button onClick={() => navigate("/chat")}>Start Chatting</Button>
    </div>
  );
};

export default Index;