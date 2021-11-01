import { useState, useEffect, useCallback, useRef } from 'react';
import './Easteregg.css';

export default function UseKonamiCode(targetKey) {
  const [konamiCode, setIsKonami] = useState(false);

  const refIndex = useRef(0);

  const onKeyUpCallback = useCallback((e) => {
    const codes = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    const onKeyUp = ({ key }) => {
      if (refIndex.current === codes.length - 1) {
        setIsKonami(true);
      }
      if (
        key != null &&
        codes[refIndex.current] != null &&
        key.toLowerCase() === codes[refIndex.current].toLowerCase()
      ) {
        refIndex.current++;
      } else {
        refIndex.current = 0;
        setIsKonami(false);
      }
    };
    onKeyUp(e);
  }, []);

  useEffect(() => {
    window.addEventListener('keyup', onKeyUpCallback);
    return () => {
      window.removeEventListener('keyup', onKeyUpCallback);
    };
  }, [onKeyUpCallback]);

  return (
    <>
      {konamiCode ? (
        <div className='cheat'>
          <img
            alt='Ibra Poce Blo'
            src={process.env.PUBLIC_URL + '/img/ibra.png'}
          ></img>
          <button
            className='button'
            onClick={() => {
              setIsKonami(false);
            }}
          >
            Fermer
          </button>
        </div>
      ) : null}
    </>
  );
}
