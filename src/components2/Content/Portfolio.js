import React, { useCallback, useState } from "react";
import "../../styles/Portfolio.scss";
import ReactIcon from "../ReactIcon/ReactIcon";
import ImageViewer from 'react-simple-image-viewer';

const Skills = ({ active, setCurrentProject, setCurrentImage, setIsViewerOpen, currentImage, currentProject }) => {

  const reactItems = [
    {
      title: 'EMDR Bridge',
      images: [
        require('../../img/portfolio/folio-emdr3.png'),
        '../../img/portfolio/folio-emdr2.png',
        '../../img/portfolio/folio-emdr.png',
      ],
      description: 'The application was developed to connect therapists with their clients and to facilitate various homework assignments, allowing therapists to share these tasks with their clients for completion.',
      role: 'UI Partial Development',
    },
    {
      title: 'Wooder',
      images: [
        require('../../img/portfolio/folio-wooder3.png'),
      ],
      description: 'the furniture and wood décor high standard. Creating modern designs. Adhering to the global quality standards.',
      role: 'UI Full Development',
    },
    {
      title: 'FreightLife',
      images: [
        require('../../img/portfolio/folio-fl3.png'),
      ],
      description: 'Start to Finish Visibility, Freight Life Package, Live GPS Tracking, Invoicing Support, Paperless',
      role: 'Full Development',
    },
    {
      title: 'SSLMemo',
      images: [
        require('../../img/portfolio/folio-ssl.png'),
      ],
      description: `Don't forget to renew your SSL certificate. This tool will help you to not make your customers see an error on your website`,
      role: 'Full Development',
    },
  ]

  const reactNativeItems = [
    {
      title: 'FitPro',
      images: [
        require('../../img/portfolio/folio-fitpro.png'),
      ],
      description: 'The application was developed to connect therapists with their clients and to facilitate various homework assignments, allowing therapists to share these tasks with their clients for completion.',
      role: 'Full Development',
    },
    {
      title: 'Caro Inspection',
      images: [
        require('../../img/portfolio/folio-caro.png'),
      ],
      description: 'the furniture and wood décor high standard. Creating modern designs. Adhering to the global quality standards.',
      role: 'Partial Development',
    },
    {
      title: 'Black Girl Motivation',
      images: [
        require('../../img/portfolio/folio-bgm.png'),
      ],
      description: 'Start to Finish Visibility, Freight Life Package, Live GPS Tracking, Invoicing Support, Paperless',
      role: 'Minor Development',
    },
    {
      title: 'Birdiescope',
      images: [
        require('../../img/portfolio/folio-birdiescope3.png'),
      ],
      description: `Don't forget to renew your SSL certificate. This tool will help you to not make your customers see an error on your website`,
      role: 'Minor Development',
    },
  ]

  // const [currentProject, setCurrentProject] = useState(null);
  // const [currentImage, setCurrentImage] = useState(0);
  // const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index, images) => {
    setCurrentProject(images); // Сохраняем текущий проект
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  return (
    <div className="Portfolio">
      <div className="box">
        <div className="wrapper">
          <div className="col1">
            <div className="label">React</div>

            <div className="itemsWrap">
              {reactItems.map(item => {
                return (
                  <div className="item">
                    <div className="itemTitle">{item.title}</div>
                    <div className="itemRole">{item.role}</div>
                    {item.images[0] && <div className="itemImage" style={{backgroundImage: `url(${item.images[0]})`}}>
                      <ReactIcon label="eye" className="eye-icon" handleClick={() => openImageViewer(0, item.images)}/>
                      </div>}
                  </div>
                )
              })}
            </div>
          </div>
          <div className="col2">
            <div className="label">React Native</div>

            <div className="itemsWrap">
              {reactNativeItems.map(item => {
                return (
                  <div className="item">
                    <div className="itemTitle">{item.title}</div>
                    <div className="itemRole">{item.role}</div>
                    {item.images[0] && <div className={`itemImage ${item.title}`} style={{backgroundImage: `url(${item.images[0]})`}}>
                      <ReactIcon label="eye" className="eye-icon" handleClick={() => openImageViewer(0, item.images)}/>
                      </div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* {isViewerOpen && (
        <ImageViewer
          closeOnClickOutside={true}
          src={currentProject} // Массив изображений
          currentIndex={currentImage} // Текущий индекс
          onClose={() => setIsViewerOpen(false)} // Закрыть просмотрщик
        />
      )} */}
    </div>
  );
};

export default Skills;
