import './Header.css';

export default function Header() {
  return (
    <>
      <div className='header'>
        <img
          className='headerImg'
          alt='logo'
          src={process.env.PUBLIC_URL + '/img/logo.png'}
        ></img>
      </div>
    </>
  );
}
