import { stylish } from "./stylish.js"
import { plain  } from "./plain.js";

export default (file, formatName) => {
    switch (formatName) {
        case 'stylish':
            console.log(stylish(file));
            break;
        case 'plain':
            console.log(plain(file));
            break;
        default:
            console.log('Format not supported')
    }
}