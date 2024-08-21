import React from "react";
import { Modal, Box, Button } from "@mui/material";

export function CustomModal({ open, onClose, title, children, onSubmit }) {
  return (
    <Modal open={open} onClose={onClose}>
      <Box
        className="modal-box"
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 1,
        }}
      >
        <h3 className="font-bold text-lg">{title}</h3>
        {children}
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          <Button onClick={onSubmit} color="primary" variant="contained">
            SAVE
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
