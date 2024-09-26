let startTime;

window.onfocus = () => {
  startTime = Date.now();
};

window.onblur = () => {
  let timeSpent = (Date.now() - startTime) / 1000; // Convert to seconds
  chrome.runtime.sendMessage({
    type: "UPDATE_TIME",
    timeSpent: timeSpent,
  });
};
