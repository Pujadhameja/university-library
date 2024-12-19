"use client";

import { useRef, useState } from "react";
import { ImageKitProvider, IKImage, IKUpload } from "imagekitio-next";
import { toast } from "@/hooks/use-toast";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;
const apiEndpoint = process.env.NEXT_PUBLIC_API_ENDPOINT;

const authenticator = async () => {
  try {
    const response = await fetch(`${apiEndpoint}/api/auth`);

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed with status ${response.status}: ${errorText}`
      );
    }

    const data = await response.json();
    const { signature, expire, token } = data;
    return { signature, expire, token };
  } catch (error: any) {
    throw new Error(`Authentication request failed: ${error.message}`);
  }
};

const ImageUpload = ({
  onFileChange,
}: {
  onFileChange: (filePath: string) => void;
}) => {
  const ikUploadRef = useRef(null);
  const [file, setFile] = useState<{ filePath: string } | null>(null);

  const onError = (err: any) => {
    console.log("Error", err);

    toast({
      title: "Image upload failed",
      description: "Your image could not be uploaded. Please try again.",
      variant: "destructive",
    });
  };

  const onSuccess = (res: any) => {
    setFile(res);
    onFileChange(res.filePath);

    toast({
      title: "Image uploaded successfully",
      description: "Your image has been uploaded successfully.",
    });
  };

  return (
    <ImageKitProvider
      publicKey={publicKey}
      urlEndpoint={urlEndpoint}
      authenticator={authenticator}
    >
      <IKUpload
        ref={ikUploadRef}
        fileName="test-upload.png"
        onError={onError}
        onSuccess={onSuccess}
        className="hidden"
      />

      <button
        onClick={(e) => {
          e.preventDefault();

          if (ikUploadRef.current) {
            // @ts-ignore
            ikUploadRef.current?.click();
          }
        }}
        className="gradient-input w-full min-h-14 flex justify-center items-center gap-1.5 rounded-md"
      >
        <img
          src="/icons/upload.svg"
          alt="upload-icon"
          className="size-5 object-contain"
        />
        <p className="text-light-200 text-base">Upload a File</p>

        {file && (
          <p className="mt-1 text-light-100 text-xs text-center">
            {file.filePath}
          </p>
        )}
      </button>

      {file && (
        <div>
          <IKImage
            path={file?.filePath}
            alt="default-image"
            width={500}
            height={500}
          />
        </div>
      )}
    </ImageKitProvider>
  );
};

export default ImageUpload;
