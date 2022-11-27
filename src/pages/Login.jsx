import './../style/login.css';
import { Link } from 'react-router-dom';
import HOC from '../components/HOC';
import Navslogin from '../components/Navslogin';

const Login = () => {
  return (
      <>
      <Navslogin />
        <body>
      <HOC>
        <div className="bgcolorblur">
        <div className="login">
            <div className="login_container">
                <form>
                    <center>
                        <input type="text" placeholder="Email Address" />
                    </center>
                    <center>
                        <input type="password" placeholder="Password" />
                    </center>
                 <div className="jarak">
                    <center className="link1">
                        <Link to="/lupasandi">
                            <p>Lupa Kata Sandi?</p>
                        </Link>
                    </center>
                    <center className="link2">
                        <Link to="/Register">
                            <p>Belum Punya Akun?</p>
                        </Link>
                    </center>
                </div>
                    <center>
                      <Link to="/Profile">
                        <button type="submit" className='button'>Log In</button>
                      </Link>
                    </center>
                </form>
            </div>
        </div>
        </div>
             </HOC>
        </body>
    </>
  )
};

export default Login;