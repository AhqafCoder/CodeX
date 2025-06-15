import React from 'react';
import { FaTwitter, FaLinkedin } from 'react-icons/fa';

interface FounderProps {
  name: string;
  role: string;
  previousCompany?: string;
  description: string;
  image: string;
  twitter?: string;
  linkedin?: string;
}

const FounderCard: React.FC<FounderProps> = ({
  name,
  role,
  description,
  image,
  twitter,
  linkedin
}) => (
  <div className="bg-[#1a1a1a] rounded-2xl p-8 flex gap-8 relative overflow-hidden border border-pink-500/20">
    <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-pink-500/5"></div>
    <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full bg-pink-500/5"></div>
    
    <div className="w-40 h-40 shrink-0">
      <img src={image} alt={name} className="w-full h-full rounded-full object-cover border-4 border-pink-500/20" />
    </div>
    
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl font-bold text-white">{name}</h2>
      <div>
        <span className="text-xl text-pink-400">{role}</span>
      </div>
      <p className="text-gray-300 text-lg leading-relaxed">{description}</p>
      <div className="flex gap-4 mt-2">
        {twitter && (
          <a href={twitter} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
            <FaTwitter size={24} />
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300">
            <FaLinkedin size={24} />
          </a>
        )}
      </div>
    </div>
  </div>
);

const Founders: React.FC = () => {
  const founders = [
    {
      name: "Mr. Ahqaf Ali",
      role: "Founder & CEO | Full Stack Developer",
      description: "Mr. Ahqaf Ali is the visionary Founder and CEO of InvertisPrep, a platform dedicated to empowering students of Invertis University with quality educational resources. As a skilled Full Stack Developer, he combines his technical expertise with a passion for learning to build tools that simplify academic success. His mission is to make education more accessible, engaging, and effective for every student, regardless of their background or field of study.",
      image: "/public/ahqaf.jpg",
      twitter: "https://twitter.com/vedanshgarg",
      linkedin: "https://github.com/AhqafCoder"
    },
    {
      name: "Mr. Vivek Vishwakarma",
      role: "Founder & CEO | Cyber Security Head | Testing Expert | AI/ML Enthusiast",
      description: "Mr. Vivek Vishwakarma serves as the Cyber Security Head at InvertisPrep, ensuring the safety and reliability of the platform's digital infrastructure. With strong expertise in software testing and system vulnerabilities, he plays a crucial role in maintaining platform integrity. In addition to his core responsibilities, he is actively studying Artificial Intelligence and Machine Learning, expanding his skill set to contribute to the future of intelligent and secure educational technology solutions.",
      image: "/public/vivek.jpg",
      twitter: "https://twitter.com/kshitizmiglani",
      linkedin: "https://github.com/v45cfghh"
    }
  ];

  return (
    <div className="min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            <span className="text-white">Meet Our </span>
            <span className="text-pink-500">Founders</span>
          </h1>
        </div>
        <div className="space-y-8">
          {founders.map((founder) => (
            <FounderCard key={founder.name} {...founder} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Founders; 