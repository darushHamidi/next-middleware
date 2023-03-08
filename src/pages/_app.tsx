import '@mtr/styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link'
import { getCookies, setCookie, deleteCookie, hasCookie } from 'cookies-next';
import { useRouter } from 'next/router';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return <>
    <div className='container-menu'>
      <nav>
        <ul>
          <li>
            <Link href={'/'} prefetch={false}>
              Home
            </Link>
          </li>
          <li>
            <Link href={'/about'} prefetch={false}>
              About
            </Link>
          </li>
          <li>
            <Link href={'/contact'} prefetch={false}>
              Contact
            </Link>
          </li>
          <li>
            <Link href={'/admin'} prefetch={false}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <Component {...pageProps} />
  </>
}
