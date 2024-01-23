// serviceWorkerRegistration.js
function nodeEnvProductionCheck(config) {
  if (config && config.bypassNodeEnvProduction) {
    return config.bypassNodeEnvProduction;
  }
  return process.env.NODE_ENV === "production";
}

function getServiceWorkerUrl() {
  if (process.env.NODE_ENV === "production") {
    return `${process.env.PUBLIC_URL}/service-worker.js`;
  }
  return `/service-worker-dev.js`;
}

export function register(config) {
  if (nodeEnvProductionCheck(config) && "serviceWorker" in navigator) {
    // ...

    window.addEventListener("load", () => {
      const swUrl = getServiceWorkerUrl();
      // ...
    });
  }
}
