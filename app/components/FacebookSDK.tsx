import { useEffect } from "react";

export default function FacebookSDK() {
  useEffect(() => {
    if (document.getElementById("facebook-jssdk")) return;

    const js = document.createElement("script");
    js.id = "facebook-jssdk";
    js.async = true;
    js.defer = true;
    js.crossOrigin = "anonymous";
    js.src =
      "https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v24.0&appId=853189677303409";

    document.body.appendChild(js);
  }, []);

  return <div id="fb-root"></div>;
}
