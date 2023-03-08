import { getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';

export default function LoginPage() {

    const router = useRouter()

    const login = () => {
        if (hasCookie('user')) {
            router.push('/');
            return;
        }

        setCookie('user', 'DHamidi')
        router.push('/');
    }

    return <div className="layout">
        <h2>Login</h2>

        <button onClick={login}>
            Add User Info To Cookie.
        </button>
    </div>
}