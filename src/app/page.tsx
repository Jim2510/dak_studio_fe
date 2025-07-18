'use client'
import {FormEvent, useState} from "react";
import {redirect} from "next/navigation";

export default function Home() {
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
      <div className="w-screen min-h-screen flex justify-center items-center bg-black">
        <form onSubmit={handleSubmit} className=' shadow-[#DB4242] shadow-md p-5 bg-white flex flex-col justify-center items-center gap-3 rounded-2xl'>
          <input type="password" className='focus:outline-none border-2 border-black rounded-lg px-2 py-1' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button className='hover:bg-black font-bold tracking-wide hover:tracking-widest cursor-pointer border-2 hover:border-white border-black px-2 py-1 rounded-lg transition-all ease-in-out duration-500 hover:text-white' type="submit">LOGIN</button>
        </form>

      </div>
  );
}
