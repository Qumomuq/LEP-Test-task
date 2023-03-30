import './App.css';
import {useState} from "react";

function App() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [password2, setPassword2] = useState("")
    const [isTouched, setIsTouched] = useState([false, false, false])

    const isEmpty = (str) => str.trim().length !== 0
    const isAlphaNumeric = (str) => /(?=^.{8,}$)([A-Za-z0-9]+)$/.test(str)
    const isEmail = (str) => /^(.+)@(.+)\.(.+)$/.test(str)
    const isPass = password === password2

    const valid = () => {
        return !(isAlphaNumeric(password) === false ||
            isEmail(email) === false ||
            isEmpty(username) === false ||
            isEmpty(email) === false ||
            isEmpty(password) === false ||
            isEmpty(password2) === false || isPass === false);
    }

    const handleSubmit = () => {
        alert("Регистрация успешна")
        console.log(username, email, password, password2)
    }

    return (
        <div id='div' className="app">
            <div className="container">
                <p>
                    Регистрация
                </p>
                <div className='form'>
                    <div id='username' className='element'>Никнейм</div>
                    <input
                        id="username"
                        name="username"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)} value={username}/>
                </div>
                {!isTouched[0] || isEmail(email) ? (
                    <div className='error-log'>Некорректная почта</div>
                ) : <div className='error'>Некорректная почта</div>}
                <div className='form'>
                    <div id='email' className='element'>Почта</div>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        onClick={() => setIsTouched([true, ...isTouched.slice(1)])}
                        onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>

                {!isTouched[1] || isAlphaNumeric(password) ? (
                    <div className='error-log'>Некорректный пароль</div>
                ) : <div className='error'>Некорректный пароль</div>}
                <div className='form'>
                    <div id='password' className='element'>Пароль</div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onClick={() => setIsTouched([...isTouched.slice(0, 1), true, ...isTouched.slice(2)])}
                        onChange={(e) => setPassword(e.target.value)} value={password}
                    />
                </div>

                {!isTouched[2] || isAlphaNumeric(password2) ? (
                    <div className='error-log'>Некорректный пароль</div>
                ) : <div className='error'>Некорректный пароль</div>}
                <div className='form'>
                    <div id='password2' className='element'>Подтвердите пароль</div>
                    <input
                        id="password2"
                        name="password2"
                        type="password"
                        onClick={() => setIsTouched([...isTouched.slice(0,2), true])}
                        onChange={(e) => setPassword2(e.target.value)} value={password2}
                    />
                </div>

                <button
                    type="submit"
                    disabled={
                        !valid()
                    }
                    onClick={() => {
                        handleSubmit();
                    }}>
                    Подвердить
                </button>
            </div>
        </div>

    )
}

export default App;
