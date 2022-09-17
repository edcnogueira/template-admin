import { BellIcon, HomeIcon, SettingsIcon } from "../icons";
import MenuItem from "./MenuItem";

export default function MenuLateral() {
  return (
    <aside>
      <ul>
        <MenuItem url="/" texto="Início" icone={HomeIcon} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={SettingsIcon} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={BellIcon} />
      </ul>
    </aside>
  );
}
