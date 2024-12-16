import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
 
export function Modal(promps) {
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
 
  return (
    
      <div  onClick={handleOpen} >
        {promps.btn}

          {
            promps.arToggle && promps.arId === promps.id?
            <div className="dropdown-modal mt-4">
          <h1 className="standard-h1">{ promps.title }  </h1>
            <p className="standard-p">{promps.paragraph}</p>
        </div>: null
       
          }
        
     
      {/* <Dialog open={open} handler={handleOpen} className="modal-width mx-auto ">
        <DialogHeader className="standard-h1">{ promps.title }</DialogHeader>
        <DialogBody className="standard-p">
        {promps.paragraph}
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="white"
            onClick={handleOpen}
            className="mr-1 bg-red-600"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog> */}
      </div>
    
  );
}

export default Modal;