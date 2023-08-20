'use client'
import React from 'react';
import Image from 'next/image';
import CursorComponent from '../components/CursorComponent';
import ChatBubble from '../components/ChatBubble';
import List from "../components/List"
import FooterComponent from "../components/FooterComponent"

type Message = {
  sender: 'user' | 'other';
  message: string;
  timestamp: string;
  avatar: string;
};

const wordsArray = ['Image', 'Screenshot', 'Imagen'];

const chatData: Message[] = [
  {
    sender: 'other',
    message: 'I need help plz My code: {Image}',
    timestamp: '09:30 PM',
    avatar: '/avatars/Tim-avatar.webp'
  },
  {
    sender: 'other',
    message: 'Post the text asshole!!!!',
    timestamp: '10:50 PM',
    avatar: '/avatars/Keith-avatar.webp'
  },

];

const chatData2: Message[] = [
  {
    sender: 'other',
    message: 'I need help plz My code: {Codeblock}',
    timestamp: '09:30 PM',
    avatar: '/avatars/Tim-avatar.webp'
  },
  {
    sender: 'other',
    message: 'Of course, heres a possible solution: {Solution}',
    timestamp: '10:50 PM',
    avatar: '/avatars/Keith-avatar.webp'
  },
];

export default function Home() {
  return (
    <div className="app-root">
      <div className='hero'>
        <div className='main-title flex content-center'>
          <span className='title'>No</span>
          <span className='title words' style={{ marginLeft: '10px' }}><CursorComponent wordsArray={wordsArray} interval={200} /></span>
        </div>
        <h2 className='hero-title mt-9 ml-10 text-xl'>Posting images/screenshots in text can difficult people to help you!</h2>

      </div>
      <div className='sections sectionleft chat-container ml-5'>
        <h1 className='chat-title mb-3'>Don't do this</h1>

        <div className='chat-stack'>
          {chatData.map((chat, index) => (
            <ChatBubble
              key={index}
              sender={chat.sender}
              message={chat.message}
              timestamp={chat.timestamp}
              avatar={chat.avatar}
            />
          ))}
        </div>
      </div>

      <div className='sections sectionright chat-container ml-5 mt-7'>
        <h1 className='chat-title2 mb-3'>Do this</h1>

        <div className='chat-stack'>
          {chatData2.map((chat, index) => (
            <ChatBubble
              key={index}
              sender={chat.sender}
              message={chat.message}
              timestamp={chat.timestamp}
              avatar={chat.avatar}
            />
          ))}
        </div>
      </div>

      <div className='arguments-section mt-3 text-center'>
        <div className='sections text-center sectionright'>
          <p>Just send the code text instead!</p>
        </div>

        <h3>Why sending text instead of images/screenshots?</h3>
        <p>There are several reasons to send text instead of images, but see two of them just for example:</p>
        <List />
      </div>

      <div className='finalsection border-top-underscore mt-5 text-center'>
        <p className='finaltext'>And that's it, just send the code in text and be happy!</p>
      </div>

      <div className='footer'>
      <FooterComponent/>
      </div>
    </div>
  )
}
