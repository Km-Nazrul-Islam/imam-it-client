import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';

const SignUp = () => {
    const [error, setError] = useState(null)
    const { createUser, providerLogin, verifyEmail } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider()

    const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate('/')
            })
            .catch(error => console.error(error))
    }


    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm)

        if(password.length < 6 ){
            setError('Password should be 6 characters or more')
            return;
        }

        if(password !== confirm){
            setError('Your Password dit not match!!')
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            navigate('/');
            handleEmailVarification();
            toast.success('Please verify your Email')
        })
        .catch(error => console.error(error)) 

        
    }

    const handleEmailVarification = () => {
         verifyEmail()
        .then(() => { })
        .catch(error => console.error(error));
    }

    return (
        <div className='d-flex flex-column w-50'>
            <h2 className='form-title text-center'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='border border-1'>
                <div className="form-control border border-bottom-0">
                    <label className='d-block' htmlFor="email">Email</label>
                    <input className='w-100 my-2' type="email" name="email" required />
                </div>
                <div className="form-control border border-top-0 border-bottom-0">
                    <label className='d-block' htmlFor="password">Password</label>
                    <input className='w-100 my-2' type="password" name="password" required />
                </div>
                <div className="form-control border border-top-0 border-bottom-0">
                    <label className='d-block' htmlFor="confirm">Confirm Password</label>
                    <input className='w-100 my-2' type="password" name="confirm" required />
                </div>
                <input className='w-100 my-2 border border-1' type="submit" value="Sign Up" />
            </form>
            <p className='d-flex justify-content-between'>Already Have An Account ? <Link to="/login">Please Login</Link></p>
            <p className='text-danger'>{error}</p>
            
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} variant='outline-primary'><FaGoogle></FaGoogle> Login With Google</Button>
                <Button variant='outline-dark mt-2'><FaGithub></FaGithub> Login With Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default SignUp;