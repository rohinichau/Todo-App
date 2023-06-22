import {
  Button,
  CardActions,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import Card from "@mui/material/Card";

import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";
import { useState } from "react";
import AddSubTask from "../AddSubTask/AddSubTask";

export default function TodoCard(props: any) {
  const [subtask, setSubtask] = useState(props.data.subTask);
  const handleDelete = (id: string) => {
    const tempTask = props.task.filter(
      (item: { id: string }) => item.id !== id
    );
    const tempLayout = props.layout.filter(
      (item: { i: string }) => item.i !== id
    );
    props.setTask(tempTask);
    props.setLayout(tempLayout);
  };

  const handleChange = (e: any, id: string) => {
    let sampleArray = [];
    for (let item of subtask) {
      if (item.id === id) {
        item.checked = e.target.checked;
        sampleArray.push(item);
      } else {
        sampleArray.push(item);
      }
    }
    setSubtask(sampleArray);
  };
  const handleAddSubtask = (label: string) => {
    const arrayOfIds = [];
    for (let i of subtask) {
      arrayOfIds.push(parseInt(i.id));
    }
    const tempId: number =
      arrayOfIds.sort((a: number, b: number) => a - b)[arrayOfIds.length - 1] +
      1;

    const sample = { id: tempId, label: label, checked: false };
    setSubtask([...subtask, sample]);
    const sampleTaskData = [];
    for (let item of props.task) {
      if (props.data.id === item.id) {
        item.subTask = [...subtask, sample];
        sampleTaskData.push(item);
      } else {
        sampleTaskData.push(item);
      }
    }
    props.setTask(sampleTaskData);
  };

  return (
    <>
      <Card
        sx={{
          height: 300,
          width: 275,
          backgroundColor: "#ffcc80",
          overflow: "auto",
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Title: {props.data.title}
          </Typography>
          <Typography sx={{ fontSize: 14 }} component="div">
            Subtask:{" "}
            {
              <div style={{ height: "120px", overflowY: "auto" }}>
                <FormGroup>
                  {subtask.map(
                    (item: { id: string; label: string; checked: boolean }) => (
                      <FormControlLabel
                        control={
                          <Checkbox
                            checked={item.checked}
                            onChange={(e: React.FormEvent<HTMLInputElement>) =>
                              handleChange(e, item.id)
                            }
                          />
                        }
                        label={item.label}
                      />
                    )
                  )}
                </FormGroup>
              </div>
            }
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary">
            Status: {props.data.status}
          </Typography>
          <Typography sx={{ fontSize: 14 }}>
            Description : {props.data.description}
          </Typography>

          <CardActions sx={{ position: "sticky", bottom: "0px" }}>
            <AddSubTask handleAddSubtask={handleAddSubtask} />
            <Button
              size="small"
              data-cy="delete"
              onClick={() => handleDelete(props.data.id)}
            >
              Delete
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
}
