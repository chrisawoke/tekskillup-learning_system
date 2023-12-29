"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { supabaseClient } from '@/utils/client';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export default function LoginPge(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null); 
    const [loading, setLoading] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    
    const router = useRouter();

    const supabase = createClientComponentClient();
 
    useEffect(() => {
        const getUser = async () => {
            const {data: {user} } = await supabase.auth.getUser();
            setUser(user);
            setLoading(false);
        }
        getUser();
    }, [])

    const signUpGoogle = async () => {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
          })
    }

    const handleSignIn = async (e) => {
        e.preventDefault();
        try {
            const res = await supabase.auth.signInWithPassword({
             email,
             password
            })

            if(res.data.user){
                setUser(res.data.user)
                setEmail('')
                setPassword('')
                setLoading(true)
                router.push('/student')
            } else if(!res.data.user){
                // alert('wrong credential')
            }
            
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user)

    if(loading){
       return <h1>Loading...</h1>
    }

    return (
        <main className='max-width padding-x padding-y'>
                    <header className='flex items-center gap-2 flex-row'>
                        <Image src='/assets/image/Frame.svg' alt='logo' width='40' height='40' />
                        <Link href='/' className='font-bold text-xl'>Tekskillup</Link>
                    </header>
            <div className="flex-center mt-10 md:mt-0 gap-0 md:gap-x-20">
                <div className='md:w-[40%]'>
                    <div className="md:px-8 lg:px-16">
                        <h1 className="text-gray text-2xl md:text-4xl font-semibold">Sign In</h1>
                        <p className="text-lightGray text-xs md:text-sm mt-2 mb-8">Please fill your detail to access your account.</p>
                        <form onSubmit={handleSignIn}>
                            <label htmlFor="email" className='text-gray text-sm md:text-base'>Email</label>
                            <div className="pb-6 md:pb-8">
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder='tekstillup@example.com'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className='mt-2 w-full p-3 rounded-md border border-lightGray text-gray placeholder:text-gray-100 placeholder:text-sm focus:outline-non'
                                />
                            </div>
                            <label htmlFor="password" className='text-gray text-sm md:text-base'>Password</label>
                            <div className="pt-2 mb-4 relative">
                                <input 
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    placeholder={showPassword ? 'Password': '••••••••'}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className='w-full p-3 rounded-md border border-lightGray text-gray placeholder:text-gray-100 placeholder:text-sm focus:outline-non'
                                />
                                {showPassword ? (
                                    <AiFillEyeInvisible className='absolute right-3 top-6 text-xl cursor-pointer text-lightGray ' onClick={() => setShowPassword(prevState => !prevState)} />) : (
                                    <AiFillEye className='absolute right-3 top-6 text-xl cursor-pointer text-lightGray' onClick={() => setShowPassword(prevState => !prevState)} />
                                )
                                }
                            </div>
                            <div className="flex flex-col sm:flex-row justify-between padding-y text-sm">
                                <div className="sm:flex-center">
                                    <input type="checkbox" />
                                    <label htmlfor="remember" className='ml-2'> Remember Me</label>
                                </div>
                                <Link href='' className='text-primaryColor pt-2 sm:pt-0'>Forgot password</Link>
                            </div>
                            <button type='submit' className="w-full mt-2 mb-4 p-3 rounded-md bg-primaryColor border text-white hover:bg-white hover:text-primaryColor border-primaryColor focus:outline-none text-sm md:text-base">Sign In</button>
                            <button
                                className='border border-lightGray rounded-md p-2.5 w-full flex-center hover:bg-[#a6b3ce] hover:text-black'
                                onClick={() => signUpGoogle()}> 
                                <Image src='/assets/image/Google.svg' alt='logo' width='25' height='25' />
                                <span className='text-gray ml-2 font-medium hover:text-black text-sm md:text-base'>Sign in with google</span>
                            </button>
                            <p className='flex-center pt-4 text-sm'>Don’t have an account?  <Link href='/student/signup' className='text-primaryColor ml-1'> Sign up</Link></p>
                        </form>
                    </div>
                </div>
                <div className="md:w-[60%]">
                    <Image src='/assets/image/Frame 1.svg' alt='logo' width='100' height='100' className='hidden md:block w-full object-contain' />
                </div>
             </div>
        </main>
    )
}