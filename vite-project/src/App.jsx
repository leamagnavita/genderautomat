import Admin from './Admin'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';


function App() {
const [seite, setSeite] = useState('home');

  return (
    <Router>

      <article className="flex flex-col">
      <article>
        <header className="flex *:pr-4 justify-between m-4">
          <img src="platzhalterlogo" alt="Logo"/>
          <p>Titel</p>
          <search className="border rounded-3xl bg-pink-50">
            <form action="./search/">
              <input
                className="outline-none align-text-bottom pl-3 pb-1"
                type="search"
                placeholder="suchen"
              />
              <button className="material-symbols-outlined pt-1 ml-1" type="submit">
                search
              </button>
            </form>
          </search>

          <nav>
            <ul className="flex *:px-4 mt-1">
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
          </nav>
        </header>
        <hr />
      </article>

      <Routes>

        <Route path="/" element={
        <>
        <article className="flex">
        <nav>
          <ul className="*:py-4 pl-4 pr-32">
            <li><a href="#">Seite</a></li>
            <li><a href="#">Seite</a></li>
            <li><a href="#">Seite</a></li>
            <li><a href="#">Seite</a></li>
            <li><a href="#">Seite</a></li>
          </ul>
        </nav>
          
        <article className="bg-pink-50 size-full">
          <div className="pt-8">
            <section className="pl-8">
              <h2 className="text-4xl font-bold">
                Entdecke Unsere Dokumentationen
              </h2>
            </section>

            <h3 className="text-2xl font-bold pt-16 pl-8">Web-Entwicklung</h3>
            <article className="dokumentation-box">
              <section className="flex flex-col text-wrap gap-y-4">
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
  </Routes>
      </article>
    </Router>
  ); 
} 

export default App;



