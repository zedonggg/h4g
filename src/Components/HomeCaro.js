import Carousel from 'react-bootstrap/Carousel';
import "./HomeCaro.css"

function HomeCaro() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img src='https://media.istockphoto.com/id/668214842/photo/voluteer-group-of-people-for-charity-donation-in-the-park.jpg?s=2048x2048&w=is&k=20&c=XdTRKKNCDLlsKkmlqHafGmCAhhefU85BTJ20O8jpv6E=' />
        <Carousel.Caption>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          <p><button className='carobtn' href="./">Join us today</button></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://media.istockphoto.com/id/668214842/photo/voluteer-group-of-people-for-charity-donation-in-the-park.jpg?s=2048x2048&w=is&k=20&c=XdTRKKNCDLlsKkmlqHafGmCAhhefU85BTJ20O8jpv6E=' />
      <Carousel.Caption>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          <p><button className='carobtn' href="./">Join us today</button></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://media.istockphoto.com/id/668214842/photo/voluteer-group-of-people-for-charity-donation-in-the-park.jpg?s=2048x2048&w=is&k=20&c=XdTRKKNCDLlsKkmlqHafGmCAhhefU85BTJ20O8jpv6E=' />
      <Carousel.Caption>
          <h3>Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
          <p><button className='carobtn' href="./">Join us today</button></p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCaro;