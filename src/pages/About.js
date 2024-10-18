// src/pages/About.js
import React from 'react';

const teamMembers = [
  {
    name: 'Josh Park',
    image: 'https://i.ibb.co/MZxgh9J/Screen-Shot-2024-10-17-at-10-12-29-PM.png',
    description: 'Josh is a recent Pepperdine alumni who will be attending medical school in the fall of 2025. He received his B.A. in Chemistry and has a passion for teaching, missions, and Korea! ',
  },
  {
    name: 'Claire Lee',
    image: 'https://i.ibb.co/W26DXHF/claire-img.jpg',
    description: 'Claire is a Pepperdine alumni with a B.A. in Political Science and Economics. A southern California native, she now resides in Washington, D.C. She attends Waterfront Church and enjoys reading books in her free time.',
  },
  {
    name: 'Yejin Seo',
    image: 'https://i.ibb.co/g4hHYLJ/Screen-Shot-2024-10-17-at-10-05-48-PM.png',
    description: 'Yejin is a master student in Pepperdine law school studying dispute resolution. She has L.L.B. in Korean law and US & Int\’l law. Born in Korea, but lived most of her life in Kosovo as a missionary\'s kid. Her life in Kosovo has heavily influenced her passion for North Korea, children, and mission!',
  },
  {
    name: 'Grant Park',
    image: 'https://i.ibb.co/MVhjt0P/Screen-Shot-2024-10-17-at-10-11-09-PM.png',
    description: 'Grant recently graduated from Stanford University with a B.S. in Computer Science. He was born and raised in the Bay Area and loves missions, Korea, and making lofi videos in his free time!',
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-6">
      <h1 className="text-4xl font-bold mt-6 mb-12">About Us</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="max-w-lg p-8 flex flex-col items-center text-center">
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 rounded-full overflow-hidden"
            />
            <h2 className="text-xl font-semibold">{member.name}</h2>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
