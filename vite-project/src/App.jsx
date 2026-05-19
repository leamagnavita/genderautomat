
import Admin from './Admin'
import Impressum from './Impressum'
import Datenschutz from './Datenschutz'
import Kontakt from './Kontakt'
import Hamburger from './Hamburger'
import { useState } from 'react'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

function App() {
const [seite, setSeite] = useState('home');

const [hamburgerOpen, setHamburgerOpen] = useState(false);

const toggleHamburger = () =>{
  setHamburgerOpen(!hamburgerOpen);
};



  return (
    <Router>

      <article className="flex flex-col">

      <article>
        <header className="relative flex *:pr-4 justify-between m-4">
          <img src="platzhalterlogo" alt="Logo"/>
          <p>Titel</p>
          <search className="border rounded-3xl bg-pink-50">
            <form action="./search/">
              <input
                className="outline-none align-text-bottom pl-3 pb-1"
                type="search"
                placeholder="suchen"
              />
              <button className=" pt-1 ml-1" type="submit">
                <FaSearch/>
              </button>
            </form>
          </search>

          <nav>
            <ul className="hidden md:flex *:px-4 mt-1">
              <li>
                <NavLink to="/" className="aria-[current=page]:bg-pink-300 hover:bg-orange-300 py-2 px-4 rounded-3xl">Home</NavLink>
              </li>
              <li>
                <NavLink to="/artikel" className="aria-[current=page]:bg-pink-300 hover:bg-orange-300 py-2 px-4 rounded-3xl">Artikel</NavLink>
              </li>
              <li>
                <NavLink to="/support" className="aria-[current=page]:bg-pink-300 hover:bg-orange-300 py-2 px-4 rounded-3xl">Support</NavLink>
              </li>
              <li>
                <NavLink to="/admin" className="aria-[current=page]:bg-pink-300 hover:bg-orange-300 py-2 px-4 rounded-3xl">Admin</NavLink>
              </li>
            </ul>

{/*Hamburger Menü < md */}
            <div className="md:hidden" onClick={toggleHamburger}>
              <Hamburger/>
            </div>
            {hamburgerOpen && (
              <ul className="absolute top-20 right-4 flex flex-col gap-4 bg-white p-4 rounded-xl shadow-lg mt-4 md:hidden">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/artikel">Artikel</NavLink>
              </li>
              <li>
                <NavLink to="/support">Support</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
              </ul>
            )}


          </nav>

        </header>
        <hr />
      </article>



      <Routes>

        <Route path="/" element={
        <>
        <article className="flex">

          
        <article className="bg-pink-50 size-full">
          <div className="pt-8">
            <section className="pl-8">
              <h2 className="text-4xl font-bold">
                Entdecke Unsere Dokumentationen
              </h2>
            </section>

            <h3 className="text-2xl font-bold pt-16 pl-8">Web-Entwicklung</h3>
            <article className="dokumentation-box">
              <section className="flex flex-col gap-y-4">
                <h4>Frontend-Architektur mit Frameworks</h4>
                <p>Kurzbeschreibung</p>
              </section>

              <section className="flex flex-col gap-y-4">
                <h4>Responsive Design</h4>
                <p>Kurzbeschreibung</p>
              </section>

              <section className="flex flex-col gap-y-4">
                <h4>API Dokumentation</h4>
                <p>Kurzbeschreibung</p>
              </section>
            </article>
          </div>

          <h3 className="text-2xl font-bold pl-8">User Experience (UX)</h3>
          <article className="dokumentation-box">
            <section className="flex flex-col gap-y-4">
              <h4>Usability Testverfahren</h4>
              <p>Kurzbeschreibung</p>
            </section>

            <section className="flex flex-col gap-y-4">
              <h4>Inklusives Design</h4>
              <p>Kurzbeschreibung</p>
            </section>

            <section className="flex flex-col gap-y-4">
              <h4>HCI</h4>
              <p>Kurzbeschreibung</p>
            </section>
          </article>

          <h3 className="text-2xl font-bold pl-8">Software Engineering</h3>
          <article className="dokumentation-box">
            <section className="flex flex-col gap-y-4">
              <h4>Maschinelles Lernen</h4>
              <p>Kurzbeschreibung</p>
            </section>

            <section className="flex flex-col gap-y-4">
              <h4>Agiles Projektmanagement</h4>
              <p>Kurzbeschreibung</p>
            </section>

            <section className="flex flex-col gap-y-4">
              <h4>Datenbanksysteme</h4>
              <p>Kurzbeschreibung</p>
            </section>
          </article>
        </article>
      </article>


      </>
    } />



    <Route path="/admin" element={<Admin/>} />
    <Route path="/impressum" element={<Impressum/>}></Route>
    <Route path="/datenschutz" element={<Datenschutz/>}></Route>
    <Route path="/kontakt" element={<Kontakt/>}></Route>

  </Routes>
        {/* Footer */}   
      <footer className="bg-blue-200">
        <div className=" flex flex-col">
          <p> 2026 Name der Website. All Rights Reserved. </p>
          <ul>
            <li className="*:mr-3">
              <Link to="/impressum">Impressum</Link>
              <Link to="/datenschutz">Datenschutz</Link>
              <Link to="/kontakt">Kontakt</Link>
            </li>
          </ul>
        </div>
      </footer>
      </article>
    </Router>
  ); 
} 

export default App;



