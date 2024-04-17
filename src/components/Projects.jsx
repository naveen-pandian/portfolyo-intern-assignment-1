import React, { useState, useRef, useEffect } from 'react';

function Projects(props) {
  const [showMiniWindow, setShowMiniWindow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const miniWindowRef = useRef(null);

  const toggleMiniWindow = (project) => {
    setShowMiniWindow(!showMiniWindow);
    if (project) {
      setSelectedProject(project);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (miniWindowRef.current && !miniWindowRef.current.contains(event.target)) {
        setShowMiniWindow(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [miniWindowRef]);

  return (
    <div id='projects' className='flex flex-col justify-center items-center'>
      <div className="text-center font-extrabold mt-20 my-10 text-4xl">PROJECTS</div>
      <div className="box max-w-[900px] flex flex-wrap">
        {props.projects?.map((project, index) => (
          <div key={index} className="relative flex bg-[rgba(0,0,0,0.1)] rounded-[10px] cursor-pointer duration-[0.5s] overflow-hidden h-[200px] w-[250px] grow m-[5px]">
            <span className="absolute h-full w-full bg-pink-400 text-white flex justify-center items-center text-2xl opacity-0 transition-opacity duration-[0.5s] hover:opacity-[0.8] font-extrabold" onClick={() => toggleMiniWindow(project)}>
              {project.title}
            </span>
            <img className="w-full" src={project.image?.url} alt="skill_img" onClick={() => toggleMiniWindow(project)} />
          </div>
        ))}
      </div>
      {showMiniWindow && (
        <div className="fixed z-[15] top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-60">
          <div className="bg- p-4 rounded-lg max-w-[80%]" ref={miniWindowRef} style={{ maxHeight: '80vh', overflowY: 'auto' }}>
            <div className="flex justify-end">
              <button className="text-white bg-red-600 rounded-2xl" onClick={() => toggleMiniWindow(null)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Display the selected project details */}
            {selectedProject && (
              <div>
                <img src={selectedProject.image?.url} alt="selected_image" className="w-full h-full rounded-2xl"/>
                <div className='flex flex-col grow justify-center items-center  p-8 m-4 border border-gray-400 bg-pink-300 rounded-xl'>
                <h2 className='text-white font-extrabold text-2xl' >{selectedProject.title}</h2>
                <p className='text-gray-900 my-[10px] font-extrabold'> " {selectedProject.description} " </p>
                <p className='text-pink-900'>Tech Stack : {selectedProject.techStack.join(', ')}</p>
                <p className='my-4 text-2xl'><a href={selectedProject.githuburl}><ion-icon name="logo-github"></ion-icon> </a>  &nbsp;&nbsp;<a href={selectedProject.liveurl}><ion-icon name="open-outline"></ion-icon></a> </p>
               
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
