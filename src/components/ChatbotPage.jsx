import { useState } from 'react';
import { FaMicrophone, FaEllipsisV } from 'react-icons/fa';
import './ChatbotPage.css'; // Import the CSS file for styling

function ChatbotPage() {
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        online: true,
        profilePic: 'profile.jpg', // Add a profile picture
    });

    const [fruits, setFruits] = useState([
        { id: 1, name: 'Apple', price: '$1.00', image: 'apple.jpg', quantity: 1 },
        { id: 2, name: 'Orange', price: '$0.80', image: 'orange.jpg', quantity: 1 },
        // Add more fruits as needed
    ]);

    const [messages, setMessages] = useState([
        { id: 1, text: 'Hello! How can I help you today?', sender: 'bot' },
        { id: 2, text: 'Tell me about apples.', sender: 'user' },
        // Add more messages as needed
    ]);

    const [inputValue, setInputValue] = useState('');

    const handleSendMessage = () => {
        if (inputValue.trim()) {
            setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user' }]);
            setInputValue('');
        }
    };

    const incrementQuantity = (id) => {
        setFruits(fruits.map(fruit => fruit.id === id ? { ...fruit, quantity: fruit.quantity + 1 } : fruit));
    };

    const decrementQuantity = (id) => {
        setFruits(fruits.map(fruit => fruit.id === id && fruit.quantity > 0 ? { ...fruit, quantity: fruit.quantity - 1 } : fruit));
    };

    return (
        <div className="chat-container">
            <div className="user-details">
                <div className="user-info">
                    <img src={user.profilePic} alt={user.name} className="profile-pic" />
                    <div>
                        <h3>{user.name}</h3>
                        <p className="online-status">{user.online ? 'Online' : 'Offline'}</p>
                    </div>
                </div>
                <FaEllipsisV className="options-icon" />
            </div>
            <div className="chat-window">
                {messages.map(message => (
                    <div key={message.id} className={`message ${message.sender}`}>
                        <p>{message.text}</p>
                    </div>
                ))}
                <div className="fruit-cards">
                    {fruits.map(fruit => (
                        <div key={fruit.id} className="fruit-card">
                            <img src={fruit.image} alt={fruit.name} className="fruit-image" />
                            <div className="fruit-info">
                                <div className="fruit-details">
                                    <h3>{fruit.name}</h3>
                                    <p>{fruit.price}</p>
                                </div>
                                <div className="fruit-quantity">
                                    <button onClick={() => decrementQuantity(fruit.id)}>-</button>
                                    <span>{fruit.quantity}</span>
                                    <button onClick={() => incrementQuantity(fruit.id)}>+</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="typing-box">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
                <FaMicrophone className="voice-icon" />
            </div>
        </div>
    );
}

export default ChatbotPage;
