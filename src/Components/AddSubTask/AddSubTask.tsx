import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import { Grid, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

export default function AddSubTask({
  handleAddSubtask,
}: {
  handleAddSubtask: (label: string) => void;
}) {
  const [open, setOpen] = React.useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: any = new FormData(event.currentTarget);
    if (data.get("title").trim() === "") {
      alert("Please enter sub task title");
    } else {
      handleAddSubtask(data.get("title"));
      handleClose();
    }
  };

  return (
    <div>
      <Button data-cy="createSubTask" onClick={handleOpen}>
        Create SubTask
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
            data-cy="subTaskTitle"
            required
            fullWidth
            id="title"
            label="Sub Task Title"
            name="title"
            autoComplete="title"
            autoFocus
          />

          <Button
            type="submit"
            data-cy="subtaskSubmit"
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
