export interface Task {
    title: string;
    date: Date;
    tag: string;  
    isEditing: boolean;
    isCompleted: boolean;
  }
  
  export interface TaskList {
    id: number;
    title: string;
    userId : number;
    tasks: Task[]; 
  }
  
  export interface Board {
    id: number;
    name: string;
    userId : number;
    taskLists: TaskList[];
  }
  export interface BackendTask {
    title: string;
    date: Date;
    tag: string;
    isCompleted: boolean;
  }
  