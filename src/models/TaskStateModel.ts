import type { TaskModel } from "./TaskModel";

export type TaskStateModel = {
  //Controla o Histórico
  tasks: TaskModel[]; //Histórico, MainForm

  //Controla o Timer
  secondsRemaining: number; //CountDown, Histórico, MainForm, Button
  formattedSecondsRemaining: string; //Título, CountDown
  activeTask: TaskModel | null; //CountDown, Histórico, MainForm, Button
  currentCycle: number; //Home

  //Controla as Configurações
  config: {
    workTime: number; // MainForm
    shortBreakTime: number; // MainForm
    longBreakTime: number; // MainForm
  };
};
