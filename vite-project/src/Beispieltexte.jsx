import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function Beispieltexte() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    return(
        <>
{/*Sidebar nav */}
<div className="flex" >
<div className="md:hidden w-10 flex justify-center pt-4" >
    <button onClick={() => setSidebarOpen(!sidebarOpen)} >
➜
</button>
</div>

        
            <article className={` ${sidebarOpen ? "block" : "hidden" } md:block w-64 bg-white`}>
                <nav>
                    <ul className="*:py-4 pl-2 pr-32">
                        <li><a href="dashboard.html">Dashboard</a></li>
                        <li><a href="artikel.html">Artikel</a></li>
                        
                            <li><a href="neuerartikel.html">neu</a></li>
                    
                        <li><Link to="/beispieltexte">Beispieltexte</Link></li>
                    </ul>
                </nav>
            </article>


    <article className="p-8">
    <h4>Webentwicklung</h4>
        <p className="pb-4">
        Der Entwickler erstellt eine neue API-Dokumentation für das Frontend-System. Der Administrator überprüft anschließend die Konfiguration
        des Servers und aktualisiert die Benutzerrechte der Redakteure. Falls ein Benutzer keinen Zugriff auf bestimmte Komponenten besitzt, 
        informiert der Entwickler den zuständigen Mitarbeiter. Der Programmierer testet außerdem die Responsivität der Website auf verschiedenen 
        Geräten und dokumentiert auftretende Fehler für den Projektleiter.</p>

    <h4>Human-Computer-Interaction</h4>
        <p className="pb-4">
        Der Nutzer verwendet das Interface einer neuen Anwendung zur Verwaltung technischer Dokumentationen. Während der Bearbeitung analysiert
        der Designer das Verhalten der Anwender und optimiert die Navigation des Systems. Der Entwickler beobachtet, dass mehrere Benutzer Schwierigkeiten 
        mit der Suchfunktion haben. Deshalb erstellt der UX-Designer neue Prototypen und führt zusätzliche Usability-Tests mit weiteren Testpersonen durch. 
        Anschließend bewertet der Projektleiter die Ergebnisse der Untersuchung.</p>

    <h4>Maschinelles Lernen</h4>
        <p className="pb-4">
        Der Data Scientist trainiert ein Modell zur automatischen Analyse technischer Texte. Während des Trainings überprüft der Entwickler die
        Datenqualität und entfernt fehlerhafte Datensätze aus dem System. Anschließend bewertet der Analyst die Genauigkeit des Modells anhand
        verschiedener Testdaten. Falls der Benutzer falsche Ergebnisse erhält, passt der Programmierer die Parameter des Algorithmus an und
        dokumentiert die Änderungen für den Administrator.</p>



  </article>      
 </div>       
        </>
    );
}