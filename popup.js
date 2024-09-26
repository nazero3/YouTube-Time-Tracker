// popup.js
chrome.storage.local.get(["timeSpent"], (result) => {
  document.getElementById(
    "timeSpent"
  ).textContent = `Time spent on YouTube: ${result.timeSpent} seconds`;
});
