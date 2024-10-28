import * as deepar from "deepar";

const deepAR = await deepar.initialize({
  licenseKey: "your_license_key_here",
  previewElement: document.querySelector("#deepar-div"),
  effect: "https://cdn.jsdelivr.net/npm/deepar/effects/aviators",
});
