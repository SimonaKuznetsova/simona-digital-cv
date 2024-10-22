import { useEffect, useState } from "react";
import "../../styles/Background.scss";

const Blob = ({ className, style }) => {
    return (
      <div className={className} style={style}></div>
    );
  };
  
  const Background = ({theme}) => {

    const [innerTheme, setInnerTheme] = useState('light')
    // Функция для случайной генерации позиций и размеров
    const generateBlobStyle = () => {
      const size = Math.random() * 300 + 400; // Размеры от 200 до 400 пикселей
      return {
        // padding: 400,
        width: `calc(${size}px)`,
        height: `calc(${size}px)`,
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        filter: 'blur(100px)',
        opacity: 0.88,
      };
    };

    const DARK_BLOB = 'rgba(22, 29, 25, 0.705)';
    const LIGHT_BLOB = '#ffc49e';

    // useEffect(() => {
    //   setTimeout(() => {
    //     setInnerTheme(theme)
    //   }, 1500)
    // }, [theme])

    // const theme = 'light';
  
    return (
      // <div className="background">
      //   <Blob className="blob" style={generateBlobStyle()} />
      //   <Blob className="blob" style={generateBlobStyle()} />
      //   <Blob className="blob" style={generateBlobStyle()} />
      //   <Blob className="blob" style={generateBlobStyle()} />
      //   <Blob className="blob" style={generateBlobStyle()} />

      //   <Blob className="blob" style={generateBlobStyle()} />
      //   <Blob className="blob" style={generateBlobStyle()} />
      // </div>

      <div className="background">
        <Blob className="blob blob-group-1" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-2" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-3" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-4" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-1" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-3" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-2" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-4" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-1" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>

        <Blob className="blob blob-group-1" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-2" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-3" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-4" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-1" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-3" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-2" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-4" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
        <Blob className="blob blob-group-1" style={{...generateBlobStyle(), backgroundColor: innerTheme==='dark' ? DARK_BLOB : LIGHT_BLOB}}/>
      </div>
    );
  };

  export default Background;