import { Typography } from "@mui/material";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
interface TaskListProps {
  task: Task[];
}

interface Task {
  status: string;
}
export default function Chart({ task }: TaskListProps) {
  const pendingTask: number = task.filter(
    (item: Task) => item.status === "Pending"
  ).length;
  const inProgressTask: number = task.filter(
    (item: Task) => item.status === "In-Progress"
  ).length;
  const completeTask: number = task.filter(
    (item: Task) => item.status === "Completed"
  ).length;

  const data = [
    {
      name: "Task Status",
      Pending: pendingTask,
      "In-Progress": inProgressTask,
      Completed: completeTask,
    },
  ];
  return (
    <div>
      <Typography
        sx={{ fontSize: 14, marginLeft: "40px", fontWeight: "bold" }}
        color="text.secondary"
        gutterBottom
      >
        Graphical representation of task
      </Typography>
      <BarChart width={250} height={250} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Pending" fill="#8884d8" />
        <Bar dataKey="In-Progress" fill="#82ca9d" />
        <Bar dataKey="Completed" fill="#21cd1d" />
      </BarChart>
    </div>
  );
}
