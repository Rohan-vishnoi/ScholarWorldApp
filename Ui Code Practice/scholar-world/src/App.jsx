import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Users, 
  BookOpen, 
  MessageCircle, 
  Search, 
  Heart, 
  Share2, 
  Plus, 
  Menu, 
  X, 
  ShoppingCart, 
  Trash2, 
  User, 
  GraduationCap,
  Filter,
  MapPin,
  Clock,
  Sparkles,
  Loader2,
  XCircle,
  CheckCircle2
} from 'lucide-react';

// --- Gemini API Helper ---
const apiKey = "AIzaSyCxxwwPKn7ihWliFTEQsmXx8kLH8CtRm6c"; // System provides the key

const callGemini = async (prompt) => {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    const data = await response.json();
    return data.candidates?.[0]?.content?.parts?.[0]?.text || "Could not generate content.";
  } catch (error) {
    console.error("Gemini API Failed:", error);
    return "Sorry, AI is taking a nap. Try again later!";
  }
};

// --- Mock Data ---

const CATEGORIES = ["All", "Textbooks", "Tech", "Notes", "Dorm", "Tutor"];

const PRODUCTS = [
  {
    id: 1,
    title: "Calculus: Early Transcendentals (8th Ed)",
    price: 45.00,
    originalPrice: 120.00,
    seller: "Alex M.",
    university: "State Univ",
    category: "Textbooks",
    image: "📚",
    condition: "Good"
  },
  {
    id: 2,
    title: "iPad Air 4th Gen + Pencil",
    price: 350.00,
    originalPrice: 599.00,
    seller: "Sarah J.",
    university: "Tech Inst",
    category: "Tech",
    image: "📱",
    condition: "Like New"
  },
  {
    id: 3,
    title: "Organic Chem 201 Complete Notes",
    price: 15.00,
    originalPrice: null,
    seller: "BioWiz_99",
    university: "State Univ",
    category: "Notes",
    image: "📝",
    condition: "Digital"
  },
  {
    id: 4,
    title: "Mini Fridge (Black)",
    price: 60.00,
    originalPrice: 110.00,
    seller: "DormKing",
    university: "State Univ",
    category: "Dorm",
    image: "❄️",
    condition: "Used"
  },
  {
    id: 5,
    title: "Python Tutoring - 1hr Session",
    price: 25.00,
    originalPrice: null,
    seller: "CoderDave",
    university: "Tech Inst",
    category: "Tutor",
    image: "💻",
    condition: "Service"
  },
  {
    id: 6,
    title: "Financial Accounting Textbook",
    price: 30.00,
    originalPrice: 95.00,
    seller: "BizMajor",
    university: "State Univ",
    category: "Textbooks",
    image: "book",
    condition: "Fair"
  }
];

const POSTS = [
  {
    id: 1,
    user: "Jessica Chen",
    handle: "@jess_chen",
    time: "2h ago",
    content: "Is anyone else struggling with the intro to Algorithms assignment? Looking for a study buddy for the library tonight! 🧠 💻",
    likes: 24,
    comments: 5,
    tag: "Study Group",
    color: "bg-blue-100 text-blue-700"
  },
  {
    id: 2,
    user: "Campus Events",
    handle: "@campus_life",
    time: "4h ago",
    content: "Midnight breakfast is happening at the Student Union tonight! Free pancakes for everyone studying for midterms. 🥞☕️",
    likes: 156,
    comments: 42,
    tag: "Event",
    color: "bg-purple-100 text-purple-700"
  },
  {
    id: 3,
    user: "Mike Ross",
    handle: "@mikeross",
    time: "6h ago",
    content: "Just listed my old graphing calculator on the marketplace. Works perfectly, just don't need it for Law classes. Check it out!",
    likes: 8,
    comments: 1,
    tag: "Selling",
    color: "bg-green-100 text-green-700"
  }
];

// --- Components ---

