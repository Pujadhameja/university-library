"use client";

import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../ui/dialog";
import { Button } from "../../ui/button";

import { cn } from "@/lib/utils";

interface ConfirmationDialogProps {
  variant: "approve" | "deny";
  title: string;
  description: string;
  triggerLabel: string;
  onConfirm: () => void;
  confirmLabel: string;
  iconSrc?: string;
}

const ConfirmationDialog = ({
  variant,
  title,
  description,
  triggerLabel,
  onConfirm,
  confirmLabel,
  iconSrc = "/icons/admin/info.svg",
}: ConfirmationDialogProps) => {
  const isApprove = variant === "approve";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            "font-semibold text-sm shadow-none hover:bg-opacity-70 w-full",
            isApprove
              ? "bg-green-100 text-green-800 hover:bg-green-100/70"
              : "bg-red-100 text-red-800 hover:bg-red-100/70"
          )}
        >
          {triggerLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md flex flex-col items-center justify-center p-6">
        <DialogHeader className="w-full">
          <div
            className={cn(
              "size-28 rounded-full flex justify-center items-center mx-auto",
              isApprove ? "bg-green-400/10" : "bg-red-400/10"
            )}
          >
            <div
              className={cn(
                "size-[70%] rounded-full flex justify-center items-center",
                isApprove ? "bg-green-400" : "bg-red-400"
              )}
            >
              <Image
                src={iconSrc}
                width={30}
                height={30}
                alt="info"
                className="object-contain"
              />
            </div>
          </div>

          <DialogTitle className="text-center pt-5 font-semibold text-xl text-dark-400">
            {title}
          </DialogTitle>
          <DialogDescription className="text-center pt-2.5 text-light-500">
            {description}
          </DialogDescription>
        </DialogHeader>

        <DialogFooter className="w-full mt-5">
          <Button
            type="button"
            className={cn(
              "w-full min-h-14 rounded-xl font-bold text-base text-light-800",
              isApprove
                ? "bg-green-400 hover:bg-green-400/90"
                : "bg-red-400 hover:bg-red-400/90"
            )}
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationDialog;
