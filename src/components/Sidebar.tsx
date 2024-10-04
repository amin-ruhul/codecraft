import Collaborators from "./Modals/Collaborators";
import Chat from "./Modals/Chat";
import Setting from "./Modals/Setting";

function Sidebar() {
  return (
    <div className="w-12 flex flex-col items-center space-y-8">
      <Collaborators />

      <Chat />

      <Setting />
    </div>
  );
}

export default Sidebar;
