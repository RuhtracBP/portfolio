import React from 'react';
import TextScramble from '@twistezo/react-text-scramble';

const scrambleTexts = [
  'Front End Developer',
  'Full Stack Developer',
  'cybersecurity Enthusiast'
]

function TextEffect() {
    return (
        <div className='hero-effect'>
          <span> </span>
        <TextScramble
          className="scramble"
          texts={scrambleTexts}
          letterSpeed={5}
          nextLetterSpeed={100}
          pauseTime={1500}
        />
      </div>
    )
}

export default TextEffect
