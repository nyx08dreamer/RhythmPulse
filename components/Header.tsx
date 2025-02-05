// componeten Encabezado/Header

"use client";

import { useRouter } from "next/navigation";
import { BiSearch } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { RxCaretLeft, RxCaretRight } from "react-icons/rx";
import { twMerge } from "tailwind-merge";
import Button from "./Button";
import useAuthModal from "@/hooks/useAuthModal";

interface HeaderProps {
    children: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({
    children,
    className
}) => {
    const authModal = useAuthModal();
    const router = useRouter();

    const handleLogout = () => {
        // handle logout in the future / manejar cerra sesion
    }

    return (
        <div className={twMerge(`h-fit bg-gradient-to-b from-purple-900 p-6
        `,
        className
        )}>
            {/*Diseños para Presentacion en Computadoras*/}
            <div className="w-full mb-4 flex items-center justify-between
            ">
                <div className="hidden md:flex gap-x-2 items-center
                ">
                    <button 
                    onClick={()=> router.back()}
                    className="rounded-full bg-black flex items-center 
                    justify-between hover:opacity-75 transition
                    ">
                        <RxCaretLeft className="text-white" size={35}/>
                    </button>

                    <button 
                    onClick={()=> router.forward()}
                    className="rounded-full bg-black flex items-center 
                    justify-between hover:opacity-75 transition
                    ">
                        <RxCaretRight className="text-white" size={35}/>
                    </button>
                </div>

                {/*Diseños para Presentacion en Dispositivos Moviles*/}
                <div className="flex md:hidden gap-x-2 items-center">
                    <button className=" rounded-full p-2 bg-white flex items-center justify-center
                    hover:opacity-75 transition
                    ">
                        <HiHome className="text-black" size={20}/>
                    </button>

                    <button className=" rounded-full p-2 bg-white flex items-center justify-center
                    hover:opacity-75 transition
                    ">
                        <BiSearch className="text-black" size={20}/>
                    </button>
                </div>
                <div className="flex justify-center items-center gap-x-4
                ">
                    <>
                    {/*Diseños para Presentacion Global*/}
                        <div>
                            {/*Redireccion para Crear Cuenta*/}
                            <Button 
                            onClick={authModal.onOpen} 
                            className="bg-transparent text-neutral-300 font-medium 
                            ">
                                Crear Cuenta
                            </Button>
                            {/*Redireccion para Iniciar Sesión*/}
                            <Button
                            onClick={authModal.onOpen} 
                            className="bg-white px-6 py-2
                            ">
                                Iniciar Sesión
                            </Button>
                        </div>
                    </>
                </div>
            </div>
            {children}
        </div>
    );
}

export default Header;