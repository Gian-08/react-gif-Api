import { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const UseFetchGifs = (category) => {

    const [images, SetImages] = useState([]);
    const [isLoading, SetIsLoading] = useState(true);

    const getImages = async() => {
      const newImages = await getGifs(category);
      SetImages(newImages);
      SetIsLoading(false);
    }
     useEffect( () => {
      getImages();
     }, [])

  return {

    images,
    isLoading,
  }
   
  
}

