"use client";

import { IKVideo, ImageKitProvider } from "imagekitio-next";

const publicKey = process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY;
const urlEndpoint = process.env.NEXT_PUBLIC_IMAGEKIT_URL_ENDPOINT;

const BookVideo = () => (
  <ImageKitProvider publicKey={publicKey} urlEndpoint={urlEndpoint}>
    <IKVideo
      path="/sample-video.mp4"
      controls={true}
      className="h-96 w-full rounded-xl"
    />
  </ImageKitProvider>
);

export default BookVideo;
