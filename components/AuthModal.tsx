"use client";

import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";


import Modal from "./Modal";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import useAuthModal from "@/hooks/useAuthModal";
import { useEffect } from "react";

const AuthModal = () => {
    const supabaseClient = useSupabaseClient();
    const router = useRouter();
    const {session} = useSessionContext();
    const { onClose, isOpen } = useAuthModal();

    useEffect(() => {
        if (session) {
            router.refresh();
            onClose();
        }
    }, [session, router, onClose]);

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

    return ( 
        <Modal
            title="Bienvenido" description="Accede a tu Cuenta" 
            isOpen={isOpen} 
            onChange={onChange}
        >
            <Auth 
                magicLink
                theme="dark"
                providers={["github"]}

                supabaseClient={supabaseClient}
                localization={{
                    variables: {
                        sign_in: {
                            email_label: 'Correo Electrónico',
                            email_input_placeholder: 'Correo Electrónico',
                            password_label: 'Contraseña',
                            password_input_placeholder: 'Contraseña',
                            button_label:'Iniciar Sesión',
                            loading_button_label: 'Iniciando Sesión...',
                            social_provider_text: 'Acceder con {{provider}}',
                            link_text: '¿Ya tienes una cuenta? Inicia Sesión',
                        },
                        sign_up: {
                            email_label: 'Correo Electrónico',
                            email_input_placeholder: 'Correo Electrónico',
                            password_label: 'Contraseña',
                            password_input_placeholder: 'Contraseña',
                            button_label:'Crear Cuenta',
                            loading_button_label: 'Creando Cuenta...',
                            social_provider_text: 'Acceder con {{provider}}',
                            link_text: '¿No tienes una cuenta? Regístrate',
                        },
                        forgotten_password: {
                            email_label: 'Correo Electrónico',
                            email_input_placeholder: 'Correo Electrónico',
                            link_text: '¿Olvidaste tu contraseña?',
                            button_label:'Enviar intrucciones para resetear contraseña',
                            loading_button_label: 'Enviando intrucciones...',
                        },
                        magic_link: {
                            email_input_label: 'Correo Electrónico',
                            email_input_placeholder: 'Correo Electrónico',
                            button_label:'Iniciar Sesión',
                            loading_button_label: 'Iniciando Sesión...',
                            link_text: 'Enviar correo para magic link',
                        }
                    }
                }}
                appearance={{
                    theme: ThemeSupa,
                    variables: {
                        default: {
                            colors: {
                                brand: '#404040',
                                brandAccent: '#4c00b0',
                            }
                        }
                    }
                }}
            />
        </Modal>
    );
}

export default AuthModal;