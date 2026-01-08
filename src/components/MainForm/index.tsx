import { PlayCircleIcon, StopCircleIcon } from "lucide-react";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { Cycles } from "../Cycles";
import { useState } from "react";

export function MainForm() {
  const [taskName, setTaskName] = useState("");

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("deu certo");
  }

  return (
    <form onSubmit={handleCreateNewTask} className="form" action="">
      <div className="formRow">
        <DefaultInput
          labelText="task"
          type="meuInput"
          id=""
          placeholder="Digite algo"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
      </div>

      <div className="formRow">
        <p>Próximo intervalo é de 25min.</p>
      </div>

      <div className="formRow">
        <Cycles />
      </div>

      <div className="formRow">
        <DefaultButton icon={<PlayCircleIcon />} />
        <DefaultButton icon={<StopCircleIcon />} />
      </div>
    </form>
  );
}
