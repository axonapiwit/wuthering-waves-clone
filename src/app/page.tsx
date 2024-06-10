import CookieConsent from "@/components/CookieConsent";
import { AudioLines, CircleUserRound, Earth } from "lucide-react";
import { SocialIcon } from "react-social-icons";

export default function Home() {
  const socials = [
    {
      name: "twitter",
      url: "https://twitter.com",
    },
    {
      name: "facebook",
      url: "https://www.facebook.com",
    },
    {
      name: "discord",
      url: "https://discord.com",
    },
    {
      name: "reddit",
      url: "https://reddit.com",
    },
    {
      name: "tiktok",
      url: "https://tiktok.com",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com",
    },
    {
      name: "youtube",
      url: "https://www.youtube.com",
    },
  ];

  return (
    <main className="min-h-screen min-w-[1024px] w-full scroll-smooth relative overflow-hidden before:block before:w-16 before:h-full before:absolute before:z-10 before:top-0 before:left-0 before:bg-gradient-to-r before:from-black before:to-transparent before:opacity-30 before:pointer-events-none after:block after:w-16 after:h-full after:absolute after:z-0 after:top-0 after:right-0 after:bg-gradient-to-r after:from-transparent after:to-black after:opacity-80 after:pointer-events-none">
      {/* bg box */}
      <CookieConsent />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className=""></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <video
            className="z-0 h-full w-full object-cover"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            id="video"
          >
            <source
              src="https://wutheringwaves.kurogames.com/website-preface/video/desktop/kv1.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="absolute bottom-0 left-0 h-32 w-full pointer-events-none">
          <video
            className="w-full h-32 mix-blend-screen pointer-events-none object-cover"
            preload="auto"
            autoPlay
            loop
            muted
            playsInline
            id="video-line"
          >
            <source
              src="https://wutheringwaves.kurogames.com/website-preface/video/desktop/page_loop.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* top bar */}
      <div className="absolute top-0 left-0 w-full h-20 z-10 bg-gradient-to-b from-black to-transparent pointer-events-none"></div>
      {/* logo */}
      <div className="pr-14 flex justify-between w-full h-max p-6 z-20 absolute">
        <div
          className="w-full h-max bg-contain p-3 bg-no-repeat justify-start flex"
          style={{
            backgroundImage:
              'url("data:image/png;base64,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")',
          }}
        ></div>
        <ul className="w-full h-full justify-end flex text-white space-x-4">
          <i>
            <CircleUserRound className="size-6" />
          </i>
          <i>
            <AudioLines className="size-6" />
          </i>
          <i>
            <Earth className="size-6" />
          </i>
        </ul>
      </div>
      {/* media slice */}
      <div className="absolute top-0 right-[2rem] z-10 w-[0.42rem] flex flex-col items-center transition ease-in-out">
        <div className="w-full h-24 bg-cover bg-no-repeat bg-center bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAACeCAMAAAAFfNqBAAAAS1BMVEUAAADh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eGrcZRyAAAAGHRSTlMAh3gFRR3KFA99bWYs9OPAW1JPNieykgrwCYfjAAAAh0lEQVRIx+3VSQqAMAwFUIekrW2dp97/pC4Uxy5EUFNIVuVRyOJ/SLRNvL4eYcJ4A2NG7hJ36UPM6AVHEAkGFwoSTPNfzOhlFAoSTJO7FCi+cBFw8GDVe7AsrtY4Z85mc+fy9mggRFkIUW8iQeuqAQ21MSBnU2jbDqVSSqLtcFw/p8ucNu1pAoPzA6WuDznzAAAAAElFTkSuQmCC')]"></div>
        <div className="p-3 w-max min-h-8 border rounded-full space-y-2">
          {socials.map((social) => (
            <div
              key={social.name}
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white hover:bg-slate-300"
            >
              {
                <SocialIcon
                  url={social.url}
                  bgColor="transparent"
                  fgColor="black"
                  target="_blank"
                />
              }
            </div>
          ))}
        </div>
        <div className="w-full h-96 bg-cover bg-no-repeat bg-center -mt-0.5 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAHECAMAAAAOHvqkAAAAilBMVEUAAADh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHP1ux6AAAALXRSTlMAeAgFintZQzf5zpSBajEg593UuKCbhWA7JRoTEO/GqnAN9L6zpXZSKdaydE3xAK2aAAABP0lEQVRo3u3XR27DMBAF0IS21XuxenF3ytz/epGlRJDJQXZBDOP/lfBAcoaEFuTLb1nJUOfZxSurui4Lr9hNVuWbOE635/7DsVM3r+bJbhC8RVF4FndL6CYRXeSFXSJHrW81QkU3Zjr1ba79LbepVyAQCAQCgUAgEPj8yD4HjITBJFRNI+olEg4NsetlDeNAY1pdLId+NkR7TSlukq5W2lpMS9eU26bzcIcMBAKBQCAQCAQCgf+DG8Z2awb1jkE7Uq3ck6/giShW+qEh96VWaxqTipmEFtF3wmxiX2tpESsrpqHe8YcOxmLRzBxN2ql2M1fuaaifqOcRmBXzsrS4x/KJQbFmT/7xfgYgEAgEAoF/cLPybW5gq1rRmJ5sXkgU5EtZGR2NOepiWSW5WXeV5vdEzEXk3eIuexqDopw/vwBcfBwqrK/cSwAAAABJRU5ErkJggg==')]"></div>
      </div>
    </main>
  );
}
