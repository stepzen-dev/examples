import { createContext, useEffect, useState } from "react";
import ReactGA from "react-ga";

const analyticsContext = createContext();

const {
  REACT_APP_ANALYTICS_STEPZEN_API_URL,
  REACT_APP_ANALYTICS_STEPZEN_API_KEY,
  REACT_APP_REACTGA_ID,
} = process.env;

const url = window.location.pathname + window.location.search

const AnalyticsProvider = (props) => {
  const [userId, setUserID] = useState(null);
  
  useEffect(() => {
    ReactGA.initialize(`${REACT_APP_REACTGA_ID}`);
    ReactGA.ga((tracker) => {
      setUserID(tracker.get("clientId"));
    });
    ReactGA.pageview(url);
  }, [url]);

  // This is the click handler on document.body that tracks analytics
  useEffect(() => {
    const handler = async (evt) => {
      // The current date / time
      const now = new Date().toLocaleString('en-US', { timeZone: 'PST' });

      // Get the closest element that we've explicitly marked.
      // If there isn't one, just get the nearest element.
      const el = evt?.target?.closest("*");

      // Get the full DOM path by traversing up the tree
      let path = [];
      let ref = el;

      do {
        const tag = ref.tagName.toLowerCase();
        const id = ref.id ? `#${ref.id}` : "";
        let classes = [];
        ref.classList.forEach((c) => classes.push(`.${c}`));

        path = [`${tag}${classes.join("")}${id}`, ...path];
        ref = ref.parentNode;
      } while (ref.parentNode);

      path = path.join(" > ");

      // Create an action object. It's either our specifically marked one,
      // or derived from the event
      const action = {
        path: el.dataset.analyticsData || path,
        type: el.dataset.analyticsAction || evt.type,
      };

      // This is the query we are sending
      const query = `
        mutation MyMutation {
          amplitude_event(
            eventTime: "${now}"
            eventType: "${action.type}"
            path: "${action.path}"
            userId: "${userId}"
          ) {
            code
            events_ingested
            payload_size_bytes
            server_upload_time
          }
        }
      `;

      console.log(query)

      if (REACT_APP_ANALYTICS_STEPZEN_API_URL) {
        await fetch(REACT_APP_ANALYTICS_STEPZEN_API_URL, {
          body: JSON.stringify({ query }),
          headers: {
            Authorization: `Apikey ${REACT_APP_ANALYTICS_STEPZEN_API_KEY}`,
            "Content-Type": "application/json",
          },
          method: "POST",
        }).then((response) => {
          console.log(response);
          response.json().then((data) => {
            console.log("the response", data);
          });
        });
      }
    };

    document.body.addEventListener("click", handler);

    return () => {
      document.body.removeEventListener("click", handler);
    };
  });

  const state = {
    userId: userId,
  };

  return (
    <analyticsContext.Provider value={state}>
      {props.children}
    </analyticsContext.Provider>
  );
};

export { analyticsContext, AnalyticsProvider };
