import './../style/register.css';
import HOC from '../components/HOC';
import Navslogin from '../components/Navslogin';
import { Link } from 'react-router-dom';

    const Register = () => {
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
                        <input type='name' className='input' placeholder='Nama Lengkap'/>
                    </center>
                    <center>
                        <input type='email' className='input' placeholder='Email Address'/>
                    </center>
                    <center>
                        <input type='password' className='input' placeholder='Password'/>
                    </center>
                    <center>
                        <input type='password' className='input' placeholder='Konfirmasi Password'/>
                    </center>
                    <center>
                        <Link to='/Login'>
                        <button type='submit' className='button'>Join Us</button>
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

export default Register;