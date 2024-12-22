"use client";

import { IKVideo, ImageKitProvider } from "imagekitio-next";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint}>
      <IKVideo
        path={videoUrl}
        controls={true}
        className="h-96 w-full rounded-xl"
      />
    </ImageKitProvider>
  );
};

export default BookVideo;
