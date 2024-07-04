import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home, MessageSquare, FilePlus } from "lucide-react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/sidebar"; // Use the sidebar layout
import Index from "./pages/Index.jsx";
import Chat from "./pages/Chat.jsx"; // Import the Chat page
import IntakeForm from "./pages/IntakeForm.jsx"; // Import the IntakeForm page

const queryClient = new QueryClient();

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <Home className="h-5 w-5" />,
  },
  {
    title: "Intake Form",
    to: "/intake-form",
    icon: <FilePlus className="h-5 w-5" />,
  },
  {
    title: "Chat",
    to: "/chat",
    icon: <MessageSquare className="h-5 w-5" />,
  },
];

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index />} />
              <Route path="chat" element={<Chat />} /> {/* Add the Chat route */}
              <Route path="intake-form" element={<IntakeForm />} /> {/* Add the IntakeForm route */}
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;