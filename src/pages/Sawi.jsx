import HOC from '../components/HOC';
import './../style/artikel.css';
import { Carousel, Tab, Tabs, Card, Col, Container, Row, CardGroup } from 'react-bootstrap';
import Navs from '../components/Navs';

import Slide1 from '../assets/image/slide1.png';
import Slide2 from '../assets/image/slide2.png';
import Slide3 from '../assets/image/slide3.png';
import Netpot from '../assets/image/netpot.png';
import Pupuk from '../assets/image/pupuk.png';
import Benih from '../assets/image/benih.png';
import Pipa from '../assets/image/pipa.png';
import Langkah1 from '../assets/image/langkah1.png';
import Langkah2 from '../assets/image/langkah2.png';
import Langkah3 from '../assets/image/langkah3.png';
import Footer from '../assets/image/Footer.png';
import IG from '../assets/image/icon/IG.png';
import TW from '../assets/image/icon/TW.png';
import YT from '../assets/image/icon/YT.png';
import Contact from '../assets/image/icon/contact.png';

const Sawi = () => {
  return (
      <>
      <Navs />
    <body>
    <HOC headerTitle="Sawi">
      <div className="latarbelakang">
      <h1 className="judulartikel"> Sawi Hidroponik </h1>
      <div className="carousel-container">
        <Carousel variant="dark">
          <Carousel.Item>
            <img className="d-block w-100 artikel" src={Slide1} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 artikel" src={Slide2} alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 artikel" src={Slide3} alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="scroll">
        <Tabs defaultActiveKey="langkah" id="justify-tab-example" className="mb-3" justify>
          <Tab eventKey="langkah" title="Langkah-langkah"></Tab>
          <Tab eventKey="hama" title="Hama dan Penyakit" className="hama"></Tab>
        </Tabs>
      </div>
      <CardGroup></CardGroup>
      <div className="ms-2">
        <h2 className="alatbahan"> Alat dan Bahan </h2>
      </div>
      <div className="card-alat">
        <Container>
          <Row xs={1} md={4} className="g-4">
            <Col>
              <Card className="cardalat">
                <Card.Img variant="top" src={Netpot} alt="Netpot" />
                <Card.Body className="card-body">
                  <Card.Title className="alat">Netpot</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardalat">
                <Card.Img variant="top" src={Pupuk} alt="pupuk" />
                <Card.Body>
                  <Card.Title className="alat">Pupuk</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardalat">
                <Card.Img variant="top" src={Benih} alt="Benih" />
                <Card.Body>
                  <Card.Title className="alat">Benih</Card.Title>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="cardalat">
                <Card.Img variant="top" src={Pipa} alt="Pipa" />
                <Card.Body>
                  <Card.Title className="alat">Pipa</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <div className="ms-2">
            <h2 className="langkah-langkah"> Langkah-Langkah : </h2>
          </div>
          <Card className="langkah">
            <div className="langkah1">
              <Card.Img variant="top" src={Langkah1} className="step" />
              <Card.Body className="step-ket">
                <h2 className="judulgrup"> Menyiapkan Media Tanam </h2>
                <Card.Text>Langkah pertama menyiapkan media tanam hidroponik menggunakan paralon. Lubangi paralon dan beri jarak supaya tanaman bisa tumbuh besar.</Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="langkah-1">
            <div className="langkah2">
              <Card.Img variant="top" src={Langkah2} className="step2" />
              <Card.Body className="step-ket">
                <h2 className="judulgrup"> Menyiapkan rockwol </h2>
                <Card.Text>
                  Langkah kedua adalah menyiapkan rockwoll yang sudah dilubangi dan isi satu benih tiap lubangnya. Kemudian basahi rockwoll menggunakan sprayer/semprotan dengan kekuatan air yang lembut. Letakkan semaian di tempat terbuka
                  dan jaga tetap lembab.
                </Card.Text>
              </Card.Body>
            </div>
          </Card>
          <Card className="langkah-2">
            <div className="langkah3">
              <Card.Img variant="top" src={Langkah3} className="step3" />
              <Card.Body className="step-ket">
                <h2 className="judulgrup"> Menyiapkan netpot </h2>
                <Card.Text>Setelah semaian berdaun 3 atau lebih, maka pindahkan tiap potong rockwoll ke dalam netpot yang sudah diberi flanel (sumbu).</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Container>
        <footer>
          <img src={Footer} alt="footer" className="footer" />
          <form>
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
          </form>
          <div className="contact">
            <button type="submit" className="contact">
              Contact <img src={Contact} alt="ig" width="20px" height="20px" />
            </button>
          </div>
        </footer>
      </div>
      </div>
    </HOC>
    </body>

    </>
  );
};
export default Sawi;
