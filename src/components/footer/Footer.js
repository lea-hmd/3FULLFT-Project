import './Footer.css';

export default function Footer() {
  return (
    <>
      <footer>
        <img alt='logo' src={process.env.PUBLIC_URL + '/img/DMFLogo.png'}></img>
      </footer>
    </>
  );
}
