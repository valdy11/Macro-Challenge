import { Col, Container } from 'react-bootstrap';
import HOC from '../components/HOC';
import Navs from '../components/Navs'
import './../style/aboutus.css';
import Logo from '../assets/image/LOGO.png';
import Image17 from '../assets/image/image-17.png';
import IG from '../assets/image/icon/IG.png';
import TW from '../assets/image/icon/TW.png';
import YT from '../assets/image/icon/YT.png';
import Contact from '../assets/image/icon/contact.png';
import Footer from '../assets/image/Footer.png';

const About = () => {
  return (
    <>
    <Navs />
    <body>
    <HOC headerTitle="About us">
      <div className='lb'>
      <Container className='bg'>
        <div>
          <img src={Logo} alt="logo" className="logo1"></img>
          <p className='jdl'>
          HiPlant
          </p>
        </div>
        <div className="isiabout">
          <p>
            Permasalahan alih fungsi lahan khususnya lahan pertanian menjadi daerah-daerah hunian atau pabrik menyebabkan menurunnya jumlah petani Indonesia. Disebabkan petani yang alih profesi menjadi pekerja kantoran atau buruh. Hal ini
            secara signifikan juga mengancam ketahanan pangan dari Indonesia itu sendiri, karena menurunnya jumlah produktivitas sayuran atau buah-buahan.
          </p>
          <Col>
            <img src={Image17} alt="image17" className="image-17" />
          </Col>
        </div>
        <div>
          <h3 className="isiabout2">
            {' '}
            HiPlant hadir menjadi wadah orang-orang yang ingin belajar bercocok tanam di rumah sendiri dengan metode hidroponik dan cocok tanam di lahan sempit. Dengan adanya EcoDent diharapkan masyarakat dapat secara mandiri memproduksi
            bahan pangan, seperti sayur atau buah sehingga tidak bergantung pada nilai impor bahan pangan.
          </h3>
        </div>
        <div>
          <h1 className="visimisi"> Visi Misi </h1>
        </div>
        <div>
          <h3 className="isiabout3">Visi Misi dari EcoDent adalah meningkatkan motivasi masyarakat untuk bercocok tanam di rumah atau lahan sempit. Sehingga tercipta masyarakat yang mandiri memproduksi bahan pangan di rumah.</h3>
        </div>
        <footer>
          <img src={Footer} alt="footer" className="footers" />
          <form>
            <div class="formemail">
              <input type="text" class="email" placeholder="Email Address" id="input" />
            </div>
            <div className="button1">
              <button type="submit" className="button1">
                Sign me Up
              </button>
              <div className="sosmed">
                <a href="https://www.instagram.com/">
                  <img src={IG} alt="ig" width="20px" height="20px" className="IG" />
                </a>
                <a href="https://twitter.com/home">
                  <img src={TW} alt="tw" width="20px" height="20px" href="#" className="TW" />
                </a>
                <a href="https://www.youtube.com/">
                  <img src={YT} alt="yt" width="20px" height="20px" href="#" className="YT" />
                </a>
              </div>
            </div>
          </form>
          <div className="contact">
            <button type="submit" className="contact">
              Contact <img src={Contact} alt="ig" width="20px" height="20px" />
            </button>
          </div>
        </footer>
      </Container>
      </div>
    </HOC>
    </body>
    </>
  );
};
export default About;
