import { useEffect, useState } from 'react';

import Template from '../../components/Template';
import Card from '../../components/Card';
import { Cards } from './style';

function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const images = Array.from(new Array(10), (_, i) => ({
      id: i + 1,
      img: { src: `https://picsum.photos/300/300?random=${i + 1}`, alt: `image number ${i + 1}` },
    }));
    setImages(images);
  }, []);

  return (
    <Template>
      <Cards>
        {images.map((card, i) => (
          <Card key={i} {...card} />
        ))}
      </Cards>
    </Template>
  );
}

export default Home;
