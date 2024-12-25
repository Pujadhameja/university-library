"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import {
  IKUploadResponse,
  UploadError,
} from "imagekitio-next/dist/types/components/IKUpload/props";
import { IKImage, IKUpload, IKVideo, ImageKitProvider } from "imagekitio-next";

import config from "@/lib/config";
import { toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

const authenticator = async () => {
  try {
    const response = await fetch(`${config.env.apiEndpoint}/api/auth/imagekit`);

    if (!response.ok) {
      const errorText = await response.text();

      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Authentication request failed: ${error.message}`);
    }

    throw new Error("Unknown error during authentication.");
  }
};

interface Props {
  type: "image" | "video";
  accept: string;
  placeholder: string;
  folder: string;
  variant: "dark" | "light";
  onFileChange: (filePath: string) => void;
}

const FileUpload = ({
  type,
  accept,
  placeholder,
  folder,
  variant,
  onFileChange,
}: Props) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const styles = {
    button:
      variant === "dark"
        ? "bg-dark-300"
        : "bg-light-600 border-gray-100 border",
    placeholder: variant === "dark" ? "text-light-100" : "text-slate-500",
    text: variant === "dark" ? "text-light-100" : "text-dark-400",
  };

  const onError = (err: UploadError) => {
    console.log("Error", err);

    toast({
      title: `${type} upload failed`,
      description: `Your ${type} could not be uploaded. Please try again.`,
      variant: "destructive",
    });
  };

  const onSuccess = (res: IKUploadResponse) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: `${type} uploaded successfully`,
      description: `Your ${type} has been uploaded successfully.`,
    });
  };

  const onValidate = (file: File) => {
    if (type === "image") {
      if (file.size > 20 * 1024 * 1024) {
        toast({
          title: "Max Image Size Exceeded",
          description: "Your Image is too large. Maximum size is 20MB.",
          variant: "destructive",
        });
        return false;
      }
    } else if (type === "video") {
      if (file.size > 1 * 1024 * 1024) {
        toast({
          title: "Max Video Size Exceeded",
          description: "Your Video is too large. Maximum size is 50MB.",
          variant: "destructive",
        });

        return false;
      }
    }

    return true;
  };

  return (
    <ImageKitProvider
      publicKey={config.env.imagekit.publicKey}
      urlEndpoint={config.env.imagekit.urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        fileName="file.png"
        useUniqueFileName={true}
        validateFile={onValidate}
        onUploadStart={() => {
          console.log("Upload started");
        }}
        onUploadProgress={() => {
          console.log("Upload in progress");
        }}
        folder={folder}
        accept={accept}
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
      />

      <button
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            (ikUploadRef.current as HTMLElement)?.click();
          }
        }}
        className={cn("upload-btn", styles.button)}
      >
        <Image
          src="/icons/upload.svg"
          alt="upload-icon"
          width={20}
          height={20}
          className="object-contain"
        />

        <p className={cn("text-base", styles.placeholder)}>{placeholder}</p>

        {file && (
          <p className={cn("upload-filename", styles.text)}>{file.filePath}</p>
        )}
      </button>

      {file &&
        (type === "image" ? (
          <IKImage
            path={file.filePath}
            alt="default-image"
            width={500}
            height={500}
          />
        ) : type === "video" ? (
          <IKVideo
            path={file.filePath}
            controls={true}
            className="h-96 w-full rounded-xl"
          />
        ) : null)}
    </ImageKitProvider>
  );
};

export default FileUpload;
