"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { XIcon } from "lucide-react";
import React from "react";

interface ImageUploadProps {
  onChange: (url: string) => void;
  value: string;
  endpoint: "postImage";
}

function ImageUpload({ endpoint, value, onChange }: ImageUploadProps) {
  if (value)
    return (
      <div className="relative size-40">
        <img
          src={value}
          alt="Upload"
          className="size-40 rounded-md object-cover"
        />
        <button
          type="button"
          className="absolute -top-2 -right-2 p-1 rounded-full shadow-sm bg-red-500"
          onClick={() => onChange("")}
        >
          <XIcon className="size-4 text-white" />
        </button>
      </div>
    );

  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
}

export default ImageUpload;
