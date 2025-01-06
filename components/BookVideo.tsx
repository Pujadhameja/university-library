"use client";

import { IKVideo, ImageKitProvider } from "imagekitio-next";

import config from "@/lib/config";
import { borderTopLeftRadius } from "html2canvas/dist/types/css/property-descriptors/border-radius";

interface Props {
  videoUrl: string;
  className?: string;
}

const BookVideo = ({ videoUrl, className }: Props) => {
  return (
    <ImageKitProvider
      publicKey={config.env.imagekit.publicKey}
      urlEndpoint={config.env.imagekit.urlEndpoint}
    >
      <IKVideo path={videoUrl} controls={true} className="w-full rounded-xl" />
    </ImageKitProvider>
  );
};

export default BookVideo;
