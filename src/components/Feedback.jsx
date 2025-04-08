import React, { useEffect } from "react";

const FeedbackForm = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://forms.app/static/embed.js";
    script.type = "text/javascript";
    script.async = true;
    script.defer = true;
    script.onload = () => {
      // Access formsapp from the window object
      const formsApp = new window.formsapp(
        "654f6f98e260143f463159e4",
        "popover",
        {
          button: { color: "#01AB18" },
          align: "right",
        }
      );
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div></div>;
};

export default FeedbackForm;
