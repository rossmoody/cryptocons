import Link from 'next/link'
import LogoIcon from './logo-icon'

const Logo = () => (
  <div className="flex gap-3 items-center">
    <Link href="/" passHref>
      <a className="flex items-center">
        <LogoIcon size="28" className="mr-1" />
        <span className="font-extrabold text-lg text-slate-800 dark:text-slate-100">
          cryptocons
          <span className="text-indigo-600 dark:text-indigo-500">.io</span>
        </span>
      </a>
    </Link>
    <div className="hidden lg:block h-4 border-r-2 brdr" />
    <div className="hidden lg:block text-xs ">
      <span className="font-medium">👋 Want to help? </span>
      <a
        href="#"
        className="text-indigo-500 dark:text-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-500"
      >
        Submit an icon
      </a>
    </div>
  </div>
)

export default Logo
