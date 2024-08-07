import fs from "fs";
import Database from "better-sqlite3";

fs.readFile("Tree_Species.geojson", "utf8", (err, jsonString) => {
  if (err) {
    console.log("File read failed:", err);
    return;
  }
  try {
    // Parese the GeoJSON content
    const geojsonData = JSON.parse(jsonString);
    processData(geojsonData);
  } catch (err) {
    console.log("Error parsing JSON string:", err);
  }
});

function processData(geojsonData) {
  const db = new Database("app.db", (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to the database.");
  });
}
