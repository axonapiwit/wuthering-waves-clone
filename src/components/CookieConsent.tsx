"use client";

import React from "react";
import { hasCookie, setCookie } from "cookies-next";
import Link from "next/link";

const CookieConsent = (props: any) => {
  const [showConsent, setShowConsent] = React.useState(true);

  React.useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  const rejectCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "false", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-10">
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between px-4 py-8 bg-gray-100">
        <span className="text-dark text-base mr-16">
          We use cookies to help personalize content and provide a better
          experience. By continuing to browse this site or use our services, you
          agree to this use as outlined in our
          <Link
            className="text-blue-500 text-semibold"
            href={
              "https://wutheringwaves.kurogames.com/p/language_en/privacy_policy.html"
            }
            target="_blank"
          >
            {""} Privacy Policy
          </Link>
          .
        </span>
        <button
          className="bg-green-500 py-2 px-8 rounded text-white"
          onClick={() => acceptCookie()}
        >
          Accept
        </button>
        <button
          className="bg-black py-2 px-8 rounded text-white"
          onClick={() => rejectCookie()}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
