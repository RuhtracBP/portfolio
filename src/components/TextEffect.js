import React from 'react';
import TextScramble from '@twistezo/react-text-scramble';

const scrambleTexts = [
  'front end developer',
  'full stack developer',
  'cybersecurity '
]

function TextEffect() {
    return (
        <div className='hero-effect'>
          <span> :</span>
        <TextScramble
          texts={scrambleTexts}
          letterSpeed={5}
          nextLetterSpeed={100}
          pauseTime={1500}
        />
      </div>
    )
}

export default TextEffect
