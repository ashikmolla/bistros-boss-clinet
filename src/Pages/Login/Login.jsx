import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import Swal from 'sweetalert2'

const Login = () => {
    // const captchaRaf = useRef();
    const [disable, setDisable] = useState(true);
    const [error, setError] = useState(null)
    const { signIn } = useContext(AuthContext);
    const Navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    useEffect(() => {
        loadCaptchaEnginge(6);
    }
        , [])
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value
        // console.log(email, password)
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                alert('Login have a Success')

                Swal.fire({
                    title: 'Login Have Success',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });

                Navigate(from, { replace: true });
            })
            .catch((error) => {
                setError(error.message);
            });
    }
    const handleCaptcha = (e) => {
        e.preventDefault();
        const user_captcha_value = e.target.value;

        if (validateCaptcha(user_captcha_value)) {
            setDisable(false)
        } else {
            setDisable(true);
        }
    }
    return (

        <>
            <Helmet>
                <title>Bistro | Login</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200 mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left ps-16">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>

                    <div className="card -0 md:w-1/2 max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label ">
                                    <a href="#" className="label-text-alt link link-hover me-10">Forgot password?</a>
                                    <p className='text-orange-400 text-xs'>{error}</p>
                                </label>
                            </div>

                            <div className="form-control">
                                <label className="label  -mt-4">
                                    <LoadCanvasTemplate />
                                </label>
                                <input onBlur={handleCaptcha} type="text" name="captcha" placeholder="type the captcha above" className="input input-bordered" />
                                {/* <button onClick={handleCaptcha} className="btn btn-outline btn-sm mt-2 ">Valided</button> */}

                            </div>
                            {/* TODO mace button for captchsa (disable) */}
                            <div className="form-control mt-6">
                                <input disabled={disable} className="btn btn-primary" type="submit" value="Login" />
                            </div>

                        </form>
                        <p className='text-center -mt-8'><smail> New Here? </smail><Link className='text-orange-400' to='/signUp'> Create an Acounte</Link> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>

            </div>
        </>


    );
};

export default Login;