 import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { useEffect } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaMinus, FaMinusCircle, FaPlus } from "react-icons/fa";
import { FiMinusCircle } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";
import App from "../background"; 
export const Home = () => {
  const [skillset, setSkillset] = useState(['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'GraphQL','abc','aa','qwerty']);
  const [Hobbies, setHobbies] = useState(['Reading', 'Gaming', 'Traveling', 'Cooking', 'Photography']);
  const [skill,setskill] = useState('')
  const [hobby,sethobby] = useState('')
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    title: "title1",
    description: "para1",
    technologies: [],
    link: "", 
  });
  const addproject = ()=>{
    setProjects([...projects, project])
    setProject({
      title: "title1",
      description: "description1",
      technologies: ['React'],
      link: "", 
    });
  }
  const removeproject = ()=>{
    if(projects.length>0){
      setProjects(projects.slice(0,projects.length-1))
      setProject(projects[projects.length-1])
    }
  }
  const [formdata, setFormdata] = useState({
    introhead: "Hi, I'm Pedro Tech",
    intropara: "I’m a full-stack developer who loves crafting clean, scalable web applications. My goal is to build solutions that offer both exceptional performance and a delightful user experience.",
    about:"Passionate developer with expertise in building scalable webapplications and creating innovative solutions.",
    education:"B.S. in Computer Science - XYZ University (2016-2020) Relevant Coursework: Data Structures, Web Development, Cloud Computing...",
    work:"B.S. in Computer Science - XYZ University (2016-2020) Relevant Coursework: Data Structures, Web Development, Cloud Computing...",
  });
  const [projectskill, setProjectskill] = useState('');
  const addprojectskill = ()=>{
    if(projectskill.length>0){
      setProject({...project,technologies:[...project.technologies,projectskill]})
      setProjectskill('')
      console.log(project)
    }
  }
  const removeprojectskill = ()=>{
    if(project.technologies.length>0){
      setProject({...project,technologies:project.technologies.slice(0,project.technologies.length-1)})
      setProjectskill(project.technologies[project.technologies.length-1])
    }
  }
  const addskill = ()=>{
    if(skill.length>0){
      setSkillset([...skillset,skill])
      setskill('')
    }
  }
  const addhobby = ()=>{
    if(hobby.length>0){
      setHobbies([...Hobbies,hobby])
      sethobby('')
    }
  }
  const removehobby = ()=>{
    if(Hobbies.length>0){
      setHobbies(Hobbies.slice(0,Hobbies.length-1))
      sethobby(Hobbies[Hobbies.length-1])
    }
  }
  const removeskill = ()=>{
    if(skillset.length>0){
      setSkillset(skillset.slice(0,skillset.length-1))
      setskill(skillset[skillset.length-1])
    }
  }
  return (
    <>
    {/* <App className='-z-10'></App> */}
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 flex flex-col">
          <input type="text" value={formdata.introhead} onChange={(e)=>setFormdata({...formdata,introhead:e.target.value})} className="text-center text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent  leading-right">
            {/* Hi, I'm Pedro Tech */}
          </input>

          <textarea value={formdata.intropara} rows={4} onChange={(e)=>setFormdata({...formdata,intropara:e.target.value})}
          className="text-center whitespace-pre-wrap text-gray-400 text-lg mb-8 max-w-lg h-[30vh] w-[70vw] mx-auto">
          </textarea>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
        <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl min-w-xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <textarea value={formdata.about} onChange={(e)=>setFormdata({...formdata,about:e.target.value})} className="text-gray-300 whitespace-pre-wrap mb-6 w-full">
            </textarea>
            
           
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-center">Skillset</h3>
                <div className="flex flex-wrap gap-2">
                  {skillset.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                  <input type='text' value={skill} onChange={(e)=>setskill(e.target.value)} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"></input>
                  <CiCirclePlus onClick={addskill} className="text-blue-500  text-3xl hover:bg-blue-500/20"></CiCirclePlus>
                  <CiCircleMinus onClick={removeskill} className="text-blue-500  text-3xl hover:bg-blue-500/20"></CiCircleMinus>
                </div>
                <h3 className="text-xl font-bold mb-4 text-center mt-8">Hobbies</h3>
                <div className="flex flex-wrap gap-2">
                  {Hobbies.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                  <input type='text' value={hobby} onChange={(e)=>sethobby(e.target.value)} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"></input>
                  <CiCirclePlus onClick={addhobby} className="text-blue-500  text-3xl hover:bg-blue-500/20"></CiCirclePlus>
                  <CiCircleMinus onClick={removehobby} className="text-blue-500  text-3xl hover:bg-blue-500/20"></CiCircleMinus>
                </div>
              </div>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <div className="space-y-4 text-gray-300 h-full">
                <textarea className="w-full h-auto" rows={6} value={formdata.education} onChange={(e)=>setFormdata({...formdata,education:e.target.value})}></textarea>
              </div>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold "> 💼 Work Experience </h3>
              <div className="space-y-4 text-gray-300 h-full">
                <textarea className="w-full h-auto" rows={6} value={formdata.work} onChange={(e)=>setFormdata({...formdata,work:e.target.value})}></textarea>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
     <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
            {
              projects.map((project, key) => (
                <div
                  key={key}
                  className="
                  glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all
                "
                >
                  <h3 className="text-xl font-bold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="
                          bg-blue-500/10 text-blue-500 py-1 px-3 
                          rounded-full text-sm
                          transition
                          hover:bg-blue-500/20 hover:-translate-y-0.5
                          hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                        "
                      >
                        {tech}
                      </span>
                    ))}
                    
                  </div>
                  <div className="flex justify-between items-center">
                    <a
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))
            }
             <div
                  className="
                  glass p-6 rounded-xl border border-white/10 
                  hover:-translate-y-1 hover:border-blue-500/30
                  hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
                  transition-all
                "
                >
                  <input type = 'text' value={project.title} onChange={(e)=>setProject({...project,title:e.target.value})} className="text-xl font-bold mb-2"></input>
                  <textarea value={project.description} onChange={(e)=>setProject({...project,description:e.target.value})}   rows='2' className="text-gray-400 w-full mb-4">
                  </textarea>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {
                      project.technologies.map((tech, key) => (
                        <span
                          key={key}
                          className="
                            bg-blue-500/10 text-blue-500 py-1 px-3 
                            rounded-full text-sm
                            transition
                            hover:bg-blue-500/20 hover:-translate-y-0.5
                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                          "
                        >
                          {tech}
                        </span>
                      ))
                    }
                  <input type='text' value={projectskill} onChange={(e)=>(setProjectskill(e.target.value))} className="bg-blue-500/10 text-blue-500 py-1 px-3  rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"></input>
                  <CiCirclePlus onClick={addprojectskill} className="text-blue-500  text-3xl hover:bg-blue-500/20"></CiCirclePlus>
                  <CiCircleMinus onClick={removeprojectskill} className="text-blue-500  text-3xl hover:bg-blue-500/20"></CiCircleMinus>
                  </div>
                  <div className="flex justify-between items-center">
                    <p
                      onClick={(e)=>{alert('Link added')}}
                      className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                    >
                      Add link →
                    </p>
                    <input type="text" value={project.link} onChange={(e)=>setProject({...project,link:e.target.value})}   className="w-2/3 border-blue-900 border-1 text-white p-1 "></input>
                  </div>
                  
                </div>
         
          </div>
             <div className="
                   justify-center items-center flex hover:cursor-pointer my-4
                ">
                <div onClick={addproject} className="flex p-2  space-y-4  text-blue-400 hover:text-blue-600 transition-colors ">
                 <FaPlus className="text-2xl gap-1  "></FaPlus>
                 <h1 className="">Add Project</h1>
                 </div>
                  <div onClick={removeproject} className="flex p-2  space-y-4  text-blue-400 hover:text-blue-600 transition-colors ">
                 <FaMinus className="text-2xl gap-1 "></FaMinus>
                 <h1 className="">RemoveProject</h1>
                 </div>
                </div>
        </div>
      </RevealOnScroll>
    </section>
    </>
  );
};