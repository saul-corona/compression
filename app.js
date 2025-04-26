const zlib = require("zlib");
const fs = require("fs");

const src = fs.createReadStream("./text-gigantic.txt");
const dest = fs.createWriteStream("./text-gigantic-compressed.txt.gz");

src.pipe(zlib.createGzip()).pipe(dest);

// zlib.createGunzip();
