const Header = () => {
  return (
    <header className="">
        <div className="flex justify-between items-center">
          <h1 className="text-4xl font-medium text-gray-600 cursor-pointer">John Doe</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li><a href="#about" className="links">About</a></li>
              <li><a href="#experience" className="links">Experience</a></li>
              <li><a href="#projects" className="links">Projects</a></li>
              <li><a href="#contact" className="links">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
  )
}

export default Header