import Image from "next/image"
import Link from "next/link"

const navbar = () => {
  return (
    <div className="p-4 py-2 pr-8 flex w-full justify-between text-white border-b-2 fixed">
        <Link href="/">
            <Image src="/LUEG LOGO.png" height={60} width={65}/>
        </Link>
        <div className="flex items-center gap-8">
            <button className="w-20 rounded-md border-2 border-orange-500 text-orange-500 p-1 px-2">Donate</button>
            <button className="w-20 rounded-md border-2 border-orange-500 bg-orange-500 p-1 px-2">Join</button>
        </div>
    </div>
  )
}

export default navbar