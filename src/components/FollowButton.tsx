"use client";

import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Loader2Icon } from "lucide-react";
import toast from "react-hot-toast";
import { toggleFollow } from "@/actions/user.action";

function FollowButton({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleToggle = async () => {
    setIsLoading(true);
    try {
      await toggleFollow(userId);
      toast.success("User followed successfully");
    } catch (error) {
      toast.error("Error following user");
    }
  };

  return (
    <Button
      size={"sm"}
      variant={"secondary"}
      onClick={handleToggle}
      disabled={isLoading}
    >
      {isLoading ? <Loader2Icon className="size-5 animate-spin" /> : "Follow"}
    </Button>
  );
}

export default FollowButton;
