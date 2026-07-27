const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");

assert(html.includes('id="languageSelect"'), "HTML should include a language selector.");
assert(html.includes('value="zh"'), "Language selector should include Chinese.");
assert(html.includes('value="ja"'), "Language selector should include Japanese.");
assert(html.includes('value="en"'), "Language selector should include English.");
assert(js.includes("const translations"), "JavaScript should define translation copy.");
assert(js.includes("function applyLanguage"), "JavaScript should apply the selected language.");
assert(js.includes("document.documentElement.lang"), "Language switch should update the document language.");
assert(js.includes("languageSelect.addEventListener"), "Language selector should react to changes.");

console.log("language toggle structure ok");
