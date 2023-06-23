import React, { useContext, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import TodoCard from "../TodoCard/TodoCard";
import "./DraggableCard.css";
import CreateTodo from "../CreateTodo/CreateTodo";
import { TodoContextType, todoContext } from "../../App";
import Chart from "../Chart/Chart";

export interface Task {
  id: string;
  title: string;
  status: string;
  subTask: {}[];
  description: string;
}
export interface Layout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

const DraggableCard = () => {
  const SampleData = useContext(todoContext) as TodoContextType;

  const [task, setTask] = useState<Task[]>([...SampleData.TaskData]);

  const [layout, setLayout] = useState<Layout[]>([...SampleData.LayoutData]);

  const handleLayoutChange = (newLayout: Layout[]) => {
    setLayout(newLayout);
    let pend: string[] = [];
    let inProg: string[] = [];
    let complete: string[] = [];
    for (let i of newLayout) {
      if (i.x === 1) {
        inProg = [...inProg, i.i];
        // inProg.push(i.i);
      }
      if (i.x === 2) {
        complete = [...complete, i.i];
        // complete.push(i.i);
      }
      if (i.x === 0) {
        pend = [...pend, i.i];
        // pend.push(i.i);
      }
    }
    let tmp: Task[] = [];
    for (let item of task) {
      if (inProg?.includes(item.id)) {
        item.status = "In-Progress";
        tmp = [...tmp, item];
        // tmp.push(item);
      } else if (complete?.includes(item.id)) {
        item.status = "Completed";
        tmp = [...tmp, item];
        // tmp.push(item);
      } else if (pend?.includes(item.id)) {
        item.status = "Pending";
        tmp = [...tmp, item];
        // tmp.push(item);
      } else {
        tmp = [...tmp, item];
        // tmp.push(item);
      }
    }

    const filteredData: Task[] = tmp.filter(
      (value, index, self) => self.findIndex((v) => v.id === value.id) === index
    );

    setTask(filteredData);
  };

  const handleClick = (title: string, subTask: string, description: string) => {
    const arrayOfIds = [];
    for (let i of layout) {
      arrayOfIds.push(parseInt(i.i));
    }
    const tempId: number =
      arrayOfIds.sort((a, b) => a - b)[arrayOfIds.length - 1] + 1;
    const tempLayout = { i: String(tempId), x: 0, y: 0, w: 1, h: 2 };
    const tempTask = {
      id: String(tempId),
      status: "Pending",
      title: title,
      subTask: [{ id: 1, label: subTask, checked: false }],
      description: description,
    };
    setLayout([...layout, tempLayout]);
    setTask([...task, tempTask]);
  };

  return (
    <div className="mainContainer">
      <div style={{ width: "20%", marginLeft: "50px" }}>
        <Chart task={task} />
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <CreateTodo task={task} handleClick={handleClick} />
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ width: "300px", textAlign: "left" }}>
            <h3 style={{ textAlign: "center" }}>Pending</h3>
            <GridLayout
              className="layout"
              layout={layout}
              cols={3}
              rowHeight={150}
              width={900}
              onLayoutChange={handleLayoutChange}
            >
              {task.map((i) => (
                <div key={i.id}>
                  <TodoCard
                    task={task}
                    setTask={setTask}
                    layout={layout}
                    setLayout={setLayout}
                    data={i}
                  />
                </div>
              ))}
            </GridLayout>
          </div>
          <div style={{ width: "300px", textAlign: "left" }}>
            <h3 style={{ textAlign: "center" }}>In-Progress</h3>
          </div>
          <div style={{ width: "300px", textAlign: "left" }}>
            <h3 style={{ textAlign: "center" }}>Completed</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DraggableCard;
