import React from 'react';
import { PhoneOutgoing, Send, Facebook } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-blue-600 text-white" id="contact">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-6 animate-slide-up">
          Bereit für exzellenten Service?
        </h2>
        <p className="text-xl leading-relaxed mb-10 opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Kontaktieren Sie uns noch heute, um einen Termin zu vereinbaren oder mehr über unsere 
          Dienstleistungen zu erfahren. Wir freuen uns darauf, Ihnen zu helfen!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 animate-slide-up" style={{ animationDelay: '0.4s' }}>
          <a 
            href={`tel:${CONTACT_INFO.phone}`} 
            className="inline-flex items-center px-8 py-4 bg-white text-blue-700 font-bold rounded-full shadow-lg hover:bg-blue-100 transition-all duration-300 transform hover:scale-105"
          >
            <PhoneOutgoing className="w-6 h-6 mr-3" /> Rufen Sie uns an!
          </a>
          <a 
            href={`mailto:${CONTACT_INFO.email}`} 
            className="inline-flex items-center px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition-all duration-300 transform hover:scale-105"
          >
            <Send className="w-6 h-6 mr-3" /> E-Mail senden
          </a>
          <a 
            href="https://www.facebook.com/kulzinger/?locale=de_DE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-500 text-white font-bold rounded-full shadow-lg hover:bg-blue-400 transition-all duration-300 transform hover:scale-105"
          >
            <Facebook className="w-6 h-6 mr-3" /> Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact; 