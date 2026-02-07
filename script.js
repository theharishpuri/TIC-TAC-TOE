// Register Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("sw.js")
      .then(() => console.log("✅ Service Worker Registered"))
      .catch(err => console.log("SW error:", err));
  });
}

