"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

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

const FormSchema = z.object({
  fullName: z.string().min(3, {
    message: "Your name must be at least 3 characters long",
  }),
  email: z.string().email({ message: "Please enter a valid email" }),
  idNumber: z.string().min(8, { message: "Please enter a valid ID number" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  idFile: z.string().url({ message: "Please upload a valid ID file" }),
});

const SignUpForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      fullName: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log("Form submitted");
  }

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
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload University ID Card</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    {...field}
                    className="bg-gradient-input user-input text-white"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="inline-flex max-h-[56px] w-full items-center justify-center gap-2 whitespace-nowrap rounded-md bg-user-primary px-6 py-2 text-dark-800 hover:bg-user-primary"
          >
            Sign Up
          </Button>
        </form>
      </Form>
      <p className="text-center">
        Have an account already?{" "}
        <Link href="/sign-in" className="text-user-primary font-bold">
          Sign In
        </Link>
      </p>
    </div>
  );
};

export default SignUpForm;
