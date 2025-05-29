export interface TaskItem {
  title: string;
  description?: string;
  dueDate: string;
  id: string;
}

export interface NewTaskItem {
  title: string;
  description?: string;
  dueDate: string;
}