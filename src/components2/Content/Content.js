import React, { useEffect, useState } from "react";
import '../../styles/Content.scss';
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Portfolio from "./Portfolio";
import ImageViewer from 'react-simple-image-viewer';

const Content = ({active, theme, setTheme}) => {
  const [currentProject, setCurrentProject] = useState(null);
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  return (
    <>
      {active === 'about' && <About theme={theme} setTheme={setTheme}/>}
      {active === 'skills' && <Work />}
      {active === 'work' && <Skills />}
      {active === 'portfolio' && <Portfolio setCurrentProject={setCurrentProject} setCurrentImage={setCurrentImage}  setIsViewerOpen={setIsViewerOpen}  currentImage={currentImage}  currentProject={currentProject} />}

      {isViewerOpen && (
        <ImageViewer
          closeOnClickOutside={true}
          src={currentProject} // Массив изображений
          currentIndex={currentImage} // Текущий индекс
          disableScroll={true}
          leftArrowComponent={null}
          rightArrowComponent={null}
          onClose={() => setIsViewerOpen(false)} // Закрыть просмотрщик
        />
      )}
    </>
  );
};

export default Content;

