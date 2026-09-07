"use client";
import { useEffect } from "react";
import { getCalApi } from "@calcom/embed-react";
import { LinkPreview } from "@/components/ui/link-preview";

const highlight = "text-[#ff5800]";

function About() {
  return (
    <>
      <BookCall />
      <div className="pt-12 flex flex-col gap-3">
        <p className="text-md dark:text-white/85 text-black/85 font-sans">
          Hi, I&apos;m a developer who enjoys building AI products end to end.
        </p>
        <div className="text-md dark:text-white/85 text-black/85 font-sans">
          I recently built{" "}
          <LinkPreview
            url="https://zuno.ashishjha.xyz/"
            className={highlight}
          >
            zuno
          </LinkPreview>{" "}
          AI website builder so anyone can build website just describe what you want
          and select tech stack and also build{" "}
          <LinkPreview
            url="https://showhunt.ashishjha.xyz/"
            className={highlight}
          >
            showhunt
          </LinkPreview>{" "}
          Voice AI Product Launch Platform, a voice agent that controls the full
          workflow from navigation to routing even filling form giving any user
          query related to platform.
        </div>
        <p className="text-md dark:text-white/85 text-black/85 font-sans">
          Currently, I&apos;m looking for Full-Stack AI Engineer roles where i
          can contribute and grow. I care deeply about visual craft and obsess
          over building products that feel fast, polished.
        </p>
        <p className="text-md dark:text-white/85 text-black/85 font-sans">
          Want to talk?{" "}
          <span
            data-cal-namespace="quick-chat"
            data-cal-link="ashishxjha/quickchat"
            data-cal-config='{"layout":"month_view"}'
            className={`${highlight} cursor-pointer`}
          >
            Book a call
          </span>{" "}
          or view{" "}
          <a
            href="/Ashish_Jha_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => new Audio("/switchtab.mp3").play()}
            className={highlight}
          >
            My resume
          </a>
        </p>
      </div>
    </>
  );
}

export default About;

const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "quick-chat" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);
  return null;
};
