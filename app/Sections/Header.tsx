import Image from "next/image";
import Link from "next/link";


const NavLink =  ({title}) => (
    <Link className="base-bold text-p4 uppercase transition-colors duration-500 cursor-pointer hover:text-p1
    max-lg:my-4 max-lg:h5" href={`/${title}`}>{title}</Link>
)
const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full py-10">
            <div className="container flex h-14 items-center max-lg:px-5">
                <a className="lg:hidden flex-1 cursor-pointer z-2">
                    <Image src="/images/xora.svg" alt="logo" width={115} height={115} />
                </a>

                <div className="w-full border-2 border-amber-100">
                   <nav>
                       <ul className="flex max-lg:block max-lg:px-12 ">
                           <li className="nav-li">
                               <NavLink title="features"/>
                               <div className="dot"/>
                               <NavLink title="pricing"/>
                           </li>
                           <li className="nav-logo">
                               <Link href="/">
                                   <Image src="/images/xora.svg" alt="logo" width={160} height={55} />
                               </Link>
                           </li>
                           <li className="nav-li">
                               <NavLink title="faq"/>
                               <div className="dot"/>
                               <NavLink title="download"/>
                           </li>
                       </ul>
                   </nav>

                </div>
            </div>
        </header>
    )
}
export default Header
