# is-geotiff
Super Light and Fast Method for Checking if a TIFF is a GeoTIFF

# install
```bash
npm install is-geotiff
```

# usage
```js
const fs = require("fs");
const isGeoTIFF = require("is-geotiff");

const buffer = fs.readFileSync("./example.tiff");

const { result } = isGeoTIFF({
    data: buffer,
    debug: false // set debug to true for increased logging
});
// result is true
```