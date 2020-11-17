const test = require("ava");
const fs = require("fs");
const isGeoTIFF = require("./is-geotiff");

test("identify jpg as not a tiff", t => {
  const buffer = fs.readFileSync("./data/flower.jpg");
  const { result } = isGeoTIFF({ data: buffer, debug: false });
  t.false(result);
});

test("identify normal tiff image as not a GeoTIFF", t => {
  const buffer = fs.readFileSync("./data/flower.tif");
  const { result } = isGeoTIFF({ data: buffer, debug: false });
  t.false(result);
});

test("identify geotiff", t => {
  const buffer = fs.readFileSync("./data/geo.tif");
  const { result } = isGeoTIFF({ data: buffer, debug: false });
  t.true(result);
});

test("identify tiled file", t => {
  const buffer = fs.readFileSync("./data/cog.tif");
  const { result } = isGeoTIFF({ data: buffer, debug: false });
  t.true(result);
});
