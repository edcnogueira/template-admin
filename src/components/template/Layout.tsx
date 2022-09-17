import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutPros {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutPros) {
  return (
    <div className={`flex h-screen w-screen`}>
      <MenuLateral />
      <div
        className={`
          flex flex-col w-full p-7 
          bg-gray-500
        `}
      >
        <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
        <Conteudo>{props.children}</Conteudo>
      </div>
    </div>
  );
}
