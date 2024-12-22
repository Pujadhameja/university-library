import { cn, getInitials } from "@/lib/utils";

interface AvatarProps {
  name: string;
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  textColor?: string;
}

const sizeClasses = {
  sm: "size-8 text-xs",
  md: "size-10 text-sm",
  lg: "size-20 text-base",
};

const Avatar: React.FC<AvatarProps> = ({
  name,
  size = "md",
  bgColor = "bg-blue-500",
  textColor = "text-white",
}) => {
  const initials = getInitials(name);

  return (
    <div
      className={cn(
        sizeClasses[size],
        bgColor,
        textColor,
        "rounded-full flex items-center justify-center font-semibold"
      )}
    >
      {initials}
    </div>
  );
};

export default Avatar;
