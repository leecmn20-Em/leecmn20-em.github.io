/** @type {import("stylelint").Config} */
export default {
  referenceFiles: ["src/styles/*.css", "src/index.css"],
  rules: {
    "no-unknown-custom-properties": true,
    "function-no-unknown": true,
  },
};
