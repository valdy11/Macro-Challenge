import './../style/profile.css';
import { Link } from 'react-router-dom';
import HOC from '../components/HOC';
import Navslogin from '../components/Navslogin';
// import { image } from 'react-bootstrap';
import user from '../assets/image/bg/user.jpg';

const Profile = () => {
  return (
      <>
      <Navslogin />
        <body>
            <HOC>
                <div>
                <center>
                    <h1 className='profilesaya'>Profile Saya</h1>
                </center>
                </div>
                <center>
                <img src={user} alt="user" className="user"/>
                </center>
                <div>
                    <h6 className='nama'>Michael</h6>
                    <p className='detail'>michael@gmail.com</p>
                    <p className='detail'>(0877-6767-8383)</p>
                </div>
                 <div className="antara">
                     <center>
                       <Link to="/">
                         <button type="submit" className='tombol'>Simpan</button>
                       </Link>
                     </center>
                     {/* <br/> */}
                     <center>
                       <Link to="/">
                         <button type="submit" className='tombol'>Log Out</button>
                       </Link>
                     </center>
                    {/* <center className="link1">
                        <Link to="/lupasandi">
                            <p>Lupa Kata Sandi?</p>
                        </Link>
                    </center>
                    <center className="link2">
                        <Link to="/Register">
                            <p>Belum Punya Akun?</p>
                        </Link>
                    </center> */}
                </div>
             </HOC>
        </body>
    </>
  )
};

export default Profile;