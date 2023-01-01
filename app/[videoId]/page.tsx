"use client";
import { usePathname } from "next/navigation";
export const dynamic = "force-dynamic";

export default function VideoPlayer() {
  const pathname = usePathname();
  console.log(pathname);
  const truncatedPath = pathname?.substring(1);

  return (
    <video
      src={`/api/videos?videoId=${truncatedPath}`}
      width="800px"
      height="auto"
      controls
      autoPlay
      id="video-player"
    />
  );
}
