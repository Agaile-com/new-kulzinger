import React from 'react';
import { MapPin, Phone, Mail, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Impressum: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="impressum">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Impressum</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            Angaben gemäß § 5 TMG:
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg font-semibold text-gray-800">Klaus-Dieter Kulzinger</p>
            <p className="text-gray-700">Elektro- und Handwerker Service</p>
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-700">Beim Schlossgarten 30</p>
                <p className="text-gray-700">68549 Ilvesheim</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Kontakt:</h3>
          <div className="space-y-3 mb-8">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-700 hover:text-blue-600">
                +49 (0)621 – 85 39 96
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-700 hover:text-blue-600">
                {CONTACT_INFO.email}
              </a>
            </div>
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Umsatzsteuer:</h3>
          <p className="text-gray-700 mb-8">
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            <span className="font-semibold">DE144492061</span>
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Streitschlichtung</h2>
          <p className="text-gray-700 mb-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-gray-700 mb-4">
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          <p className="text-gray-700">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Haftung für Inhalte</h2>
          <p className="text-gray-700 mb-4">
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. 
            Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen 
            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
          <p className="text-gray-700 mb-4">
            Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. 
            Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
            Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Haftung für Links</h2>
          <p className="text-gray-700 mb-4">
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
            Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten 
            ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt 
            der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
          </p>
          <p className="text-gray-700">
            Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung 
            nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">Urheberrecht</h2>
          <p className="text-gray-700 mb-4">
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. 
            Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
            bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind 
            nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          </p>
          <p className="text-gray-700">
            Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. 
            Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung 
            aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir 
            derartige Inhalte umgehend entfernen.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Impressum; 