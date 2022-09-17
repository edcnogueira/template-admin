import { BellIcon, HomeIcon, LogoutIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside className="flex flex-col">
      <div
        className={`
        flex flex-col items-center justify-center
        bg-pink-600
        h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul className="flex-grow">
        <MenuItem url="/" texto="Início" icone={HomeIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={SettingsIcon} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={BellIcon} />
      </ul>
      <ul>
        <MenuItem
          onClick={() => console.log("sair")}
          texto="Sair"
          icone={LogoutIcon}
          className={`
            text-red-800
            hover:bg-red-600 hover:text-white
          `}
        />
      </ul>
    </aside>
  );
}
