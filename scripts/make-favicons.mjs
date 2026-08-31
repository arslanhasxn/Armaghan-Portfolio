import fs from "fs";
import { PNG } from "pngjs";

function removeBlackBg(input, output, threshold = 40) {
  const data = fs.readFileSync(input);
  const png = PNG.sync.read(data);
  for (let y = 0; y < png.height; y++) {
    for (let x = 0; x < png.width; x++) {
      const idx = (png.width * y + x) << 2;
      const r = png.data[idx];
      const g = png.data[idx + 1];
      const b = png.data[idx + 2];
      if (r <= threshold && g <= threshold && b <= threshold) {
        png.data[idx + 3] = 0;
      }
    }
  }
  fs.writeFileSync(output, PNG.sync.write(png));
  console.log("wrote", output);
}

removeBlackBg("public/favicon-light-scheme.png", "public/favicon-light-ui.png");
removeBlackBg("public/favicon-dark-scheme.png", "public/favicon-dark-ui.png");
