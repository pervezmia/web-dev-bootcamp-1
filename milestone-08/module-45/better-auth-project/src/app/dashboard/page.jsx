import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';


const DashboardPage = async() => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    console.log("session data in DashBoardPage",session);
    const user = session?.user;
    if(!user) {
        redirect ("/auth/signin");
        return(
            <div>Please Sign in to access the dashboard.</div>
        )
    }
    return (
        <div>
            <h3>This is dashboard page</h3>
        </div>
    );
};

export default DashboardPage;