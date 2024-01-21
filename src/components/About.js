// About.jsx
import React from "react";
import { Phrase } from "@/components/Phrase.js";

const phrases = [
  {
    textBefore:
      "Sie suchen einen kompetenten Partener für die Gebäudereinigung und Hausmeisterservice? ",
    highlight: "Dann sind Sie bei uns richtig! ",
    textAfter:
      "Wir sind ein dynamisches und flexibles Reinigungsunternehmen. Mit über 28 Jahren Erfahrung in der Branche sind wir ein äußerst verlässlicher Partner. Wir sind die Spezialisten für Hausmeisterdienste und stehen Ihnen in Bereichen Reinigungs- und Gebäudemanagement zur Verfügung. Wir nehmen jede Herausforderung an und widmen uns unseren Projekten mit maximaler Energie und Aufmerksamkeit.",
    textAfterAgain:
      "Der persönliche Kundenkontakt und ein umfassender Service hat bei uns oberste Priorität. Unser Team besteht aus kompetenten und motivierten Mitarbeiter, denen Sorgfalt und Gründlichkeit bei der Arbeit am Herzen liegen.Sie erhalten von uns eine qualitativ hochwertige Reinigung zum fairen Preis.",
    highlightAgain: "Sprechen Sie uns einfach an!",
  },
];

const About = () => {
  return (
    <div className="aboutContainer">
      <h1>About sssUs</h1>
      {phrases.map((phrase, index) => (
        <Phrase
          key={index}
          textBefore={phrase.textBefore}
          highlight={phrase.highlight}
          textAfter={phrase.textAfter}
          textAfterAgain={phrase.textAfterAgain}
          highlightAgain={phrase.highlightAgain}
        />
      ))}
    </div>
  );
};

export default About;
