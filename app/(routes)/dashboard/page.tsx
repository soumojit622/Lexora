"use client"
import React, { useEffect } from 'react'
import Header from './components/Header'
import { useConvex, useMutation } from 'convex/react';
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs';
import { api } from '@/convex/_generated/api';
import FileList from './components/FileList';

const DashboardPage = () => {
    const convex = useConvex();
    const { user }: any = useKindeBrowserClient();
    //const getUser=useQuery(api.user.getUser,{email:user?.email});

    const createUser = useMutation(api.user.createUser);
    useEffect(() => {
        if (user) {
            checkUser()
        }
    }, [user])


    const checkUser = async () => {
        const result = await convex.query(api.user.getUser, { email: user?.email });
        if (!result?.length) {
            createUser({
                name: user.given_name,
                email: user.email,
                image: user.picture
            }).then((resp) => {
                console.log(resp)
            })
        }

    }
    return (
        <div className='p-8'>
            <Header />

            <FileList />
            {/* <AdBanner
                data-ad-slot="4796371341"
                data-ad-format="auto"
                data-full-width-responsive="true"
            /> */}
        </div>
    )
}

export default DashboardPage