"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (type: FormType) => {
  return z.object({
    fullName: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    idNumber: type === "sign-up" ? z.string().min(8) : z.string().optional(),
    password: z.string().min(8),
    idFile: type === "sign-up" ? z.any() : z.any().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      idNumber: "",
      password: "",
      idFile: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted");
    console.log(data);
    if (type === "sign-up") {
      setIsDialogOpen(true);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-semibold text-light-900">
        Create Your Library Account
      </h1>
      <p className="text-light-200">
        Please complete all fields and upload a valid university ID to gain
        access to the library
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="fullName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your full name"
                      {...field}
                      className="bg-gradient-input user-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email address"
                    {...field}
                    className="bg-gradient-input user-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="idNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>University ID Number</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="123456789"
                      {...field}
                      className="bg-gradient-input user-input"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="At least 8 characters"
                    {...field}
                    className="bg-gradient-input user-input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {type === "sign-up" && (
            <FormField
              control={form.control}
              name="idFile"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload University ID Card</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      {...field}
                      className="bg-gradient-input user-input file:text-white"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            className="inline-flex max-h-[56px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-user-primary px-6 py-2 text-dark-800 hover:bg-user-primary"
          >
            Sign Up
          </Button>
        </form>
      </Form>
      <p className="text-center">
        {type === "sign-up" ? "No account yet?" : "Have an account already?"}{" "}
        <Link
          href={type === "sign-up" ? "/sign-in" : "/sign-up"}
          className="text-user-primary font-bold"
        >
          {type === "sign-up" ? "Sign In" : "Sign Up"}
        </Link>
      </p>

      <AlertDialog open={isDialogOpen}>
        <AlertDialogContent className="border-none bg-dark-500">
          <AlertDialogHeader className="items-center">
            <Image
              src="/assets/images/user/user-approval.svg"
              alt="approval"
              width={110}
              height={110}
            />
            <AlertDialogTitle className="text-2xl font-semibold text-light-900">
              Account Pending Approval
            </AlertDialogTitle>
            <AlertDialogDescription className="text-center">
              Your account is awaiting admin approval. You will receive an email
              once your account has been approved.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className="min-h-[56px] w-full bg-user-primary font-bold text-dark-800 hover:bg-user-primary"
              onClick={() => {
                setIsDialogOpen(false);
              }}
            >
              Okay!
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AuthForm;
