
import React from 'react'
import styled from 'styled-components';
import banners from '../data/featured-banners.json'

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length} ;
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }

function Home() {

    const [index,setIndex] = React.useState(0);


    console.log(banners.results)


    

    const Image = ({src}) => {
        const ImageInSlider = styled.img`
        max-height: 100vh;
        width: 100vh;
        `;

        return <ImageInSlider className="slider" src={src}/>
    }
    // const Images = () => {
    //     return ( banners.results.map((obj) =>{
    //         return <Image src={obj.data.main_image.url} />
    //     })
    //     );
    // }
    const images = banners.results.map((obj) => {
        return obj.data.main_image.url
    });

    const Slider = ({images}) => {
        
        const i = index%images.length;


        return ( <Image src={images[i]} />)

    }

    

    console.log(images)

  return (
      
      <div className="slider">
        <Slider images={images}>
            {/* <Images /> */}
        </Slider>

        <button onClick={() => setIndex(index + 1)}>
        Next >
      </button>
      </div>
  );
}

export default Home;