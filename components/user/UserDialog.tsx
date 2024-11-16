import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Image from "next/image";

interface DialogProps {
  open: boolean;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  action: () => void;
}

const UserDialog = ({
  open,
  title,
  description,
  image,
  buttonText,
  action,
}: DialogProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="border-none bg-dark-500">
        <AlertDialogHeader className="items-center">
          <Image src={image} alt="dialog image" width={110} height={110} />
          <AlertDialogTitle className="text-2xl font-semibold text-light-900">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction
            className="button-primary w-full font-bold"
            onClick={action}
          >
            {buttonText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default UserDialog;
