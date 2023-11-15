import * as React from 'react';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import {Copyright} from '../src/components/signin/SignIn'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, color: "#00457E"}} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: "#00457E",
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

export default function Popup(props: any) {
  const {title, openPopup, setOpenPopup} = props;

  const handleClose = () => {
    setOpenPopup(false);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={openPopup}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          About the Production Line Monitoring project!
        </BootstrapDialogTitle>
        <DialogContent dividers>
        <Typography sx={{textAlign: 'justify', textJustify: 'inter-word', margin: 2}} gutterBottom>
          &emsp;This artificial intelligence-based solution helps manufacturing companies collect production data in real time, optimize processes and improve quality. The system uses small, inexpensive cameras to continuously monitor each step of the manufacturing process. The images from the cameras are processed by image recognition algorithms with the help of AI, on microcontrollers or minicomputers.<br></br>&emsp;The system detects the installation of the part, so it can accurately measure the cycle time of the assembly/production steps, but it can also check the efficiency or quality of an operation. The results are stored in a central database, the data can be displayed immediately or analyzed in detail later.
        </Typography>
        </DialogContent>
        <DialogActions sx={{display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
            }}
        >
            <Copyright sx={{alignItems: "center", color: "#00457E"}}></Copyright>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}