import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Beispieltexte from './Beispieltexte'
import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'


export default function Admin() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const [error, setError] = useState("");
    const containsHtml = /<\/?[^>]+>/gi;

    const [toggled, setToggled] = useState(false);
    const [eingabeText, setEingabeText] = useState("");
    const [ergebnisText, setErgebnisText] = useState("");

    const sonderfall = {
        "Kunden": "Kundschaft",
        "Abteilungsleiter": "Abteilungsleitung",
        "Administrator": "Administration",
        "Autor": "verfassende Person"
        
    };

    const ignorieren = [
        "Computer",
        "Server",
        "Router",
        "Controller",
        "Header",
        "Buffer",
        "Pointer",
        "Trigger",
        "Layer",
        "Cluster",
        "Fehler"
    ];

    const artikel = [
        "der", "die", "das", "ein", "eine", "einer", "einen", "dem", "den", "dieser", "diese", "diesen", "jeder", "jede", "jeden", "alle", "mehrere", "viele"
    ];

    useEffect(() => {

{/*nach injizierten html tags prüfen */}
        if(containsHtml.test(eingabeText)) {
            setError("HTML und Script Code sind nicht erlaubt.");
            return;
        }
        setError("");

        if(toggled) {
         const ergebnis = eingabeText.split(" ").map((wort, index, alleWoerter) => {
            const sauberesWort = wort.replace(/[.,!?;:]/g, "");
            const vorherigesWort = (alleWoerter[index - 1] || "").toLowerCase().replace(/[.,!?:;]/g, "");
            /* zwei Wörter zurückschauen wegen Attributen im Text */ 
            const vorVorherigesWort = (alleWoerter[index - 2] || "").toLowerCase().replace(/[.,!?:;]/g, "");
            const erRegex = /^[A-ZÄÖÜ][a-zäöüß]*er$/u;
            const artikelDavor = artikel.includes(vorherigesWort) || artikel.includes(vorVorherigesWort);
            
            /* wenn eines dieser Wörter im Artikel vorkommt, dann ignoriere diese */ 

            if (ignorieren.includes(sauberesWort)) 
                return wort;
            
            /* wenn eins der Wörter aus der Liste vorkommt, dann ersetze es durch die genderneutrale Form */ 
            if (sonderfall[sauberesWort]) {
                return wort.replace(sauberesWort, sonderfall[sauberesWort]);
            }
            /* wenn das vorherige oder vor vorherige Wort ein Artikel ist, dass prüfe, ob das Wort großgeschrieben ist und auf -er endet und ersetze -er zu -ende*/

            if(artikelDavor && erRegex.test(sauberesWort)) {
                return wort.replace(/er(\b|[.,!?;:])/g, "ende$1");
            }

            return wort;
        });
        
        setErgebnisText(ergebnis.join(" "));
    } else {
        
            setErgebnisText(eingabeText);
        }
}, [toggled, eingabeText]); 


return (
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


            <article className="bg-pink-100 flex-1 w-full min-h-screen  ">
                <form className="bg-pink-100 flex flex-col p-4 md:p-8 w-full">

                    <div className="flex flex-row gap-8">
                        <section className="flex flex-col ">
                            <label className="font-semibold py-4 " for="t1">Titel</label>
                            <input className="border rounded-3xl mb-8 h-8" type="text" id="t1" name="titel" />
                        </section>

                        <div className="my-4">
                            <select className="border rounded-3xl mt-10 p-1.5">
                                <option>Kategorie 1</option>
                                <option>Kategorie 2</option>
                                <option>Kategorie 3</option>
                            </select>
                        </div>
                    </div>

                    <div className=" flex flex-col w-full px-4">
                        <label className="font-semibold" htmlFor="kurzb">Kurzbeschreibung</label>
                        <textarea className="mb-10 w-full border rounded-3xl my-4" id="kurzb"></textarea>

                        <label className="font-semibold" htmlFor="artikel">Artikel</label>

                    <div className="flex-row pt-2 pb-1">
                        <label className="" htmlFor="gendertoggle">Genderneutrale Sprache anwenden</label>
                            <button type="button" id="gendertoggle"
                            className={`mx-2 pb-1.5 bg-blue-200 rounded-3xl w-12.5 h-6 relative transition-colors 0.1s ease active:bg-gray-400  ${toggled ? "bg-pink-300" : ""}`}
                            onClick={() => setToggled(!toggled)}>
                            <div className={`absolute top-1/2 left-0.75 h-5 w-5 -translate-y-1/2 rounded-full bg-blue-400 transition-transform duration-150 ease-in-out pointer-events-none ${toggled ? 'translate-x-6' : 'translate-x-0'
                                }`}

                            />

                        </button>
                    </div>
                        <p className=" text-xs font-extralight text-gray-500">Die automatische Umformulierung sollte vor der Veröffentlichung überprüft werden.</p>
                       <textarea className="mt-4 w-full border rounded-3xl my-4" id="artikel" value={ergebnisText} onChange={(e) => setEingabeText(e.target.value)} ></textarea>
                       {error && (
                        <p className="text-red-500 text-xs mt-1">{error}</p>
                       )}
                        
                        
                        



                        <button className="border w-50" type="submit">veröffentlichen</button>
                    </div>

                </form>
            </article>
        </div>
        


    </>
);
}


