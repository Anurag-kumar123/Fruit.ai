// src/components/TranslatorPage.jsx
import { useState } from 'react';

function TranslatorPage() {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');

    const handleTranslate = () => {
        // Dummy translation logic
        setOutput(input.split('').reverse().join(''));
    };

    return (
        <div className="container">
            <h2>Translator</h2>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button onClick={handleTranslate}>Translate</button>
            <p>Output: {output}</p>
        </div>
    );
}

export default TranslatorPage;
