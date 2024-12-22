"use client";

import { ImageKitProvider, IKVideo } from "imagekitio-next";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const BookVideo = ({ videoUrl }: { videoUrl: string }) => {
  return (
    <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint}>
      <IKVideo
        path={videoUrl}
        controls={true}
        className="w-full h-96 rounded-xl"
      />
    </ImageKitProvider>
  );
};

export default BookVideo;
