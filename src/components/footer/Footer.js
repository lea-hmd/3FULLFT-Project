import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <img
          className='footerImg'
          alt='logo'
          src={process.env.PUBLIC_URL + '/img/LMFLogo.png'}
        ></img>
      </footer>
    </>
  );
}
