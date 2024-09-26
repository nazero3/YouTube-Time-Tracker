// Initialize timeSpent on YouTube to 0 when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({ timeSpent: 0 }, () => {
    console.log("Time spent on YouTube has been initialized to 0.");
  });
});

// Listen to messages from the content script to update time
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === "UPDATE_TIME") {
    chrome.storage.local.get(["timeSpent"], (result) => {
      let totalTime = result.timeSpent || 0;
      totalTime += request.timeSpent;

      chrome.storage.local.set({ timeSpent: totalTime }, () => {
        console.log(`Updated time spent on YouTube: ${totalTime} seconds`);
      });
    });
  }
});
