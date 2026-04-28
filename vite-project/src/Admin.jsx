
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './index.css'

export default function Admin() {
  const [toggled, setToggled] = useState(false);
  
  return (
    <>
    
<article className="flex ml-4">
<article className="">
<nav>
    <ul className="*:py-4 pl-2 pr-32">
        <li><a href="dashboard.html">Dashboard</a></li>
        <li><a href="artikel.html">Artikel</a></li>
            <ul>
                <li><a href="neuerartikel.html">neu</a></li>
            </ul>
    </ul>
</nav>
</article>


<article className="bg-pink-50 w-screen min-h-screen ">
<form className="flex flex-col">
    
<div className="flex flex-row">
    <section className="flex flex-col *:ml-4">
        <label className="pt-4" for="t1">Titel</label>
        <input className="border rounded-3xl mb-8 mr-16 h-8" type="text" id="t1" name="titel"/>
    </section>

    <div className="">
        <select className="border rounded-3xl mt-10 p-1.5">
            <option>Kategorie 1</option>
            <option>Kategorie 2</option>
            <option>Kategorie 3</option>
        </select>
    </div>
</div>

    <div className="flex flex-col *:ml-4">
        <label for="kurzb">Kurzbeschreibung</label>
        <textarea className="border rounded-3xl my-4" id="kurzb"></textarea>
    
        <label for="artikel">Artikel</label>
        <textarea className="border rounded-3xl my-4" id="artikel"></textarea>
        
        <button type="button"
        className={`bg-blue-200 rounded-3xl w-12.5 h-6 relative transition-colors 0.1s ease active:bg-gray-400  ${toggled ? "bg-pink-300" : "" }`}
        onClick={() => setToggled(!toggled)}>
          <div className={`absolute top-1/2 left-0.75 h-5 w-5 -translate-y-1/2 rounded-full bg-blue-400 transition-transform duration-150 ease-in-out ${
          toggled ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>

        
        <button className="border w-50" type="submit">veröffentlichen</button>
    </div>

</form>
</article>
</article>

    
    </>
    )
    }

   
    