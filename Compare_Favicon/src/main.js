import gm from "gm"
import Jimp from "jimp";
import sharp from "sharp";
import ico from "icojs";
import fs from 'fs'

export default function main () {
    // console.log("main");
    var options = {
        file: '/src/image/favicon1.jpg',
        // highlightColor: 'yellow',
        tolerance: 0.02
      }
    const buffer = fs.readFileSync('./image/favicon.ico');
    ico.parse(buffer, 'image/png').then( async images => {
        const image = images.pop();
        const imgBuffer = Buffer.from(image.buffer)
        fs.writeFileSync('./image/favicon.png', imgBuffer)
        const JimpImage = await Jimp.read('./image/favicon.png');
        const JimpImage1 = await Jimp.read('./image/favicon1.jpg')
        console.log(JimpImage, 'JimpImage');
        // console.log(images.pop(), 'images');
        const diff = Jimp.diff(JimpImage, JimpImage1)
        const distance = Jimp.distance(JimpImage, JimpImage1)
        console.log(diff.percent, 'diff');
        console.log(distance, 'distance');
        // Jimp.read('./image/favicon.png').then((err, img) => {
        // if(err) console.log(err, 'err');
        // console.log(img, 'img');
        // })
    })
    
    //   Jimp.read('./image/favicon.png').then((err, img) => {
    //     if(err) console.log(err, 'err');
    //     console.log(img, 'img');
    }

main()