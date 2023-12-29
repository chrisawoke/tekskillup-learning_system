import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req){
    const res = NextResponse.next();

    // create a client cookies & prevent the the session/ cookies from expering
    const supabase = createMiddlewareClient({req, res});
    
    //update the cookies in server component n refresh if it expires
    await supabase.auth.getSession();
    
    return res;
}