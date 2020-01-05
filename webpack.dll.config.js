const webpack = require("webpack");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
  mode: "development",
  optimization: {
    minimize: false,
    noEmitOnErrors: true
  },
  entry: {
    portlet: [
      "@angular/animations",
      "@angular/common",
      "@angular/core",
      "@angular/forms",
      "@angular/platform-browser",
      "@angular/platform-browser-dynamic",
      "@angular/router",
      "rxjs",
      "tslib",
      "zone.js/dist/zone"
    ]
  },
  output: {
    path: path.join(__dirname, "dll", pkg.name),
    filename: "[name]-dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join("dll", pkg.name, "[name]-dll-manifest.json"),
      entryOnly: true,
      name: "[name]"
    })
  ]
};
