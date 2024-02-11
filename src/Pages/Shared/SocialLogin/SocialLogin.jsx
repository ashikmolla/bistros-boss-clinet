import { useContext } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const { googleSignIn } = useContext(AuthContext);
    const handleGooleSignIn = () => {
        googleSignIn()
            .then(result => {
                const data = result.user;
                console.log(data);

                const saveUser = { name: data.name, email: data.email }

                fetch('http://localhost:5000/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
                            navigate(from, { replace: true });
                       
                    })
            })
    }
    return (
        <div className="mb-4">
            <div className="divider"></div>
            <div className="text-center">
                <button onClick={handleGooleSignIn} className="btn btn-circle bg-[#1aa260] text-white  hover:bg-orange-500">
                    <FaGoogle></FaGoogle>
                </button>
                <button className="btn btn-circle bg-orange-600 text-white hover:text-black hover:bg-orange-400">
                    <FaGithub></FaGithub>
                </button>
            </div>

        </div>
    );
};

export default SocialLogin;