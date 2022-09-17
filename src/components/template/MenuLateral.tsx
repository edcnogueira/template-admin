import { BellIcon, HomeIcon, SettingsIcon } from "../icons";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <div
        className={`
        flex flex-col items-center justify-center
        bg-pink-600
        h-20 w-20
      `}
      >
        <Logo />
      </div>
      <ul>
        <MenuItem url="/" texto="Início" icone={HomeIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={SettingsIcon} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={BellIcon} />
      </ul>
    </aside>
  );
}
