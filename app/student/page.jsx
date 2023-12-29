"use client"

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link'

const Homepage = () => {
  let router = useRouter()
  const [user, setUser] = useState(null)

  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
        const {data: {user} } = await supabase.auth.getUser();
        setUser(user);
    }
    getUser();
  }, [ supabase.auth]);
  
  const handleLogout = async () =>{
    const {error} =  await supabase.auth.signOut();
    router.push('/');
  }
  


  return (
    <div>
      {user ?
      <>
      <h3>Welcome back, {user?.user_metadata?.first_name}</h3>
      <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
                <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-98 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-300"> You are already logged in</h1>
                    <button 
                        className="bg-red-400 w-full rounded-lg p-3 text-white hover:bg-red-600"
                        onClick={handleLogout}>LogOut</button>
                </div>
            </div>
            </>
            : 
            <>
            <h1>User not logged in</h1>
            <Link href='/'>Go back Home</Link>
            </>
      }
    </div>
  )
}

export default Homepage