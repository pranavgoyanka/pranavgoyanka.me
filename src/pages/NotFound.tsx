import Navbar from "../components/Navbar"

const NotFound = () => {
  return (
    <div className="bg-stone-50 dark:bg-stone-950 text-black dark:text- stone-50
    flex justify-center min-h-screen border-t-[5px] border-black text-lg font-sans">
      <div className="mx-3 max-w-[800px] max-h-full w-full">
        <Navbar />
        <h1>Whoops!</h1>
      </div>
    </div>
  )
}

export default NotFound