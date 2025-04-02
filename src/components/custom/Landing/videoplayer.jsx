import {HeroVideoDialog} from "@/components/ui/hero-video-dialog";

export default function VideoPlayer() {
  return (
    <div className="flex justify-center">
      <div className="w-3/4 md:w-2/3 lg:w-2/3 mt-10 mb-10">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="top-in-bottom-out"
          videoSrc="https://www.youtube.com/embed/8NoDeGIvlW0"
          thumbnailSrc="https://img.youtube.com/vi/8NoDeGIvlW0/maxresdefault.jpg"
          thumbnailAlt="Hero Video"
        />
      </div>
    </div>
  );
}
