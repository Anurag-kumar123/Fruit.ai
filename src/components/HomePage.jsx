// src/components/HomePage.jsx
import { Link } from 'react-router-dom';
import './HomePage.css'; // Import the CSS file

function HomePage() {
    return (
        <div className="container">
            <h1 className="main-heading">Fruit.AI</h1>
            <p className="sub-heading">Be Healthy</p>
            <div className="box-container">
                <div className="box">
                    <Link to="/chatbot">Chatbot</Link>
                </div>
                <div className="box">
                    <Link to="/translator">Translator</Link>
                </div>
                <div className="box">
                    <Link to="/faq">FAQ</Link>
                </div>
                <div className="box">
                    <Link to="/about">About</Link>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
