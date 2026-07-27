const assert = require("assert");
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(root, "demo", "index.html"), "utf8");
const js = fs.readFileSync(path.join(root, "demo", "app.js"), "utf8");

assert(html.includes('id="tableFiles"'), "HTML should include table upload input.");
assert(html.includes('id="tableFilesPreview"'), "HTML should include table preview container.");
assert(html.includes(".csv,.tsv,.xlsx,.xls"), "Table upload should accept CSV, TSV, XLSX, and XLS files.");
assert(js.includes("tableFiles"), "JavaScript should track table uploads.");
assert(js.includes("handleTableUpload"), "JavaScript should handle table uploads.");
assert(js.includes("parseDelimitedTable"), "JavaScript should parse CSV and TSV table files.");
assert(js.includes("tableText"), "Generated reports should include table text in analysis.");
assert(js.includes("tableFilesPreview"), "JavaScript should render table upload previews.");

console.log("table upload structure ok");
