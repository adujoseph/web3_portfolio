// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="John Doe" />

            <div className='header__content'>
                <h1>Hi, I'm Joseph Adu</h1>
                <p>Blockchain Developer, I love smart contracts</p>
                <button className='button'>Get In Touch</button>
            </div>
        </section>
    );
}

export default Header;