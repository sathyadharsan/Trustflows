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
  RefreshCw,
  User,
  Mail,
  Phone
} from 'lucide-react';
import { chatbotKnowledge } from '../data/chatbotKnowledge';
import { useLocation } from 'react-router-dom';
import { cities } from '../data/cities';
import { segmentData } from '../data/segments';
import { offeringData } from '../data/offerings';
import { problems } from '../data/problems';
import { solutions } from '../data/solutions';
import { stakeholders } from '../data/stakeholders';
import { outcomes } from '../data/outcomes';

const CONTACT_SCRIPT_URL: string = 'https://script.google.com/macros/s/AKfycbx3RyRBLAVz0d69bxo0ulHtUAYuBCN-_L0PrP2coQDUsiPNuOciHmxj-xWs_u-RHU-L/exec';

interface Message {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

type LeadStage = 'none' | 'offer' | 'name' | 'email' | 'phone' | 'submitting' | 'done';

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const prevLocation = useRef(location.pathname);

  // Auto-trigger contextual messages based on the page navigated
  useEffect(() => {
    if (prevLocation.current !== location.pathname) {
      prevLocation.current = location.pathname;
      
      const path = location.pathname;
      let autoMessage = '';

      if (path === '/') {
        autoMessage = "Welcome back to Trustflows Home! 🏠 How can I help you secure your real estate deal today?";
      } 
      else if (path.includes('/cities/')) {
        const id = path.split('/cities/')[1]?.split('/')[0]?.toLowerCase();
        const city = cities.find(c => c.id === id);
        if (city) {
          autoMessage = `I see you're looking at **${city.name}**! 🏙️ SRA, registry, or local land record complexities are high here. Want to check the critical risks we scan in ${city.name}?`;
        } else {
          autoMessage = `Looking at properties in our active cities? We are operational in 20 major Indian cities. Need details on a specific city?`;
        }
      }
      else if (path.includes('/segments/')) {
        const id = path.split('/segments/')[1]?.split('/')[0]?.toLowerCase();
        const segment = segmentData.find(s => s.id === id);
        if (segment) {
          autoMessage = `Exploring **${segment.sidebarLabel}**? 🏢 Common risks here include ${segment.content.pain[0]} and legacy title disputes. Want to run an AI scan for your ${segment.sidebarLabel}?`;
        } else {
          autoMessage = `Analyzing a specific property segment? We have tailored risk-scans for flat, plot, commercial layout, and more. Which one are you buying?`;
        }
      }
      else if (path.includes('/offerings/')) {
        const id = path.split('/offerings/')[1]?.split('/')[0]?.toLowerCase();
        const offering = offeringData.find(o => o.id === id);
        if (offering) {
          autoMessage = `Looking into **${offering.sidebarLabel}**? 🛡️ Let me know if you want details about its exact features, coverage, or customized pricing structures!`;
        } else {
          autoMessage = `Exploring our property protection offerings? We offer Escrow, Title Insurance, and Fraud Monitoring. What are you looking to secure?`;
        }
      }
      else if (path.includes('/problems/')) {
        const id = path.split('/problems/')[1]?.split('/')[0]?.toLowerCase();
        const problem = problems.find(p => p.id === id);
        if (problem) {
          autoMessage = `Concerned about **${problem.title}**? ⚠️ This is a major risk in real estate transactions. Would you like to know how our AI engines audit and mitigate this specific risk?`;
        } else {
          autoMessage = `Concerned about transaction risks? I can explain how we detect double sales, SRA violations, and unauthorized mortgages. Ask me anything!`;
        }
      }
      else if (path.includes('/solutions/')) {
        const id = path.split('/solutions/')[1]?.split('/')[0]?.toLowerCase();
        const solution = solutions.find(s => s.id === id);
        if (solution) {
          autoMessage = `Reviewing our solution: **${solution.title}**? ✨ Would you like to see how this fits into your property transaction for 100% peace of mind?`;
        } else {
          autoMessage = `Exploring our real estate risk mitigation solutions? We use segment-specific AI models, milestone escrow, and title insurance bonds. Need details?`;
        }
      }
      else if (path.includes('/stakeholders/')) {
        const id = path.split('/stakeholders/')[1]?.split('/')[0]?.toLowerCase();
        const stakeholder = stakeholders.find(s => s.id === id);
        if (stakeholder) {
          autoMessage = `Checking how we help **${stakeholder.title}**? 🤝 I can explain how we custom-tailored our transaction safety bundles to match your exact role and needs!`;
        } else {
          autoMessage = `Looking for customized transaction safety? We have specific bundles for homebuyers, NRIs, developers, brokers, and banks. What is your role?`;
        }
      }
      else if (path.includes('/outcomes/')) {
        const id = path.split('/outcomes/')[1]?.split('/')[0]?.toLowerCase();
        const outcome = outcomes.find(o => o.id === id);
        if (outcome) {
          autoMessage = `Interested in the outcome of: **${outcome.title}**? 📈 Let me share some case studies and explain how we guarantee this safe outcome for you!`;
        } else {
          autoMessage = `Looking at our proven transaction safety outcomes? We guarantee zero title fraud, safe fund transfers, and fast 48-hour delivery. Ask me how!`;
        }
      }
      else if (path.includes('/insurance')) {
        autoMessage = "I see you're looking at Insurance & Asset Protection! 🛡️ Need help calculating premiums or understanding what's covered?";
      }
      else if (path.includes('/fraud-protection')) {
        autoMessage = "Checking out 24/7 Fraud Monitoring? 🚨 Get instant SMS/email alerts on state land registry (IGR) updates or unauthorized registration attempts.";
      }
      else if (path.includes('/contact')) {
        autoMessage = "Need help reaching out? You can leave your details here and our property experts will call you shortly! 📞";
      }
      else if (path.includes('/terms') || path.includes('/privacy') || path.includes('/disclaimer') || path.includes('/compliance')) {
        autoMessage = "Reviewing our legal policies & compliance? 🛡️ Trustflows is committed to 100% transparency. Do you have any compliance questions for me?";
      }

      if (autoMessage) {
        setMessages(prev => {
          const lastMsg = prev[prev.length - 1];
          if (lastMsg && lastMsg.text === autoMessage) return prev;
          
          return [...prev, {
            id: Math.random().toString(36).substr(2, 9),
            text: autoMessage,
            sender: 'bot',
            timestamp: new Date()
          }];
        });
        
        if (!isOpen) {
          setIsOpen(true);
        }

        // Trigger follow-up question after a small delay
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setLeadStage('offer');
            setMessages(prev => {
              const lastMsg = prev[prev.length - 1];
              if (lastMsg && lastMsg.text === "Would you like to know more information about this topic?") return prev;
              
              return [...prev, {
                id: Math.random().toString(36).substr(2, 9),
                text: "Would you like to know more information about this topic?",
                sender: 'bot',
                timestamp: new Date()
              }];
            });
          }, 600);
        }, 800);
      }
    }
  }, [location.pathname, isOpen]);
  
  // 1. Initialize states from sessionStorage for persistence
  const [messages, setMessages] = useState<Message[]>(() => {
    const saved = sessionStorage.getItem('trustflows_chat_messages');
    if (saved) {
      try {
        return JSON.parse(saved).map((m: any) => ({
          ...m,
          timestamp: new Date(m.timestamp)
        }));
      } catch (e) {
        // Fallback to default welcome message
      }
    }
    return [
      {
        id: 'welcome',
        text: "Hi there! Welcome to Trustflows. 🛡️ I'm Trusty, your secure transaction companion. How can I help you secure your deal today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ];
  });

  const [leadStage, setLeadStage] = useState<LeadStage>(() => {
    return (sessionStorage.getItem('trustflows_chat_lead_stage') as LeadStage) || 'none';
  });

  const [leadData, setLeadData] = useState<{ fullName: string; email: string; phone: string }>(() => {
    const saved = sessionStorage.getItem('trustflows_chat_lead_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // Fallback
      }
    }
    return { fullName: '', email: '', phone: '' };
  });

  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 2. Persist states in sessionStorage when updated
  useEffect(() => {
    sessionStorage.setItem('trustflows_chat_messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    sessionStorage.setItem('trustflows_chat_lead_stage', leadStage);
  }, [leadStage]);

  useEffect(() => {
    sessionStorage.setItem('trustflows_chat_lead_data', JSON.stringify(leadData));
  }, [leadData]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const resetChat = () => {
    sessionStorage.removeItem('trustflows_chat_messages');
    sessionStorage.removeItem('trustflows_chat_lead_stage');
    sessionStorage.removeItem('trustflows_chat_lead_data');
    setMessages([
      {
        id: 'welcome',
        text: "Hi there! Welcome to Trustflows. 🛡️ I'm Trusty, your secure transaction companion. How can I help you secure your deal today?",
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
    setLeadStage('none');
    setLeadData({ fullName: '', email: '', phone: '' });
    setInputValue('');
  };

  const quickReplies = [
    { 
      label: 'How Escrow Works?', 
      icon: <HelpCircle size={14} />,
      category: 'escrow'
    },
    { 
      label: 'Calculate Fees?', 
      icon: <DollarSign size={14} />,
      category: 'pricing'
    },
    { 
      label: 'Check Transaction Risk', 
      icon: <AlertTriangle size={14} />,
      category: 'risk'
    },
    { 
      label: 'Talk to an Agent', 
      icon: <Headphones size={14} />,
      category: 'agent'
    }
  ];

  // Submit Lead details to Google Sheets Apps Script
  const submitLead = async (name: string, email: string, phone: string) => {
    try {
      const payload = {
        fullName: name,
        email: email,
        phone: phone,
        city: 'Chatbot Lead',
        segment: 'Chatbot',
        message: 'Lead captured automatically via Trusty chatbot conversation.'
      };
      
      await fetch(CONTACT_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      return true;
    } catch (err) {
      console.error('Error submitting chatbot lead', err);
      return false;
    }
  };

  // Process rules-based matches from the knowledge base
  const matchKnowledgeBase = (userInput: string): string => {
    const input = userInput.toLowerCase().trim();
    let bestMatch: { response: string; score: number } = { response: '', score: 0 };

    // Search through all groups in chatbotKnowledge
    for (const groupName of Object.keys(chatbotKnowledge)) {
      const items = chatbotKnowledge[groupName];
      for (const item of items) {
        let currentScore = 0;
        for (const kw of item.keywords) {
          if (input.includes(kw)) {
            // Give higher weight if input has a whole word match rather than substring
            const regex = new RegExp(`\\b${kw}\\b`, 'i');
            if (regex.test(input)) {
              currentScore += 2;
            } else {
              currentScore += 1;
            }
          }
        }
        if (currentScore > bestMatch.score) {
          bestMatch = { response: item.response, score: currentScore };
        }
      }
    }

    // Default Fallback
    if (bestMatch.score === 0) {
      return "Sorry, I didn't understand. Try asking about pricing, features, or contact.";
    }

    return bestMatch.response;
  };

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

      setTimeout(async () => {
        setIsTyping(false);
        let replyText = '';
        
        // --- LEAD CAPTURE STATE MACHINE ---
        if (leadStage === 'offer') {
          const lowerText = text.toLowerCase().trim();
          const positiveKeywords = ['yes', 'yeah', 'sure', 'ok', 'okay', 'yup', 'please', 'connect', 'yap'];
          const isPositive = positiveKeywords.some(kw => lowerText.includes(kw));

          if (isPositive) {
            setLeadStage('name');
            replyText = "I would be happy to connect you with our property experts! Could you please share your full name?";
          } else {
            setLeadStage('none');
            replyText = "No problem! Let me know if you need help with anything else. 😊";
          }
        } 
        
        else if (leadStage === 'name') {
          const cleanedName = text.trim();
          setLeadData(prev => ({ ...prev, fullName: cleanedName }));
          setLeadStage('email');
          replyText = `Nice to meet you, ${cleanedName}! Could you please share your email address so we can send you our corporate pricing and agreement drafts?`;
        } 
        
        else if (leadStage === 'email') {
          const cleanedEmail = text.trim();
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (emailRegex.test(cleanedEmail)) {
            setLeadData(prev => ({ ...prev, email: cleanedEmail }));
            setLeadStage('phone');
            replyText = `Thank you! And finally, what is your phone number (including country code if outside India) so our escrow manager can call you?`;
          } else {
            // Keep in email stage, request correct email
            replyText = `Oops, that doesn't look like a valid email address. Please enter a valid email (e.g., name@example.com):`;
          }
        } 
        
        else if (leadStage === 'phone') {
          const cleanedPhone = text.trim();
          setLeadStage('submitting');
          
          // Submit data to google sheets spreadsheet
          const success = await submitLead(leadData.fullName, leadData.email, cleanedPhone);
          
          setLeadData(prev => ({ ...prev, phone: cleanedPhone }));
          setLeadStage('done');
          
          if (success) {
            replyText = `Awesome, ${leadData.fullName}! Your request has been securely submitted. An escrow specialist will get back to you at ${cleanedPhone} or ${leadData.email} shortly. 📞`;
          } else {
            replyText = `Got it, ${leadData.fullName}! We saved your callback request. Our team will contact you at ${cleanedPhone} or ${leadData.email} shortly.`;
          }
        } 
        
        // --- STANDARD CHAT STATE ---
        else {
          const lowerText = text.toLowerCase();
          
          // Check if user specifically wants agent connection
          if (
            lowerText.includes('agent') || 
            lowerText.includes('talk') || 
            lowerText.includes('call') || 
            lowerText.includes('contact') || 
            lowerText.includes('human') || 
            lowerText.includes('support') || 
            lowerText.includes('connect')
          ) {
            setLeadStage('name');
            replyText = "I would be happy to connect you with our property experts! Could you please share your full name?";
          } 
          
          // Check if user is asking to run the risk calculator
          else if (
            lowerText.includes('risk') && 
            (lowerText.includes('calculator') || lowerText.includes('calculate') || lowerText.includes('score'))
          ) {
            replyText = "Opening our AI Risk Calculator popup for you to run a full diagnostic scan. Please complete the assessment form in the dialog.";
            window.dispatchEvent(new Event('openRiskCalculator'));
          } 
          
          // Otherwise do rules-based matching from knowledge base
          else {
            replyText = matchKnowledgeBase(text);
          }
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

  const handleQuickReply = (label: string, category: string) => {
    // Add user's selected choice
    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text: label,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(async () => {
      setIsTyping(false);
      let replyText = '';

      if (category === 'agent') {
        setLeadStage('name');
        replyText = "I would be happy to connect you with our property experts! Could you please share your full name?";
        
        setMessages(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          text: replyText,
          sender: 'bot',
          timestamp: new Date()
        }]);
      } 
      
      else {
        if (category === 'risk') {
          replyText = "Opening our AI Risk Calculator popup for you to run a full diagnostic scan. Please complete the assessment form in the dialog.";
          window.dispatchEvent(new Event('openRiskCalculator'));
        } 
        
        else if (category === 'escrow') {
          replyText = "Trustflows Escrow protects your money by holding it in a secure account. 🤝 The buyer deposits funds, both parties verify the legal paperwork/assets, and once everything is checked, the funds are released safely. It mitigates the risk of advance-payment fraud.";
        } 
        
        else if (category === 'pricing') {
          replyText = "Our transaction fees range between 0.5% and 1.5% depending on the property volume and level of legal verification required. You get enterprise-grade safety for a fraction of traditional transaction risk.";
        }

        // Add the main response
        setMessages(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          text: replyText,
          sender: 'bot',
          timestamp: new Date()
        }]);

        // After a small delay, offer connection to agent
        setTimeout(() => {
          setIsTyping(true);
          setTimeout(() => {
            setIsTyping(false);
            setLeadStage('offer');
            setMessages(prev => [...prev, {
              id: Math.random().toString(36).substr(2, 9),
              text: "Would you like to know more information about this topic?",
              sender: 'bot',
              timestamp: new Date()
            }]);
          }, 600);
        }, 800);
      }
    }, 1000);
  };

  const handleOfferResponse = (accepts: boolean) => {
    // Add user's choice to messages
    const userMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      text: accepts ? "Yes, please!" : "No, thank you.",
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      if (accepts) {
        setLeadStage('name');
        setMessages(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          text: "I would be happy to connect you with our property experts! Could you please share your full name?",
          sender: 'bot',
          timestamp: new Date()
        }]);
      } else {
        setLeadStage('none');
        setMessages(prev => [...prev, {
          id: Math.random().toString(36).substr(2, 9),
          text: "No problem! Let me know if you need help with anything else. 😊",
          sender: 'bot',
          timestamp: new Date()
        }]);
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
              <div className="flex items-center gap-1">
                {/* Reset button to clear session storage chat history */}
                <button
                  onClick={resetChat}
                  title="Reset conversation"
                  className="text-white/40 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                >
                  <RefreshCw size={16} />
                </button>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/40 hover:text-white transition-colors p-1.5 hover:bg-white/5 rounded-lg"
                >
                  <X size={18} />
                </button>
              </div>
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
              {leadStage === 'offer' ? (
                <div className="flex gap-2 w-full justify-start py-1">
                  <button
                    onClick={() => handleOfferResponse(true)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-green-500 bg-green-50 text-green-700 hover:bg-green-100 transition-all text-xs font-bold whitespace-nowrap cursor-pointer"
                  >
                    Yes, please!
                  </button>
                  <button
                    onClick={() => handleOfferResponse(false)}
                    className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-gray-300 bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all text-xs font-bold whitespace-nowrap cursor-pointer"
                  >
                    No, thank you.
                  </button>
                </div>
              ) : (
                quickReplies.map((qr) => (
                  <button
                    key={qr.label}
                    onClick={() => handleQuickReply(qr.label, qr.category)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-navy-900/5 bg-gray-50 hover:bg-blue-light hover:text-primary-blue hover:border-primary-blue transition-all text-xs font-bold whitespace-nowrap text-navy-900/70"
                  >
                    {qr.icon}
                    {qr.label}
                  </button>
                ))
              )}
            </div>

            {/* Input Box */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-4 bg-white border-t border-navy-900/5 flex gap-2 items-center"
            >
              {/* Dynamic icon indicator based on lead capture stage */}
              <div className="text-navy-900/40 px-1">
                {leadStage === 'name' && <User size={16} className="text-primary-blue" />}
                {leadStage === 'email' && <Mail size={16} className="text-primary-blue" />}
                {leadStage === 'phone' && <Phone size={16} className="text-primary-blue" />}
              </div>
              <input
                type={leadStage === 'email' ? 'email' : 'text'}
                placeholder={
                  leadStage === 'offer' ? 'Type Yes or No...' :
                  leadStage === 'name' ? 'Enter your full name...' :
                  leadStage === 'email' ? 'Enter your email address...' :
                  leadStage === 'phone' ? 'Enter your phone number...' :
                  'Ask Trusty a question...'
                }
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 bg-[#F8FAFC] border border-navy-900/5 rounded-xl py-3 px-4 text-xs font-medium text-navy-900 outline-none focus:border-primary-blue transition-all"
              />
              <button
                type="submit"
                disabled={!inputValue.trim() || leadStage === 'submitting'}
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
