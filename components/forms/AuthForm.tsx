"use client";

import { z } from "zod";
import Link from "next/link";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import ImageUpload from "../ImageUpload";

type FormType = "sign-in" | "sign-up";

const authFormSchema = (type: FormType) => {
  const isSignIn = type === "sign-in";

  return z.object({
    fullName: !isSignIn ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    idNumber: !isSignIn ? z.string().min(8) : z.string().optional(),
    password: z.string().min(8),
    file: !isSignIn
      ? z.string().nonempty("Uploading a university ID card is required")
      : z.string().optional(),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const isSignIn = type === "sign-in";

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      idNumber: "",
      password: "",
      file: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log("Form submitted");
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-light-900 text-2xl font-semibold">
        {isSignIn
          ? "Welcome Back to the Bookwise"
          : "Create Your Library Account"}
      </h1>
      <p className="text-light-200">
        {isSignIn
          ? "Access the vast collection of resources, and stay updated"
          : "Please complete all fields and upload a valid university ID to gain access to the library"}
      </p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full space-y-6"
        >
          {!isSignIn && (
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
                      className="gradient-input input"
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
                    className="gradient-input input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isSignIn && (
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
                      className="gradient-input input"
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
                    className="gradient-input input"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {!isSignIn && (
            <FormField
              control={form.control}
              name="file"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Upload University ID Card</FormLabel>
                  <FormControl>
                    <ImageUpload onFileChange={field.onChange} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}

          <Button
            type="submit"
            className="bg-primary text-dark-800 hover:bg-primary inline-flex min-h-14 w-full items-center justify-center rounded-md px-6 py-2 font-bold text-base"
          >
            Sign Up
          </Button>
        </form>
      </Form>

      <p className="text-center text-base font-medium">
        {!isSignIn ? "No account yet? " : "Have an account already? "}

        <Link
          href={!isSignIn ? "/sign-in" : "/sign-up"}
          className="text-primary font-bold"
        >
          {!isSignIn ? "Sign In" : "Sign Up"}
        </Link>
      </p>
    </div>
  );
};

export default AuthForm;
