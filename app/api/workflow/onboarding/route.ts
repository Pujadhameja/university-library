import { sendEmail } from "@/lib/workflow";
import { serve } from "@upstash/workflow/nextjs";

type InitialData = {
  email: string;
  fullname: string;
};

export const { POST } = serve<InitialData>(async (context) => {
  const { email, fullname } = context.requestPayload;

  console.log("WORKFLOW PAYLOAD", email, fullname);

  await context.run("new-signup", async () => {
    await sendEmail({
      email,
      subject: "Welcome to the platform",
      message: `Hi ${fullname}, welcome to the platform!`,
    });
  });

  await context.sleep("wait-for-3-days", 60 * 60 * 24 * 3);

  while (true) {
    const state = await context.run("check-user-state", async () => {
      return await getUserState();
    });

    if (state === "non-active") {
      await context.run("send-email-non-active", async () => {
        await sendEmail({
          email,
          subject: "Hmm, it's been a while",
          message: `Hi ${fullname}, it's been a while since you last logged in. We hope you're doing well!`,
        });
      });
    } else if (state === "active") {
      await context.run("send-email-active", async () => {
        await sendEmail({
          email,
          subject: "Woah, you're still here!",
          message: `Hi ${fullname}, it's good to see you active and learning new things!`,
        });
      });
    }

    await context.sleep("wait-for-1-month", 60 * 60 * 24 * 30);
  }
});

type UserState = "non-active" | "active";

const getUserState = async (): Promise<UserState> => {
  // Implement user state logic here
  return "non-active";
};
