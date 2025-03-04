// Vista Principal/Inicio 

import getSongs from "@/actions/getSongs";
import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

import PageContent from "./components/PageContent";

export const revalidate = 0;

// Apartado para visualizar nuevas canciones y artistas
export default async function Home() {
  const songs = await getSongs();

  return (
    <div className="bg-neutral-900 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      {/*Encabezado de la Pagina*/}
      <Header>
        <div className="mb-2">
          <h1 className="text-white text-3xl font-semibold">
            Bienvenido
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4
          gap-3 mt-4
          ">
            {/* Apartado para ver las canciones a las que se da Me Gusta*/}
            <ListItem image="/images/liked.png"
            name="Liked Songs"
            href="liked"
            />
          </div>
        </div>
      
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Nuevas Canciones
          </h1>
        </div>
        <PageContent songs={songs}/>
      </div>
    </div>
  );
}
