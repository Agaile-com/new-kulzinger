import React from 'react';
import { Shield, Eye, Lock, AlertTriangle, FileText } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Datenschutz: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50" id="datenschutz">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-900 mb-4">Datenschutzerklärung</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <Eye className="w-6 h-6 mr-3 text-blue-600" />
            1. Datenschutz auf einen Blick
          </h2>
          
          <h3 className="text-xl font-bold text-blue-900 mb-4">Allgemeine Hinweise</h3>
          <p className="text-gray-700 mb-6">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
            wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert 
            werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Datenerfassung auf unserer Website</h3>
          <div className="space-y-4 mb-6">
            <div>
              <p className="font-semibold text-gray-800 mb-2">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
              <p className="text-gray-700">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Wie erfassen wir Ihre Daten?</p>
              <p className="text-gray-700">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z.B. um Daten handeln, 
                die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. 
                Das sind vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). 
                Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Wofür nutzen wir Ihre Daten?</p>
              <p className="text-gray-700">
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-800 mb-2">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
              <p className="text-gray-700">
                Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten 
                personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung oder Löschung 
                dieser Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit 
                unter der im Impressum angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <Shield className="w-6 h-6 mr-3 text-blue-600" />
            2. Allgemeine Hinweise und Pflichtinformationen
          </h2>
          
          <h3 className="text-xl font-bold text-blue-900 mb-4">Datenschutz</h3>
          <p className="text-gray-700 mb-6">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen 
            Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Hinweis zur verantwortlichen Stelle</h3>
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <p className="font-semibold text-gray-800 mb-2">Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <p className="text-gray-700 mb-2">Elektro- und Handwerker Service Kulzinger</p>
            <p className="text-gray-700 mb-2">Beim Schlossgarten 30</p>
            <p className="text-gray-700 mb-2">68549 Ilvesheim</p>
            <p className="text-gray-700 mb-2">Inhaber: Klaus-Dieter Kulzinger</p>
            <p className="text-gray-700 mb-2">Telefon: +49 (0)621 – 85 39 96</p>
            <p className="text-gray-700">E-Mail: {CONTACT_INFO.email}</p>
          </div>

          <p className="text-gray-700 mb-6">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die 
            Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
          <p className="text-gray-700 mb-6">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits 
            erteilte Einwilligung jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per E-Mail an uns. 
            Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
          <p className="text-gray-700 mb-6">
            Im Falle datenschutzrechtlicher Verstöße steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. 
            Zuständige Aufsichtsbehörde in datenschutzrechtlichen Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, 
            in dem unser Unternehmen seinen Sitz hat. Eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten können 
            folgendem Link entnommen werden:{' '}
            <a 
              href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html
            </a>
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Recht auf Datenübertragbarkeit</h3>
          <p className="text-gray-700 mb-6">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, 
            an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die direkte 
            Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Auskunft, Sperrung, Löschung</h3>
          <p className="text-gray-700 mb-6">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre 
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. 
            ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema 
            personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Widerspruch gegen Werbe-Mails</h3>
          <p className="text-gray-700">
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von nicht ausdrücklich 
            angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die Betreiber der Seiten behalten sich 
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <Lock className="w-6 h-6 mr-3 text-blue-600" />
            3. Datenerfassung auf unserer Website
          </h2>
          
          <h3 className="text-xl font-bold text-blue-900 mb-4">Cookies</h3>
          <p className="text-gray-700 mb-4">
            Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und 
            enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. 
            Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
          </p>
          <p className="text-gray-700 mb-4">
            Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs 
            automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert bis Sie diese löschen. Diese Cookies 
            ermöglichen es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen.
          </p>
          <p className="text-gray-700 mb-6">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im 
            Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
            Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität 
            dieser Website eingeschränkt sein.
          </p>

          <h3 className="text-xl font-bold text-blue-900 mb-4">Server-Log-Dateien</h3>
          <p className="text-gray-700 mb-4">
            Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
            die Ihr Browser automatisch an uns übermittelt. Dies sind:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer URL</li>
            <li>Hostname des zugreifenden Rechners</li>
            <li>Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p className="text-gray-700">
            Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-3 text-blue-600" />
            4. Soziale Medien
          </h2>
          
          <h3 className="text-xl font-bold text-blue-900 mb-4">Inhalte teilen über Plugins (Facebook, Google+1, Twitter & Co.)</h3>
          <p className="text-gray-700 mb-4">
            Die Inhalte auf unseren Seiten können datenschutzkonform in sozialen Netzwerken wie Facebook, Twitter oder Google+ geteilt werden. 
            Diese Seite nutzt dafür das eRecht24 Safe Sharing Tool. Dieses Tool stellt den direkten Kontakt zwischen den Netzwerken 
            und Nutzern erst dann her, wenn der Nutzer aktiv auf einen dieser Button klickt.
          </p>
          <p className="text-gray-700">
            Eine automatische Übertragung von Nutzerdaten an die Betreiber dieser Plattformen erfolgt durch dieses Tool nicht. 
            Ist der Nutzer bei einem der sozialen Netzwerke angemeldet, erscheint bei der Nutzung der Social-Buttons von Facebook, 
            Google+1, Twitter & Co. ein Informations-Fenster, in dem der Nutzer den Text vor dem Absenden bestätigen kann.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
            <FileText className="w-6 h-6 mr-3 text-blue-600" />
            5. Analyse Tools und Werbung
          </h2>
          
          <h3 className="text-xl font-bold text-blue-900 mb-4">Google AdWords und Google Conversion-Tracking</h3>
          <p className="text-gray-700 mb-4">
            Diese Website verwendet Google AdWords. AdWords ist ein Online-Werbeprogramm der Google Inc., 1600 Amphitheatre Parkway, 
            Mountain View, CA 94043, United States ("Google").
          </p>
          <p className="text-gray-700 mb-4">
            Im Rahmen von Google AdWords nutzen wir das so genannte Conversion-Tracking. Wenn Sie auf eine von Google geschaltete 
            Anzeige klicken wird ein Cookie für das Conversion-Tracking gesetzt. Bei Cookies handelt es sich um kleine Textdateien, 
            die der Internet-Browser auf dem Computer des Nutzers ablegt. Diese Cookies verlieren nach 30 Tagen ihre Gültigkeit 
            und dienen nicht der persönlichen Identifizierung der Nutzer.
          </p>
          <p className="text-gray-700 mb-4">
            Mehr Informationen zu Google AdWords und Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google:{' '}
            <a 
              href="https://www.google.de/policies/privacy/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline"
            >
              https://www.google.de/policies/privacy/
            </a>
          </p>
          <p className="text-gray-700">
            Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im 
            Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische 
            Löschen der Cookies beim Schließen des Browser aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität 
            dieser Website eingeschränkt sein.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Datenschutz; 