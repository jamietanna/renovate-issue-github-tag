module.exports = {
  "extends": [],
  "onboarding": false,
  "requiredConfig": "ignored",
  "enabledManagers": ["regex"],
  "regexManagers": [
    {
      "fileMatch": [
        "^config.yaml$"
      ],
      "matchStrings": [
        "generator:\\s+.*\\sversion:\\s+(?<currentValue>[^\\s]+)"
      ],
      "depNameTemplate": "deepmap/oapi-codegen",
      // "datasourceTemplate": "github-tags",
      "datasourceTemplate": "github-tags",
    },
  ]
}

