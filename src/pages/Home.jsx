import { Button, Row, Col, Container, Card, Image, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HOC from '../components/HOC';
import './../style/home.css';
import Navs from '../components/Navs';
import Frame1 from '../assets/image/bg/Frame1.png';
import Frame2 from '../assets/image/bg/Frame2.png';
import Frame3 from '../assets/image/bg/Frame3.png';
import Frame4 from '../assets/image/bg/Frame4.png';
import pict1 from '../assets/image/opportunity/Group1.png';
import pict2 from '../assets/image/opportunity/Group2.png';
import pict3 from '../assets/image/opportunity/Group3.png';
import Carbs from '../assets/image/icon/Carbs.png';
import Temp from '../assets/image/icon/Temp.png';
import Pict from '../assets/image/picture.png';
import Footer from '../assets/image/Footer.png';
import Sawi from '../assets/image/sayuran/sawi.png';
import Wortel from '../assets/image/sayuran/wortel.png';
import Brokoli from '../assets/image/sayuran/brokoli.png';
import Tomat from '../assets/image/sayuran/tomat.png';
import Jagung from '../assets/image/sayuran/jagung.png';
import Terong from '../assets/image/sayuran/terong.png';
import IG from '../assets/image/icon/IG.png';
import TW from '../assets/image/icon/TW.png';
import YT from '../assets/image/icon/YT.png';
import Contact from '../assets/image/icon/contact.png';
import { SAWI } from '../routes';

const Home = () => {
  return (
    <>
    <Navs />
    <body>
    <HOC>
      <img src={Frame1} alt="frame1" className="frame1" />
      <div className="judul">
        <p> Bertani Bergenerasi </p>
      </div>
      <div className="subtitle">
        <p> Bertani mudah dan menyenangkan dengan mengetahui cara dan tahapan yang benar </p>
      </div>
      <Button variant="success" className="startnow">
        <div className="start">Start Now</div>
      </Button>
      <img src={Frame2} alt="frame2" className="frame2" />
      <div className="subs">
        <p> New Opportunities </p>
      </div>
      <div className="subs1">
        <p> Produksi sendiri kebutuhan sayur dan buahmu Kini bercocok tanam bisa dari rumah</p>
      </div>
      <Row>
        <Col>
          <img src={pict1} className="rounded float-start pict1" alt="Pict1" />
        </Col>
        <Col>
          <img src={pict2} className="rounded mx-auto d-block pict2" alt="Pict2" />
        </Col>
        <Col>
          <img src={pict3} className="rounded float-end pict3" alt="Pict3" />
        </Col>
      </Row>
      <img src={Frame3} alt="frame3" className="frame3" />
      <div className="ket">
        <div className="card-header">Pengalaman Berkebun</div>
        <div className="card-header">&</div>
        <div className="card-header">Merawat Tanaman</div>
        <div className="card-body">
          <img alt="Carbs" src={Carbs} width="30" height="30" className="card-title" /> Bertanam Sayuran
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br></br>Sed elementum orci nec justo hendrerit, vel suscipit ligula consequat.
          </p>
          <img alt="Temp" src={Temp} width="30" height="30" className="card-title" /> Perawatan Tanaman
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br>Sed elementum orci nec justo hendrerit, vel suscipit ligula consequat.
          </p>
        </div>

        <div className="card-body2">
          <img alt="Pict" src={Pict} width="400px" height="400px" />
        </div>
      </div>
      <img src={Frame4} alt="frame4" className="frame4" />
      <div className="text-center pilih">
        <div className="pilih1">
          <h1> Pilih Jenis Sayuranmu</h1>
        </div>
        <Container>
          <Row>
            <Col md={4}>
              <NavLink to={SAWI}>
                <Card className="text-dark text-center sayuran">
                  <Image src={Sawi} alt="Sawi" />
                  <div className="bg-light">
                    <Card.Title> Sawi </Card.Title>
                  </div>
                </Card>
              </NavLink>
            </Col>
            <Col md={4}>
              <Card className="text-dark text-center sayuran">
                <Image src={Wortel} alt="Wortel" />
                <div className="bg-light">
                  <Card.Title> Wortel </Card.Title>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-dark text-center sayuran">
                <Image src={Brokoli} alt="Brokoli" />
                <div className="bg-light">
                  <Card.Title> Brokoli </Card.Title>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-dark text-center sayuran">
                <Image src={Tomat} alt="Tomat" />
                <div className="bg-light">
                  <Card.Title> Tomat </Card.Title>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-dark text-center sayuran">
                <Image src={Jagung} alt="Jagung" />
                <div className="bg-light">
                  <Card.Title> Jagung </Card.Title>
                </div>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="text-dark text-center sayuran">
                <Image src={Terong} alt="terong" />
                <div className="bg-light">
                  <Card.Title> Terong </Card.Title>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <footer>
        <img src={Footer} alt="footers" className="footers" />
        <Form>
          <div className="formemail">
            <input type="text" className="email" placeholder="Email Address" id="input" />
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
        </Form>
        <div className="contact">
          <button type="submit" className="contact">
            Contact <img src={Contact} alt="ig" width="20px" height="20px" />
          </button>
        </div>
      </footer>
    </HOC>
    </body>
    </>
  );
};
export default Home;
