'use client'
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQItemProps extends FAQItem {
  isOpen: boolean;
  onClick: () => void;
}

const FAQItemComponent: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
  <div className="mb-4">
    <button
      className="w-full text-left p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex justify-between items-center"
      onClick={onClick}
    >
      <span>{question}</span>
      <ChevronDownIcon className={`transform transition-transform w-8 p-1 h-auto bg-neutral-700 rounded-full ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-4 bg-white">
        <p>{answer}</p>
      </div>
    </div>
  </div>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      question: "Versendet ihr auch außerhalb Österreichs?",
      answer: "Nein, wir versenden unsere Produkte ausschließlich innerhalb Österreichs. Wir sind der Meinung, dass es im deutschen Raum großartige Shops gibt und wollen unseren österreichischen Sportlern beste Verfügbarkeiten und Kundenservice bieten. Unser Ziel ist es nicht hohe Verkaufszahlen zu generieren, bei uns steht der Kunde im Vordergrund."
    },
    {
      question: "Wie lange dauert es, bis ich meine Bestellung erhalte?",
      answer: "In der Regel dauert es bis zu 2 Werktage. Sollte ein Feiertag inzwischen liegen, kann es durchaus mal 3 Werktage dauern."
    },
    {
      question: "Kann man bei euch auch vor Ort einkaufen?",
      answer: "Derzeit sind wir ein reiner Online-Shop und haben keine physische Verkaufsstelle. Alle unsere Produkte können bequem über unsere Website bestellt werden."
    }
  ];

  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 p-8 bg-white shadow-md border-4 rounded-2xl max-w-7xl px-4 sm:px-6 lg:px-8  pb-8 pt-24 mx-auto">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4">FAQ</h1>
        <p className="mb-4">Hier beantworten wir die häufigst gestellten Fragen:</p>
        <p className="mb-2">Unser Kundendienst steht für Eure Fragen jederzeit zur Verfügung</p>
        <p className="text-gray-600">Durchschnittliche Antwortzeit: 9min</p>
      </div>
      <div className="md:w-1/2">
        {faqItems.map((item, index) => (
          <FAQItemComponent
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            onClick={() => toggleQuestion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;