"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import Link from 'next/link'
import Image from 'next/image'
import { supabaseClient } from '@/utils/client';
import { AiFillEyeInvisible, AiFillEye } from 'react-icons/ai'

export default function SignUpPge(){
    const [email, setEmail] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const supabase = createClientComponentClient();
    
    //react-hook-form
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const signUpGoogle = async () => {
        const { data, error } = await supabaseClient.auth.signInWithOAuth({
            provider: 'google',
          })
    }

    const handleSignUp = async (data, e) => {
        e.preventDefault();
        console.log(data)
        try {
            const { data : {user}, error } = await supabase.auth.signUp({
                email: data.email,
                password: data.password,
                options:{
                    data: {
                        first_name: data.firstname,
                        last_name: data.lastName,
                    },
                    //after clicking on confirming email, this redirect user
                    emailRedirectTo: `${location.origin}/auth/callback`
                }
            })
            if (error) {
                alert('Server error: ' + error.message);
                
                // If user already exists with this email
            } else if (user?.identities?.length === 0) {
                alert('A user with this email already exists');
            } else {
                setEmail('')
                setPassword('');
                setFirstname('');
                setLastName('');
                router.push('/student/Signin');
                alert('ckeck your email to confirm your account')
            }

        } catch (error) { 
            console.log(error)
        }

    }

    return (
        <main className='max-width padding-x padding-y'>
            <header className='flex items-center gap-2 flex-row'>
                <Image src='/assets/image/Frame.svg' alt='logo' width='40' height='40' />
                <Link href='/' className='font-bold text-xl'>Tekskillup</Link>
            </header>
            <div className="flex-center gap-0 md:gap-12">
                <div className="md:w-[60%]">
                    <Image src='/assets/image/Frame 1.svg' alt='logo' width='100' height='100' className='hidden md:block w-full object-contain py-10' />
                </div>
                <div className='mt-10 md:mt-0 md:w-[40%]'>
                    <div className="md:px-8 lg:px-16">
                        <h1 className="text-gray text-2xl md:text-4xl font-semibold">Sign Up</h1>
                        <p className="text-lightGray text-xs md:-sm mt-2 mb-8">Please fill your detail to access your account.</p>
                        <form onSubmit={handleSubmit(handleSignUp)}>
                            <label htmlFor="firstname" className='text-gray text-sm md:text-base'>FirstName</label>
                            <div className="pt-2 pb-6">
                                <input 
                                    type="text"
                                    name="firstname"
                                    placeholder='John'
                                    className='w-full p-2 rounded-md border border-lightGray text-gray placeholder:text-gray-100 placeholder:text-sm focus:outline-non'
                                    {...register("firstname", {
                                        required: "enter your name.",
                                        minLength: {
                                            value: 1,
                                            message: "First name cannot be empty."
                                    }
                                    })}
                                />
                                {errors.firstname && <p className="text-red-500">{errors.firstname.message}</p>}
                            </div>
                            <label htmlFor="lastName" className='text-gray text-sm md:text-base'>LastName</label>
                            <div className="pt-2 pb-6">
                                <input 
                                    type="text"
                                    name="lastName"
                                    placeholder='Paul'
                                    className='w-full p-2 rounded-md border border-lightGray text-gray placeholder:text-gray-100 placeholder:text-sm focus:outline-non'
                                    {...register("lastName", {
                                        required: "enter your name.",
                                        minLength: {
                                            value: 1,
                                            message: "First name cannot be empty."
                                    }
                                    })}
                                />
                                {errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}
                            </div>
                            <label htmlFor="email" className='text-gray text-sm md:text-base'>Email</label>
                            <div className="pt-2 pb-6">
                                <input 
                                    type="email"
                                    name="email"
                                    placeholder='tekstillup@example.com'
                                    className='w-full p-2 rounded-md border border-lightGray text-gray placeholder:text-gray-100 placeholder:text-sm focus:outline-non'
                                    {...register("email", {
                                        required: "enter your email.",
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: "Email is not valid."
                                        }
                                    })}
                                />
                                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <label htmlFor="password" className='text-gray text-sm md:text-base'>Password</label>
                            <div className="pt-2 pb-4 relative">
                                 <input 
                                     type={showPassword ? "text" : "password"}
                                     name="password"
                                     placeholder={showPassword ? 'Password': '••••••••'}
                                    className='w-full p-2 rounded-md border border-lightGray text-gray placeholder:text-gray-100 placeholder:text-sm focus:outline-non'
                                    {...register("password", {
                                        required: "enter your password.",
                                        minLength: {
                                            value: 8,
                                            message: "Password should be at-least 8 characters."
                                    }})}
                                />
                                {showPassword ? (
                                    <AiFillEyeInvisible className='absolute right-3 top-5 text-xl cursor-pointer text-lightGray ' onClick={() => setShowPassword(prevState => !prevState)} />) : (
                                    <AiFillEye className='absolute right-3 top-5 text-xl cursor-pointer text-lightGray' onClick={() => setShowPassword(prevState => !prevState)} />
                                )
                                }
                                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                            </div>
                            <button type='submit' className="w-full mt-6 mb-4 p-3 rounded-md bg-primaryColor border text-white hover:bg-white hover:text-primaryColor border-primaryColor focus:outline-none text-sm md:text-base">Sign In</button>
                            <button
                                className='border border-lightGray rounded-md p-2.5 w-full flex-center hover:bg-[#a6b3ce] hover:text-black'
                                onClick={() => signUpGoogle()}> 
                                <Image src='/assets/image/Google.svg' alt='logo' width='25' height='25' />
                                <span className='text-gray ml-2 font-medium  hover:text-black'>Sign in with google</span>
                            </button>
                            <p className='flex-center pt-4 text-sm'>Have an account?  <Link href='/student/Signin' className='text-primaryColor ml-1'> Sign in</Link></p>
                        </form>
                    </div>
                </div>
             </div>
        </main>
    )
}