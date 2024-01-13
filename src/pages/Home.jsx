// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import AiwithText from '../components/AiwithText';
import AiwithImage from '../components/AiwithImage';

const Home = () => {
  const [aiWith, setAiWith] = useState('text');

  const handleAiWith = (value) => {
    setAiWith(value);
  };

  return (
    <div style={{"padding": "3rem"}}>
      <h1>Generative AI Restaurant App!</h1>
      <p>Built with ❤️ using ReactJS + Redux + Google Gemini</p>

      <div style={{ margin: '30px 0' , border: "none", outline: "none"}}>
        <button
          onClick={() => handleAiWith('text')}
          className={aiWith === 'text' ? 'aiWithActive' : ''}>
          AI with Text
        </button>

        <button
          style={{ marginLeft: '20px' }}
          className={aiWith === 'image' ? 'aiWithActive' : ''}
          onClick={() => handleAiWith('image')}>
          AI with Image
        </button>
      </div>

      {aiWith === 'text' ? <AiwithText /> : <AiwithImage />}
    </div>
  );
};

export default Home;
