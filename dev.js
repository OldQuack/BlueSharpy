const concurrently = require("concurrently");

concurrently(
  [
    { command: "npm run frontend", name: "FE", prefixColor: "blue" },
    { command: "npm run backend", name: "BE", prefixColor: "green" },
  ],
  {
    killOthers: ["failure"],
    restartTries: 3,
  }
);
