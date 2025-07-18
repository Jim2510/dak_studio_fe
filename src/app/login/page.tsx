'use client'

import {FormEvent, useState} from "react";
import {redirect} from "next/navigation";

export default function LoginPage() {
    const [password, setPassword] = useState<string>('')

    const login = () => {
        if(password === 'DakStudio') {
            redirect('/homepage');
        } else {
            alert('Wrong Password')
        }
    }


    const handleSubmit = async (e: FormEvent)=> {
        e.preventDefault();
        login()
    }

    return (
        <>
        <div className="w-screen min-h-screen flex justify-center items-center bg-black">
            <form onSubmit={handleSubmit} className='p-5 bg-white flex flex-col justify-center items-center'>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
            </form>

        </div>
        </>
    )
}