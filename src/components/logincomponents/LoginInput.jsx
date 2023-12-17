import React, {useState, useRef} from 'react'
import PropTypes from 'prop-types';

const LoginInput = ({login}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    const onUsernameChangeHandler = (event) => {
        setFormData({
            ...formData, 
            username: event.target.value
        })
    }

    const onPasswordChangeHandler = (event)  => {
        setFormData({
            ...formData, 
            password: event.target.value
        })
    }

    const validateForm = () => {
        const {username, password} = formData; 

        if (!username || !password) {
            alert("silahkan isi semua field"); 
            return false;
        }
        return true
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        if (validateForm()) {
            login(formData);
        }
    }

    return (
        <div className='bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 min-h-screen flex flex-col items-center'>
            <form onSubmit={onSubmitHandler}>
                <div className='my-40'>
                    <div className='bg-white/50 backdrop-blur-lg shadow-xl px-10 py-5 rounded-lg w-auto flex flex-col items-center'>
                        
                        <div className='mb-5'>
                            <h1 className='text-xl font-semibold text-sky-900'>login form</h1>
                            <hr />
                        </div>

                        <div className='mb-5'>
                            <div className='mb-1 text-sky-900 text-lg'>
                                <label htmlFor="username">username</label>
                            </div>
                            <div>
                                <input className='w-60 px-2 py-2 rounded-md' type="text" placeholder='masukan username' value={formData.username} onChange={onUsernameChangeHandler}/>
                            </div>
                        </div>

                        <div>
                            <div className='mb-1 text-sky-900 text-lg'>
                                <label htmlFor="password">password</label>
                            </div>
                            <div>
                                <input className='w-60 px-2 py-2 rounded-md' placeholder='masukan password' type="password" value={formData.password} onChange={onPasswordChangeHandler} />
                            </div>
                        </div>

                        <div>
                            <button className='bg-indigo-500 px-10 py-3 rounded-lg mx-5 my-5 items-center shadow-lg text-white font-semibold' type='submit'>Login</button>
                        </div>

                    </div>
                </div>
            </form>
        </div>
    )
}

LoginInput.propTypes = {
    login: PropTypes.func.isRequired,
}

export default LoginInput
