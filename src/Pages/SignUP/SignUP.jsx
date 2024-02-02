import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const SignUP = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    // const onSubmit = data => {
    //     console.log(data)
    //     createUser(data.email, data.password)
    //         .then(result => {
    //             const loggedUser = result.user;
    //             console.log(loggedUser)
    //             updateUserProfile(data.name, data.photoURL)
    //                 .then(() => {
    //                     console.log('user profile Info Updete')
    //                     reset();
    //                     Swal.fire({
    //                         position: 'top-end',
    //                         icon: 'success',
    //                         title: 'user  Created SuccessFully',
    //                         showConfirmButton: false,
    //                         timer: 1500
    //                     })
    //                     Navigate(from, { replace: true });

    //                 })
    //                 .catch(error => console.log(error))
    //         })
    //         .catch(error => console.log(error))

    // };


    const onSubmit = data => {

        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate(from, { replace: true });
                                }
                            })



                    })
                    .catch(error => console.log(error))
            })
    };
    return (
        <>
            <Helmet>
                <title>Bistro | Sign Up</title>
            </Helmet>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center md:w-1/2 lg:text-left ps-16">
                        <h1 className="text-5xl font-bold">Sign UP now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card -0 md:w-1/2 max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text"  {...register("name", { required: true })} name="name" placeholder="Enter you name" className="input input-bordered" />
                                {errors.name && <span className="text-orange-400 text-sm">This field is Name</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text"  {...register("photoURL", { required: true })} placeholder="Photo URL " className="input input-bordered" />
                                {errors.photoURL && <span className="text-orange-400 text-sm">This field is photoUrl</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} name="email" placeholder="Email" className="input input-bordered" />
                                {errors.email && <span className="text-orange-400 text-sm">This field is Email</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    maxLength: 20,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&%*])(?=.*[0-9])(?=.*[a-z])/
                                })}
                                    name="password" placeholder="password" className="input input-bordered" />
                                {errors.password?.type === 'required' && <span className="text-orange-400 text-sm">This field is Password</span>}
                                {errors.password?.type === 'minLength' && <span className="text-orange-400 text-sm">Password Must be Minmam 6 Characters</span>}
                                {errors.password?.type === 'maxLength' && <span className="text-orange-400 text-sm">Password Must be Mexmam 20 Characters</span>}
                                {/* {errors.password?.type ==='maxLength' && <span className="text-orange-400 text-sm">Password Must be Mexmam 20 Characters</span>} */}
                                {errors.password?.type === 'pattern' && <span className="text-orange-400 text-xs">Password must have one Uppercase one lower case, one number and one special character.</span>}


                            </div>

                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <div className="text-center -mt-4 mb-4">
                            <p><small>Already have an account? try  <Link className="text-orange-400" to="/login">Login</Link></small></p>
                            <SocialLogin></SocialLogin>
                        </div>
                    </div>
                </div>

            </div>

        </>
    );
};

export default SignUP;