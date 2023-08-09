"use client"
import Head from "next/head"
export default function Home() {
  return (
      <div className="">
        <Head>
          <title>henri - a web dev</title>
        </Head>
  
        <div className="header ">
        hey
        </div>
        <div className="about h-screen bg-slate-200 dark:bg-cyan-950 dark:text-white flex items-center " >
          <div className="w-6/12 flex items-center justify-center bg-">
            <img className="transition-all ease-in-out duration-300 rounded-md p-1 cursor-pointer  hover:rounded-lg " src="https://avatars.githubusercontent.com/u/98414850?v=4" width={500} height={500} alt="Avatar"/>
          </div>
          <p className="italic w-4/12">„Óla, ich heiße <span className="uppercase">Henri</span>, ich bin 13 Jahre alt, lebe in Deutschland und bin in dem Bereich des Webdevelopment zugehörig. Ich programmiere Website, seit dem ich 11 Jahre alt war
          und meinen ersten Laptop bekommen habe. Ich liebe vor allem am Programmieren das immer neue lernen von Bereichen und Technicken.“<p className="not-italic"> - Henri</p></p>
        </div>
        <div className="">
          <div>
            
          </div>
        </div>
      </div>
    )
}