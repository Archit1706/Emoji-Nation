import React from 'react';
import emojidata from '../emojination';
import Header from './Header';
import Card from './Card';
import Footer from './Footer';

function createCard(emoji) {
    return <Card character={emoji.character} unicodeName={emoji.unicodeName} />;
}

function App() {
    return <div>
        <Header />
        <div className='container'>
            {emojidata.map(createCard)}
        </div>
        <Footer />
    </div>;
}

export default App;