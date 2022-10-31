import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const Login = () => {
    const { signIn, setLoading } = useContext(AuthContext)
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        if (password.length < 6) {
            setError('Password should be 6 characters or more')
            return;
        }
        

        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user)
            form.reset();
            if(user.emailVerified){
                navigate(from, { replace: true });
            }
            else{
                toast.error('Your Email Is Not Verified ! Please Verified')
            }
        })
        .catch(error => console.error(error))
        .finally(() => {
            setLoading(false);
        })
    }
    return (
        <div className='d-flex flex-column w-50'>
            <h2 className='form-title text-center'>Login</h2>
            <form onSubmit={handleSubmit} className='border border-1'>
                <div className="form-control border border-bottom-0">
                    <label className='d-block' htmlFor="email">Email</label>
                    <input className='w-100 my-4' type="email" name="email" required />
                </div>
                <div className="form-control border border-top-0 border-bottom-0">
                    <label className='d-block' htmlFor="password">Password</label>
                    <input className='w-100 my-4' type="password" name="password" required />
                </div>
                <input className='w-100 my-4' type="submit" value="Login" />
            </form>
            <p className='text-danger'>{error}</p>
            <p className='d-flex justify-content-between'>Not A Account ? <Link to="/signup">Create A New Account</Link></p>
        </div>
    );
};

export default Login;