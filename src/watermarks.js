import watermark from "watermarkjs";
import React from "react";
// class WaterMark extends React.Component {
//   render() {
//     return (
//       <div id="container">
//           <div id="containerr2">
//               <p>Hello WaterMark</p>
              

//         {watermark(["img/shepherd.jpg", "img/logo.png"])
//           .image(watermark.image.lowerRight(0.5))
//           .then(img => {
//             console.log("img");
//             document.getElementById("container").appendChild(img);
//           })}


        
//         </div>
//       </div>
//     );
//   }
// }
const options = {
    init(img) {
      img.crossOrigin = 'anonymous'
    }
  };
const renderMyWaterMark =() =>{

//  watermark(["https://raw.githubusercontent.com/brianium/watermarkjs/master/examples/img/shepherd.jpg", "https://raw.githubusercontent.com/brianium/watermarkjs/master/examples/img/logo.png"],options)
//           .image(watermark.image.lowerRight(0.5))
//           .then(img => {
//             console.log("img");
//             document.getElementById("container").appendChild(img);
//           })
watermark(['https://raw.githubusercontent.com/brianium/watermarkjs/master/examples/img/shepherd.jpg'],options)
  .image(watermark.text.lowerRight('watermark.js', '48px Josefin Slab','#fff', 0.5))
  .then(function (img) {
    document.getElementById('container').appendChild(img);
  });
     
}

function WaterMark(){
    return(
         <div id="container">
          <div id="containerr2">
              <p>Hello WaterMark</p>
              
{renderMyWaterMark()}
        

        
        </div>
      </div>

    )
}

export default WaterMark;
