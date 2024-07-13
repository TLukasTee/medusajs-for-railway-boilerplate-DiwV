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
      className="w-full text-left p-3 sm:p-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors flex justify-between items-center"
      onClick={onClick}
    >
      <span className="text-sm sm:text-base pr-0 ">{question}</span>
      <ChevronDownIcon className={`flex-shrink-0 transform transition-transform w-6 sm:w-8 p-1 h-auto bg-neutral-700 rounded-full ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
      <div className="p-3 sm:p-4 bg-white">
        <p className="text-sm sm:text-base text-neutral-800">{answer}</p>
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
      question: "Wie lange dauert die Lieferung?",
      answer: "In der Regel dauert es bis zu 2 Werktage. Sollte ein Feiertag inzwischen liegen, kann es durchaus mal 3 Werktage dauern."
    },
    {
      question: "Kann man bei euch auch vor Ort einkaufen?",
      answer: "Derzeit sind wir ein reiner Online-Shop und haben keine physische Verkaufsstelle. Alle unsere Produkte können bequem über unsere Website bestellt werden."
    },
    {
      question: "Was ist hydrolysiertes Protein?",
      answer: "Hydrolysiertes Protein ist vorverdautes Protein, das in kleinere Peptide aufgespalten wurde, was zu einer schnelleren Absorption führt und weniger Verdauungsprobleme verursacht."
    },
    {
      question: "Wie viel Proteinpulver pro Tag einnehmen?",
      answer: "Die empfohlene Menge variiert je nach individuellen Zielen und Gesamtproteinbedarf. Eine typische Portion liegt bei 20-30 Gramm pro Shake. Konsultieren Sie einen Ernährungsberater für spezifische Empfehlungen."
    },
    {
      question: "Proteinpulver in heißen Getränken verwenden?",
      answer: "Ja, Proteinpulver kann in heiße Getränke gemischt werden, aber hohe Temperaturen können die Proteine denaturieren, was ihre biologische Wertigkeit leicht verringern kann."
    },
    {
      question: "Proteinpulver während Schwangerschaft verwenden?",
      answer: "Konsultieren Sie immer einen Arzt, bevor Sie Proteinpulver während der Schwangerschaft verwenden. Viele Proteinpulver sind sicher, aber es ist wichtig, sicherzustellen, dass keine schädlichen Zusatzstoffe enthalten sind."
    },
  ];

  const toggleQuestion = (index: number): void => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-8 p-4 sm:p-8 bg-white shadow-md border-4 rounded-2xl max-w-7xl mx-auto">
      <div className="w-full">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-neutral-800">FAQ</h1>
        <p className="mb-4 text-sm sm:text-base text-neutral-800">Hier beantworten wir die häufigst gestellten Fragen:</p>
        <p className="mb-2 text-sm sm:text-base text-neutral-800">Unser Kundendienst steht für Eure Fragen jederzeit zur Verfügung</p>
        <p className="text-gray-600 text-sm sm:text-base">Durchschnittliche Antwortzeit: 9min</p>
      </div>
      <div className="w-full">
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