import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../public/po2.jpeg";
import Image from "next/image";


export default function Home() {
  // const [darkMode, setDarkMode] = useState(false);

const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Software Engineer Intern - Kanishka Gimhani.pdf';
  link.download = 'K.T.K.Gimhani Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const fadeInUp = {
  animation: "fadeInUp 1.5s ease-out forwards",
  opacity: 0,
};

const keyframes = `
    @keyframes fadeInUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;

  return (
    // <div className={darkMode ? "dark" : ""}>
    <div>
      <Head>
        <title>K.Gimhani</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style>{keyframes}</style> 
      </Head>
      
      <main className="bg-gradient-to-br from-blue-100 via-teal-100 to-blue-300 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          {/* Updated Navigation Bar */}
          <nav className="w-full py-8 mb-12 flex justify-between items-center bg-white text-dark-blue px-8 rounded-md shadow-lg">            <h1 className="font-burtons text-2xl">DEVELOPED BY Gimhani</h1>
            <ul className="flex space-x-8">
              <li><a href="#education" className="hover:text-gray-200">Education</a></li>
              <li><a href="#volunteering" className="hover:text-gray-200">Volunteering</a></li>
              <li><a href="#projects" className="hover:text-gray-200">Projects</a></li>
              <li><a href="#contact" className="hover:text-gray-200">Contact</a></li>
            </ul>
            <ul className="flex items-center space-x-8">
              <li>
                {/* <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                /> */}
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md"
                  onClick={downloadResume}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </nav>

          {/* Updated Layout with Flexbox */}
          <div className="flex flex-col-reverse lg:flex-row lg:items-center p-10">
            {/* Image on the Left */}
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-b from-teal-500 rounded-full w-72 h-72 lg:w-96 lg:h-96 relative overflow-hidden mx-auto">
                <Image src={deved} layout="fill" objectFit="cover" alt="my image"/>
              </div>
            </div>

            {/* Text on the Right */}
            <div className="lg:w-1/2 text-center lg:text-left p-6">
<h2
              className="text-5xl py-2 text-blue-600 font-medium dark:text-teal-400 md:text-6xl"
              style={fadeInUp}
            >                 KANISHKA GIMHANI
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
                Software developer and undergraduate
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto lg:mx-0 md:text-xl">
                Dedicated young undergraduate currently studying a BSc Hons Information Technology degree. 
                My purpose is to expand my knowledge and skills for the ever-changing IT industry.
              </p>
              <div className="text-5xl flex justify-center lg:justify-start gap-16 py-3 text-gray-600 dark:text-gray-400">
                <a href="https://www.linkedin.com/in/kanishka-gimhani-b169ba246/" target="_blank" rel="noopener noreferrer">
                  <AiFillLinkedin />
                </a>
                <a href="https://instagram.com/_kaaysh_" target="_blank" rel="noopener noreferrer">
                  <AiFillInstagram />
                </a>
                <a href="https://github.com/Kesh02" target="_blank" rel="noopener noreferrer">
                  <AiFillGithub />
                </a>
              </div>
            </div>
          </div>

       
          <section id="education" className="container mx-auto my-12 p-4">
            <h1 className="text-left text-3xl font-semibold dark:text-white mb-6">
              <u>Education</u>
              </h1>
            
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl dark:text-white">Bachelor of Science in Information Technology</h2>
      <p className="text-lg dark:text-gray-300">University of SLIIT, 2022 - 2026</p>
      <p className="text-gray-700 dark:text-gray-400">CGPA: 3.8</p>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
    
      <p className="text-lg dark:text-gray-300">Devi Balika Vidyalaya, 2014 - 2022</p>
      <p className="text-lg dark:text-gray-300">GCE A/L - C,C,S Bio Science</p>
    
    </div>
  </div>
         
           
        
          </section>

          {/* volunteering */}
<section id="volunteering" className="container mx-auto my-12 p-4">
  <h1 className="text-left text-3xl font-semibold dark:text-white mb-6">
    <u>Volunteering Experience</u>
  </h1>
  <div className="space-y-4">
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-bold dark:text-white">AIESEC in SLIIT</h2>
      <p className="text-lg dark:text-gray-300">Team Leader in Outgoing Global Volunteer, 2022 - Present</p>
      <p className="text-gray-700 dark:text-gray-400">led the team
members to successfully implement projects, coordinate with interntional
partners. Awarded with ”best CXP leader of the month”</p>
    </div>
    <div className="p-4 bg-white dark:bg-gray-800 shadow rounded">
      <h2 className="text-2xl font-bold dark:text-white">AIESEC in Sri Lanka</h2>
      <p className="text-lg dark:text-gray-300">2023 - present</p>
      <p className="text-gray-700 dark:text-gray-400">collaborating with
national stakeholders and schools</p>
    </div>
  </div>
</section>


{/* <div  className="text-2xl dark:text-white-400">
<h1 className="text-3xl text-left font-semibold dark:text-white"><u>Projects</u></h1>
              <ul className="text-left list-disc list-inside mt-4 space-y-2 dark:text-white">
                <li>Textile and garment management website</li>
                <li>Medicine and drug ordering system</li>
                <li>Born To Battle dancing competition platform</li>
                <li>Running Boy - 2D game development</li>
                <li>Brick game - mobile app</li>
                <li>To Do mobile app</li>
              </ul>
           </div> */}

<section id="projects" class="bg-gray-100 py-12">
      <div class="container mx-auto p-4">
        <h2 class="text-3xl font-bold mb-4">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col bg-white p-4 shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Textile and garment management website</h3>
            <p>My first group project done using HTML, CSS, PHP for a garment management website.</p>
            <br/><p className="text-blue-500"><a href="https://github.com/Kesh02/Textile-and-Garment-Website">(Textile website Git Repository)</a></p>
          </div>
          <div className="flex flex-col bg-white p-4 shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Medicine and drug ordering system</h3>
            <p>Group project using MVC architecture and Java, SQL workbench. Implemented
using Eclipse
</p>
<br/> <br/> <br/> <br/><p className="text-blue-500"><a href="https://github.com/Kesh02/Pharma">(Pharma Git Repository)</a></p>
          </div>
          <div className="flex flex-col bg-white p-4 shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Born To Battle dancing competition platform</h3>
            <p>Group project using MERN stack. This was done for a real world problem and with
            a real client.</p>
            <br/><p className="text-blue-500"><a href="https://github.com/Kesh02/BornToBattle">(Born to Battle Git Repository)</a></p>
          </div>
          <div className="flex flex-col bg-white p-4 shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Running Boy - 2D game development</h3>
            <p>My first personal project using HTML, CSS and Javascript.
            Hosted using Git Pages</p>
            <br/><p className="text-blue-500"><a href="https://github.com/Kesh02/RunningBoy">(RunningBoy Git Repository)</a></p>
          </div>
          <div class="bg-white p-4 shadow-lg">
            <h3 class="text-2xl font-bold mb-2">Brick game - mobile app</h3>
            <p>Interactive mobile game done using Kotlin implemented in android
studio.
</p>

          </div>
          <div class="bg-white p-4 shadow-lg">
            <h3 class="text-2xl font-bold mb-2">To Do mobile app</h3>
            <p>Using Kotlin ,implemented in android studio, using SQLite databases with
Room library. Has the full CRUD operation
</p>
<br/><br/><p className="text-blue-600"><a href="https://github.com/Kesh02/MyToDoApp">(ToDo App Git Repository)</a></p>
          </div>
        </div>
      </div>
    </section>

    <h1 className="text-center text-3xl font-semibold dark:text-white">
 Contact me
</h1>
    <div className="text-xl dark:text-white mt-4 space-y-2">
  <div>Mobile - 078 - 2091517</div>
  <div>Email - gimhanii2002@gmail.com</div>
</div>

          <footer className="bg-blue-800 text-white p-4 text-center">
            <p>&copy; 2024 My Portfolio. All rights reserved.</p>
          </footer>
        </section>
      </main>
    </div>
  );
}
