const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");

assert(!html.includes('id="tableFiles"'), "HTML should not include a separate table upload input.");
assert(!html.includes('id="tableFilesPreview"'), "HTML should not include a separate table preview container.");
assert(html.includes('id="ownReviewFiles"'), "HTML should include own review upload input.");
assert(html.includes('id="competitorReviewFiles"'), "HTML should include competitor review upload input.");
assert(html.includes('accept=".txt,.csv,.tsv,.xlsx,.xls'), "Review uploads should accept TXT, CSV, TSV, XLSX, and XLS files.");
assert(!js.includes("tableFiles:"), "JavaScript should not track tables as a separate upload category.");
assert(js.includes("handleReviewUpload"), "JavaScript should handle review file and table uploads together.");
assert(js.includes("parseDelimitedTable"), "JavaScript should parse CSV and TSV table files.");
assert(!js.includes("tableText"), "Generated reports should not use a separate table text field.");

console.log("review table upload structure ok");
