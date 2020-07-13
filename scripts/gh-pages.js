var ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export/werkweek-sapper", // <-- replace yourproject with your repo name
  {
    branch: "gh-pages",
    repo: "https://github.com/nspenner/werkweek-sapper.git",
    user: {
      name: "Nathan Minchow",
      email: "nathan.minchow@outlook.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
