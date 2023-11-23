const version = "${nextRelease.version}";
const notes = "${nextRelease.notes}";
const packageName = require("./package.json").name;
const scope = packageName.split("/")[1];

module.exports = {
  branches: ["main"],
  tagFormat: `${packageName}-v${version}`,
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: ["package.json", "CHANGELOG.md"],
        message: `chore(release): Bumping ${scope} to ${version} [skip ci]\n\n${notes}`,
      },
    ],
  ],
};
