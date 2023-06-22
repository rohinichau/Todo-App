import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import Modal from "@mui/material/Modal";
import { Grid, IconButton, TextField } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
interface TaskListProps {
  task: Task[];
  handleClick: (title: string, subTask: string, description: string) => void;
}

interface Task {
  id: string;
  title: string;
  status: string;
  subTask: {}[];
  description: string;
}
export default function CreateTodo({ task, handleClick }: TaskListProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: any = new FormData(event.currentTarget);

    if (
      data.get("title").trim() === "" ||
      data.get("description").trim() === ""
    ) {
      alert("Please enter the title and description of task");
    } else {
      const checkDuplicate = task.some(
        (item: { title: string }) => item.title === data.get("title")
      );

      if (checkDuplicate) {
        alert("Title of task already exist. Please add unique title.");
      } else {
        handleClick(
          data.get("title"),
          data.get("subtask"),
          data.get("description")
        );
        handleClose();
      }
    }
  };

  return (
    <div>
      <Button
        data-cy="createTask"
        color="warning"
        variant="contained"
        onClick={handleOpen}
      >
        Create Task
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} component="form" noValidate onSubmit={handleSubmit}>
          <IconButton sx={{ float: "right" }} onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <TextField
            margin="normal"
            data-cy="title"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
          />
          <TextField
            margin="normal"
            fullWidth
            id="subtask"
            data-cy="subTask"
            label="SubTask"
            name="subtask"
            autoComplete="subtask"
            autoFocus
          />
          <TextField
            margin="normal"
            data-cy="description"
            required
            fullWidth
            name="description"
            label="Description"
            autoFocus
            id="description"
            autoComplete="description"
          />

          <Button
            type="submit"
            data-cy="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
          <Grid container></Grid>
        </Box>
      </Modal>
    </div>
  );
}
