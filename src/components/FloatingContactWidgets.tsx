// src/components/FloatingContactWidgets.tsx
import React, { useState, useRef, useEffect } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Bot, 
  X, 
  Send, 
  Minimize2,
  Mail,
  Clock,
  MapPin,
  User
} from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const FloatingContactWidgets: React.FC = () => {
  const [chatbotOpen, setChatbotOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! Welcome to RIPL Industrial Solutions. How can I help you today?",
      sender: "bot",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState<string>('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Predefined bot responses
  const botResponses = {
    greetings: [
      "Hello! How can I assist you with your industrial solutions needs?",
      "Hi there! Welcome to RIPL Industrial Solutions. What can I help you with today?",
      "Good day! I'm here to help with any questions about our services."
    ],
    services: "We offer Industrial Insulation, Scaffolding, Painting & Blasting, Refractory Works, Fire Proofing, Mechanical Fabrication, Civil Works, and Electrical Works. Which service interests you?",
    products: "Our products include Phenolic Foam, PIR, PUR, XLPE, Cellular Glass, Calcium Silicate Insulation, Pre-insulated Ducts, and EIFS Systems. Would you like details about any specific product?",
    contact: "You can reach us at +91-9677208721 or email chris@refranox.com. We're here Monday to Saturday, 9 AM to 6 PM.",
    quote: "I'd be happy to help you get a quote! Please share your project details and requirements, and our team will get back to you within 24 hours.",
    default: "Thank you for your message! For detailed information, please contact our team at +91-9677208721 or chris@refranox.com. Our experts will be happy to assist you."
  };

  const generateBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return botResponses.greetings[Math.floor(Math.random() * botResponses.greetings.length)];
    } else if (message.includes('service') || message.includes('what do you do')) {
      return botResponses.services;
    } else if (message.includes('product') || message.includes('insulation') || message.includes('material')) {
      return botResponses.products;
    } else if (message.includes('contact') || message.includes('phone') || message.includes('call') || message.includes('reach')) {
      return botResponses.contact;
    } else if (message.includes('quote') || message.includes('price') || message.includes('cost') || message.includes('estimate')) {
      return botResponses.quote;
    } else {
      return botResponses.default;
    }
  };

  const handleSendMessage = (e: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>): void => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      const userMessage: Message = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, userMessage]);
      setInputMessage('');
      
      // Generate bot response after a short delay
      setTimeout(() => {
        const botMessage: Message = {
          id: messages.length + 2,
          text: generateBotResponse(inputMessage),
          sender: "bot",
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleWhatsAppClick = (): void => {
    const phoneNumber = "919677208721"; // Remove + and - from the number
    const message = encodeURIComponent("Hi, I'm interested in RIPL Industrial Solutions services. Please provide more information.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const handleCallClick = (): void => {
    window.open('tel:+919677208721', '_self');
  };

  const handleEmailClick = (): void => {
    window.open('mailto:chris@refranox.com?subject=Inquiry about RIPL Industrial Solutions', '_blank');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      handleSendMessage(e);
    }
  };

  return (
    <>
      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            WhatsApp Chat
          </span>
        </button>

        {/* Call Button */}
        <button
          onClick={handleCallClick}
          className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          title="Call Us"
        >
          <Phone className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            +91-9677208721
          </span>
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmailClick}
          className="bg-orange-500 hover:bg-orange-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
          title="Send Email"
        >
          <Mail className="h-6 w-6" />
          <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            chris@refranox.com
          </span>
        </button>
      </div>

      {/* Chatbot Button - Left Side */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setChatbotOpen(!chatbotOpen)}
          className="bg-purple-500 hover:bg-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group relative"
          title="Chat with AI Assistant"
        >
          {chatbotOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
          <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            AI Assistant
          </span>
          
          {/* Notification Badge */}
          {!chatbotOpen && (
            <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
              1
            </div>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {chatbotOpen && (
        <div className="fixed bottom-24 left-6 z-50 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Chatbot Header */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-white/20 p-2 rounded-full">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">RIPL Assistant</h3>
                <div className="flex items-center gap-1 text-xs opacity-90">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatbotOpen(false)}
              className="hover:bg-white/10 p-1 rounded-full transition-colors duration-200"
            >
              <Minimize2 className="h-4 w-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex gap-2 max-w-xs ${message.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.sender === 'user' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-purple-500 text-white'
                    }`}>
                      {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div>
                      <div className={`p-3 rounded-2xl ${
                        message.sender === 'user'
                          ? 'bg-blue-500 text-white rounded-br-sm'
                          : 'bg-white text-gray-800 shadow-sm rounded-bl-sm border'
                      }`}>
                        <p className="text-sm">{message.text}</p>
                      </div>
                      <div className={`text-xs text-gray-500 mt-1 ${
                        message.sender === 'user' ? 'text-right' : 'text-left'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input Section */}
          <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="bg-purple-500 hover:bg-purple-600 disabled:bg-gray-300 text-white p-2 rounded-full transition-colors duration-200 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-3 bg-gray-50 border-t">
            <div className="flex gap-2 text-xs">
              <button
                onClick={() => setInputMessage("I need a quote for my project")}
                className="bg-white border border-gray-200 hover:border-purple-300 px-3 py-1 rounded-full transition-colors duration-200"
              >
                Get Quote
              </button>
              <button
                onClick={() => setInputMessage("Tell me about your services")}
                className="bg-white border border-gray-200 hover:border-purple-300 px-3 py-1 rounded-full transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => setInputMessage("How can I contact you?")}
                className="bg-white border border-gray-200 hover:border-purple-300 px-3 py-1 rounded-full transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Info Bar - Optional floating info bar */}
      
    </>
  );
};

export default FloatingContactWidgets;