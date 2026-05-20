import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageSquare, 
  X, 
  Send, 
  ShieldCheck, 
  HelpCircle, 
  DollarSign, 
  AlertTriangle, 
  Headphones, 
  Sparkles
} from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      text: "Hi there! Welcome to Trustflows. 🛡️ I'm Trusty, your secure transaction companion. How can I help you secure your deal today?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const quickReplies = [
    { 
      label: 'How Escrow Works?', 
      icon: <HelpCircle size={14} />,
      reply: "Trustflows Escrow protects your money by holding it in a secure account. 🤝 The buyer deposits funds, both parties verify the legal paperwork/assets, and once everything is checked, the funds are released safely. It mitigates the risk of advance-payment fraud."
    },
    { 
      label: 'Calculate Fees?', 
      icon: <DollarSign size={14} />,
      reply: "Our transaction fees range between 0.5% and 1.5% depending on the property volume and level of legal verification required. You get enterprise-grade safety for a fraction of traditional transaction risk."
    },
    { 
      label: 'Check Transaction Risk', 
      icon: <AlertTriangle size={14} />,
      reply: "Starting AI Risk analysis for you! I will open the Property Risk Engine right now. Please complete the assessment form to check your score.",
      action: () => {
        window.dispatchEvent(new Event('openRiskCalculator'));
      }
    },
    { 
      label: 'Talk to an Agent', 
      icon: <Headphones size={14} />,
      reply: "Sure thing! You can connect with our escrow officers at support@trustflows.com, or check out our contact page to leave your phone number. We'll get back to you within 15 minutes."
    }
  ];

  const handleSendMessage = (text: string, isUserMessage = true) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text,
      sender: isUserMessage ? 'user' : 'bot',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    
    if (isUserMessage) {
      setInputValue('');
      setIsTyping(true);

      // Simple chatbot auto-responses
      setTimeout(() => {
        setIsTyping(false);
        const lowerText = text.toLowerCase();
        let replyText = "Thanks for asking! I'm still learning custom queries, but our team at support@trustflows.com can provide the exact details you need.";

        if (lowerText.includes('escrow') || lowerText.includes('work')) {
          replyText = "Trustflows Escrow holds funds in a safe vault. The buyer deposits, property verification is done, and funds release only upon mutual confirmation. 🛡️";
        } else if (lowerText.includes('fee') || lowerText.includes('price') || lowerText.includes('cost')) {
          replyText = "Our transaction fee ranges from 0.5% to 1.5% of the transaction volume. Check out our Pricing section for more specifics!";
        } else if (lowerText.includes('risk') || lowerText.includes('calculate') || lowerText.includes('score')) {
          replyText = "Opening our AI Risk Calculator popup for you to run a full diagnostic scan.";
          window.dispatchEvent(new Event('openRiskCalculator'));
        } else if (lowerText.includes('agent') || lowerText.includes('contact') || lowerText.includes('call')) {
          replyText = "Our agents are available! You can reach us at support@trustflows.com or visit the contact page to speak to a specialist.";
        }

        setMessages(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          text: replyText,
          sender: 'bot',
          timestamp: new Date()
        }]);
      }, 1000);
    }
  };

  const handleQuickReply = (label: string, reply: string, action?: () => void) => {
    // Add user's selected choice
    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text: label,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: Math.random().toString(36).substr(2, 9),
        text: reply,
        sender: 'bot',
        timestamp: new Date()
      }]);
      if (action) {
        action();
      }
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] font-sans">
      <AnimatePresence>
        {/* Launcher Button */}
        {!isOpen && (
          <motion.button
            key="launcher"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center justify-center w-14 h-14 rounded-full bg-primary-blue text-white shadow-xl shadow-primary-blue/30 hover:bg-blue-dark transition-all cursor-pointer relative"
          >
            <MessageSquare size={24} />
            <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white rounded-full animate-pulse" />
          </motion.button>
        )}

        {/* Chat Dialog Window */}
        {isOpen && (
          <motion.div
            key="chat-window"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="w-[350px] sm:w-[380px] h-[520px] bg-white rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-navy-900/5"
          >
            {/* Header */}
            <div className="bg-navy-900 text-white p-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-primary-blue rounded-xl flex items-center justify-center text-white">
                    <ShieldCheck size={20} />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-navy-900 rounded-full" />
                </div>
                <div>
                  <h3 className="font-bold text-[15px] flex items-center gap-1.5 leading-none">
                    Trusty
                    <span className="text-[10px] bg-blue-500/20 text-primary-blue px-1.5 py-0.5 rounded font-medium">AI Bot</span>
                  </h3>
                  <p className="text-[10px] text-white/50 mt-1 font-medium">Always online & secure</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/40 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg"
              >
                <X size={18} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-5 overflow-y-auto space-y-4 bg-gray-50/50">
              {messages.map((msg) => (
                <div 
                  key={msg.id}
                  className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] p-3.5 rounded-2xl text-[13px] font-medium leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-primary-blue text-white rounded-br-none shadow-md shadow-primary-blue/10'
                      : 'bg-white text-navy-900 border border-navy-900/5 rounded-bl-none shadow-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-navy-900/5 text-navy-900 p-3.5 rounded-2xl rounded-bl-none shadow-sm flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-navy-900/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-navy-900/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-navy-900/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies Chips */}
            <div className="px-4 py-2 bg-white border-t border-navy-900/5 flex gap-2 overflow-x-auto scrollbar-hide shrink-0">
              {quickReplies.map((qr) => (
                <button
                  key={qr.label}
                  onClick={() => handleQuickReply(qr.label, qr.reply, qr.action)}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-navy-900/5 bg-gray-50 hover:bg-blue-light hover:text-primary-blue hover:border-primary-blue transition-all text-xs font-bold whitespace-nowrap text-navy-900/70"
                >
                  {qr.icon}
                  {qr.label}
                </button>
              ))}
            </div>

            {/* Input Box */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-4 bg-white border-t border-navy-900/5 flex gap-2 items-center"
            >
              <input
                type="text"
                placeholder="Ask Trusty a question..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-[#F8FAFC] border border-navy-900/5 rounded-xl py-3 px-4 text-xs font-medium text-navy-900 outline-none focus:border-primary-blue transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-3 bg-primary-blue text-white rounded-xl hover:bg-blue-dark transition-all disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
              >
                <Send size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ChatWidget;
