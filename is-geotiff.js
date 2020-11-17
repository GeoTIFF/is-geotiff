const hasBytes = require("has-bytes");

const GEOTIFF_TAGS = {
  GeoKeyDirectoryTag: [135, 175], // 0x87AF
  ModelPixelScaleTag: [14, 131], // 0x830E
  ModelTiepointTag: [130, 132], // 0x8482
  GeoDoubleParamsTag: [176, 135], // 0x87B0
  GeoAsciiParamsTag: [177, 135], // 0x87B1
  GDAL_NODATA: [129, 164] // 0xA481
};

module.exports = ({
  data,
  debug = false,
  read_length = 1000,
  threshold = 3
}) => {
  if (debug) console.log("[is-geotiff] starting with data", data);

  const { found, result } = hasBytes({
    data,
    debug,
    end: read_length,
    sequences: GEOTIFF_TAGS,
    start: 0,
    threshold
  });
  if (debug) console.log("[is-geotiff] result from hasBytes is", result);

  return { found, result, threshold };
};