const Navbar = ({ activeTab, setActiveTab, cartCount, onSellClick }) => (
  <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
    <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('market')}>
        <div className="bg-indigo-600 p-1.5 rounded-lg">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <span className="font-bold text-xl text-gray-900 hidden sm:block">Scholar<span className="text-indigo-600">World</span></span>
      </div>

      <div className="flex items-center gap-1 sm:gap-4">
        <button 
          onClick={() => setActiveTab('market')}
          className={`p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 transition-all ${activeTab === 'market' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <ShoppingBag className="w-5 h-5" />
          <span className="hidden sm:inline">Market</span>
        </button>
        <button 
          onClick={() => setActiveTab('social')}
          className={`p-2 sm:px-4 sm:py-2 rounded-full flex items-center gap-2 transition-all ${activeTab === 'social' ? 'bg-indigo-50 text-indigo-600 font-medium' : 'text-gray-500 hover:bg-gray-50'}`}
        >
          <Users className="w-5 h-5" />
          <span className="hidden sm:inline">Campus</span>
        </button>
        
        <div className="h-6 w-px bg-gray-200 mx-1 hidden sm:block"></div>

        <button 
          onClick={onSellClick}
          className="hidden sm:flex items-center gap-2 px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white rounded-full text-sm font-bold transition-colors shadow-sm hover:shadow-md"
        >
          <Plus className="w-4 h-4" /> Sell
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={() => setActiveTab('cart')}
          className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ShoppingCart className="w-5 h-5" />
          {cartCount > 0 && (
            <span className="absolute top-0 right-0 bg-red-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </button>
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden border border-gray-300">
           <div className="w-full h-full flex items-center justify-center bg-indigo-100 text-indigo-600 font-bold text-xs">
             ME
           </div>
        </div>
      </div>
    </div>
  </nav>
);

const ProductCard = ({ product, addToCart }) => (
  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow group">
    <div className="h-40 bg-gray-100 flex items-center justify-center text-6xl relative">
      {product.image}
      <span className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-medium text-gray-600 border border-gray-200">
        {product.condition}
      </span>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="text-xs text-indigo-600 font-semibold uppercase tracking-wider">{product.category}</p>
          <h3 className="font-bold text-gray-900 line-clamp-1">{product.title}</h3>
        </div>
      </div>
      
      <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
        <User className="w-3 h-3" /> {product.seller} • {product.university}
      </div>

      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-col">
           <span className="text-lg font-bold text-gray-900">${product.price}</span>
           {product.originalPrice && (
             <span className="text-xs text-gray-400 line-through">${product.originalPrice}</span>
           )}
        </div>
        <button 
          onClick={() => addToCart(product)}
          className="bg-gray-900 text-white p-2 rounded-lg hover:bg-indigo-600 transition-colors active:scale-95"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  </div>
);

const SocialPost = ({ post }) => {
  const [liked, setLiked] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-400 to-purple-400 flex items-center justify-center text-white font-bold">
            {post.user.charAt(0)}
          </div>
          <div>
            <h4 className="font-bold text-gray-900 text-sm">{post.user}</h4>
            <p className="text-xs text-gray-500">{post.handle} • {post.time}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${post.color}`}>
          {post.tag}
        </span>
      </div>
      
      <p className="text-gray-800 mb-4 leading-relaxed">
        {post.content}
      </p>

      <div className="flex items-center gap-6 pt-3 border-t border-gray-100">
        <button 
          onClick={() => setLiked(!liked)}
          className={`flex items-center gap-2 text-sm transition-colors ${liked ? 'text-red-500' : 'text-gray-500 hover:text-gray-900'}`}
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-current' : ''}`} />
          {liked ? post.likes + 1 : post.likes}
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors">
          <MessageCircle className="w-4 h-4" />
          {post.comments}
        </button>
        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors ml-auto">
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// --- Sell Modal with AI ---
const SellModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Textbooks");
  const [desc, setDesc] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  if (!isOpen) return null;

  const handleGenerateDescription = async () => {
    if (!title) return;
    setIsGenerating(true);
    const prompt = `Write a short, casual, and persuasive sales description (max 40 words) for a student selling a used "${title}" in the category "${category}". Include appropriate emojis.`;
    
    const generatedText = await callGemini(prompt);
    setDesc(generatedText);
    setIsGenerating(false);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="font-bold text-lg text-gray-900">Sell Item</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <XCircle className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Item Title</label>
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Calculus Textbook, Mini Fridge"
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none bg-white"
            >
              {CATEGORIES.slice(1).map(c => <option key={c}>{c}</option>)}
            </select>
          </div>

          <div>
            <div className="flex justify-between items-end mb-1">
              <label className="block text-xs font-bold text-gray-500 uppercase">Description</label>
              <button 
                onClick={handleGenerateDescription}
                disabled={!title || isGenerating}
                className="text-xs flex items-center gap-1 text-indigo-600 hover:text-indigo-800 font-medium disabled:opacity-50"
              >
                {isGenerating ? <Loader2 className="w-3 h-3 animate-spin" /> : <Sparkles className="w-3 h-3" />}
                Auto-Generate
              </button>
            </div>
            <textarea 
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              placeholder="Describe condition, reason for selling..."
              rows={4}
              className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-indigo-500 outline-none resize-none"
            />
          </div>

          <div className="pt-2">
            <button 
              onClick={onClose} // Just closes for demo
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              List Item <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- AI Study Planner Widget ---
const AIStudyPlanner = () => {
  const [topic, setTopic] = useState("");
  const [plan, setPlan] = useState(null);
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!topic) return;
    setLoading(true);
    // Simplified prompt for a widget
    const prompt = `Create a concise 3-step study checklist for a student studying "${topic}". Format as plain text bullet points. Keep it motivating!`;
    const result = await callGemini(prompt);
    setPlan(result);
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-10">
        <Sparkles className="w-16 h-16 text-indigo-600" />
      </div>
      
      <h3 className="font-bold text-indigo-900 mb-2 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-indigo-600" /> AI Study Buddy
      </h3>
      <p className="text-xs text-indigo-700 mb-3">Stuck? Get a quick 3-step battle plan for any subject.</p>
      
      {!plan ? (
        <div className="space-y-2">
          <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="e.g. Anatomy Midterm"
            className="w-full text-sm p-2 rounded-lg border border-indigo-200 focus:ring-2 focus:ring-indigo-400 outline-none bg-white/80"
            onKeyDown={(e) => e.key === 'Enter' && generatePlan()}
          />
          <button 
            onClick={generatePlan}
            disabled={loading || !topic}
            className="w-full bg-indigo-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex justify-center items-center gap-2"
          >
            {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : "Generate Plan ✨"}
          </button>
        </div>
      ) : (
        <div className="space-y-3 animate-in fade-in slide-in-from-bottom-2">
          <div className="bg-white/80 rounded-lg p-3 text-sm text-gray-700 border border-indigo-100 max-h-48 overflow-y-auto whitespace-pre-wrap">
            {plan}
          </div>
          <button 
            onClick={() => { setPlan(null); setTopic(""); }}
            className="text-xs text-indigo-600 hover:underline font-medium w-full text-center"
          >
            Start Over
          </button>
        </div>
      )}
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activeTab, setActiveTab] = useState('market');
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [isSellModalOpen, setIsSellModalOpen] = useState(false); // New State for Modal

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-slate-900">
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        cartCount={cart.length} 
        onSellClick={() => setIsSellModalOpen(true)}
      />
      
      <SellModal isOpen={isSellModalOpen} onClose={() => setIsSellModalOpen(false)} />

      <main className="max-w-5xl mx-auto p-4 md:p-6">
        
        {/* Notification Toast */}
        {showNotification && (
          <div className="fixed bottom-4 right-4 bg-gray-900 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in slide-in-from-bottom-5 z-50">
            <div className="bg-green-500 rounded-full p-1">
              <ShoppingBag className="w-3 h-3 text-white" />
            </div>
            <span className="text-sm font-medium">Added to cart successfully!</span>
          </div>
        )}

        {/* MARKETPLACE VIEW */}
        {activeTab === 'market' && (
          <div className="space-y-6 animate-in fade-in duration-300">
            {/* Hero / Search Section */}
            <div className="bg-indigo-600 rounded-2xl p-6 md:p-10 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white opacity-5 rounded-full translate-y-1/3 -translate-x-1/3"></div>
              
              <div className="relative z-10 max-w-2xl">
                <h1 className="text-2xl md:text-3xl font-bold mb-2">Buy & Sell on Campus</h1>
                <p className="text-indigo-100 mb-6">Find cheap textbooks, dorm supplies, and notes from students near you.</p>
                
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input 
                    type="text" 
                    placeholder="Search for 'Calculus', 'Microwave', etc..." 
                    className="w-full pl-10 pr-4 py-3 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300 shadow-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Categories */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === cat 
                      ? 'bg-gray-900 text-white shadow-md' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} addToCart={addToCart} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">No items found</h3>
                  <p className="text-gray-500">Try adjusting your search or filters.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SOCIAL FEED VIEW */}
        {activeTab === 'social' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-in fade-in duration-300">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
               <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex gap-4 items-start">
                 <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold flex-shrink-0">
                   ME
                 </div>
                 <div className="flex-grow">
                   <input 
                    type="text" 
                    placeholder="Share a thought, ask a question..." 
                    className="w-full bg-gray-50 border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-indigo-100 mb-3"
                   />
                   <div className="flex justify-between items-center">
                     <div className="flex gap-2">
                       <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><MapPin className="w-4 h-4"/></button>
                       <button className="p-2 hover:bg-gray-100 rounded-full text-gray-500"><BookOpen className="w-4 h-4"/></button>
                     </div>
                     <button className="bg-indigo-600 text-white px-4 py-1.5 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors">
                       Post
                     </button>
                   </div>
                 </div>
               </div>

               <div>
                 <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
                   <Clock className="w-4 h-4" /> Recent Campus Activity
                 </h3>
                 {POSTS.map(post => (
                   <SocialPost key={post.id} post={post} />
                 ))}
               </div>
            </div>

            {/* Sidebar */}
            <div className="hidden lg:block space-y-6">
              {/* NEW GEMINI AI WIDGET */}
              <AIStudyPlanner />

              <div className="bg-white border border-gray-200 rounded-xl p-5">
                <h3 className="font-bold text-gray-900 mb-4">Trending Topics</h3>
                <div className="space-y-3">
                  {['#FinalsWeek', '#DormLife', '#UsedBooks', '#CampusFood', '#Internships'].map(tag => (
                    <div key={tag} className="flex justify-between items-center group cursor-pointer">
                      <span className="text-gray-600 text-sm group-hover:text-indigo-600 transition-colors">{tag}</span>
                      <span className="text-xs text-gray-400">2.1k posts</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-xl p-5 text-white">
                <h3 className="font-bold text-lg mb-2">Student Prime</h3>
                <p className="text-indigo-100 text-sm mb-4">Get free delivery on all marketplace items and exclusive event access.</p>
                <button className="w-full bg-white text-indigo-600 font-bold py-2 rounded-lg text-sm shadow-lg">
                  Try 1 Month Free
                </button>
              </div>
            </div>
          </div>
        )}

        {/* CART VIEW */}
        {activeTab === 'cart' && (
          <div className="max-w-2xl mx-auto animate-in fade-in duration-300">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6" /> Your Cart
            </h2>
            
            {cart.length > 0 ? (
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <div className="divide-y divide-gray-100">
                  {cart.map((item, index) => (
                    <div key={`${item.id}-${index}`} className="p-4 flex gap-4 items-center">
                      <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                        {item.image}
                      </div>
                      <div className="flex-grow">
                        <h4 className="font-bold text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-500">Sold by {item.seller}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">${item.price}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-xs text-red-500 hover:underline mt-1"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-gray-50 p-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-500">Subtotal</span>
                    <span className="font-bold text-lg">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-gray-500">Campus Delivery Fee</span>
                    <span className="text-green-600 font-medium">Free</span>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors shadow-lg">
                    Checkout (${cartTotal.toFixed(2)})
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-xl border border-gray-200 border-dashed">
                <ShoppingCart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Your cart is empty</h3>
                <p className="text-gray-500 mb-6">Looks like you haven't added anything yet.</p>
                <button 
                  onClick={() => setActiveTab('market')}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700"
                >
                  Browse Marketplace
                </button>
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}