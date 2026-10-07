

function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop:blur-md z-50">
        <div className="max-w-xl mx-auto px-6 py-4  flex items-center justify-center gap-7">
            <a href="#design" className="hover:text-gray-300">design</a>
            <a href="#camera" className="hover:text-gray-300">camera</a>
            <a href="#performance" className="hover:text-gray-300">performance</a>
            <a href="#cores" className="hover:text-gray-300">cores</a>
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">comprar</button>

        </div>
    </nav>
  )
}

export default NavBar