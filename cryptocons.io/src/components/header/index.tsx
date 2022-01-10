import Logo from './logo'
import ThemeButton from './theme-button'

export const Header = () => {
  return (
    <header className="flex justify-between h-14 items-center px-5 border-b border-slate-200 dark:border-slate-800">
      <Logo />
      <div>
        <ThemeButton className="w-7 h-7 dark:hover:bg-slate-800 hover:bg-slate-100 rounded-md items-center flex justify-center" />
      </div>
    </header>
  )
}
