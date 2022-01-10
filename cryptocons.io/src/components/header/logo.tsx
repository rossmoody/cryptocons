import Link from 'next/link'
import LogoIcon from './logo-icon'

const Logo = () => (
  <div className="flex gap-3 items-center">
    <Link href="/" passHref>
      <a className="flex items-center">
        <LogoIcon size="28" className="mr-1" />
        <span className="font-extrabold text-lg text-slate-800 dark:text-slate-100">
          cryptocons
          <span className="text-violet-600 dark:text-violet-500">.io</span>
        </span>
      </a>
    </Link>
    <div className="hidden lg:block w-0.5 h-4 bg-slate-200" />
    <div className="hidden lg:block text-xs ">
      <span className="font-medium">👋 Want to help? </span>
      <a href="#">Submit an icon</a>
    </div>
  </div>
)

export default Logo
