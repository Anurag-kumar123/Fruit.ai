import { useState } from 'react';

function FaqPage() {
    const [faqs, setFaqs] = useState([
        { id: 1, fruit: 'Apple', question: 'What color is an apple?', answer: 'Red or green', image: null },
        { id: 2, fruit: 'Banana', question: 'What color is a banana?', answer: 'Yellow', image: null }
    ]);
    const [newFaq, setNewFaq] = useState({ fruit: '', question: '', answer: '', image: null });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAddFaq = () => {
        const { fruit, question, answer, image } = newFaq;
        if (!fruit || !question || !answer || !image) {
            setError('All fields are required');
            return;
        }

        const newId = faqs.length ? faqs[faqs.length - 1].id + 1 : 1;
        const newFaqEntry = { id: newId, ...newFaq };

        setFaqs([...faqs, newFaqEntry]);
        setNewFaq({ fruit: '', question: '', answer: '', image: null });
        setError('');
    };

    const handleDeleteFaq = (id) => {
        setFaqs(faqs.filter(faq => faq.id !== id));
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewFaq({ ...newFaq, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="container">
            <h2>FAQ</h2>
            {error && <div className="error">{error}</div>}
            <div className="faq-bar">
                <input
                    type="text"
                    value={newFaq.fruit}
                    onChange={(e) => setNewFaq({ ...newFaq, fruit: e.target.value })}
                    placeholder="Enter fruit name"
                    disabled={isLoading}
                />
                <input
                    type="text"
                    value={newFaq.question}
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                    placeholder="Enter your question"
                    disabled={isLoading}
                />
                <input
                    type="text"
                    value={newFaq.answer}
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                    placeholder="Enter the answer"
                    disabled={isLoading}
                />
                <input
                    type="file"
                    onChange={handleImageUpload}
                    disabled={isLoading}
                />
                <button onClick={handleAddFaq} disabled={isLoading}>
                    {isLoading ? 'Adding...' : 'Add FAQ'}
                </button>
            </div>
            <div className="faq-list">
                {faqs.map(faq => (
                    <div className="faq-card" key={faq.id}>
                        <div className="faq-card-left">
                            {faq.image && <img src={faq.image} alt={faq.fruit} className="fruit-image" />}
                            <h3>{faq.fruit}</h3>
                        </div>
                        <div className="faq-card-right">
                            <p><strong>Q:</strong> {faq.question}</p>
                            <p>{faq.answer}</p>
                            <button onClick={() => handleDeleteFaq(faq.id)} disabled={isLoading}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default FaqPage;
