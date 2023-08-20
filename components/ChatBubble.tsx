import React from 'react';

type ChatBubbleProps = {
    sender: 'user' | 'other';
    message: string;
    timestamp: string;
    avatar: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({ sender, message, timestamp, avatar }) => {
    const senderClass = sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300';

    return (
        <div className={`flex mb-4 ${sender === 'user' ? 'user-bubble' : 'other-bubble'}`}>
            {sender === 'other' && (
                <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
            )}
            
            {sender === 'user' && (
                <img src={avatar} alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
            )}
            <div className={`bg-gray-300 p-2 rounded-lg ${senderClass}`}>
                <p className="text-sm">{message}</p>
                <p className="text-sm text-gray-500">{timestamp}</p>
            </div>
        </div>
    );
};

export default ChatBubble;
