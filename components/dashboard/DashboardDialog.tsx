"use client";

import { X } from "lucide-react";
import Image from "next/image";
import React from "react";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog";

export interface DialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
  title: string;
  description: string;
  buttonText: string;
  actionType: string;
  action: (id: string) => void;
  actionParam: string;
}

const DashboardDialog = ({
  open,
  setOpen,
  title,
  description,
  buttonText,
  actionType,
  action,
  actionParam,
}: DialogProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="border-none bg-white">
        <AlertDialogHeader className="items-center">
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="absolute right-4 top-4"
          >
            <X className="size-4" />
          </button>
          <Image
            src={
              actionType === "accept"
                ? "/assets/images/dashboard/accept.svg"
                : "/assets/images/dashboard/deny.svg"
            }
            alt="dialog image"
            width={110}
            height={110}
          />
          <AlertDialogTitle className="text-2xl font-semibold text-dark-400">
            {title}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-center">
            {description}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <button
            className={`${actionType === "accept" ? "button-accept" : "button-deny"} w-full rounded-lg`}
            onClick={() => action(actionParam)}
          >
            {buttonText}
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DashboardDialog;
