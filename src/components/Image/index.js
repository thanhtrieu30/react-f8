import { forwardRef, useState } from 'react';
import images from '../../assets/images';

const Image = forwardRef(({ src, alt, ...props }, ref) => {
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(images.image);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return <img ref={ref} src={fallBack || src} alt={alt} {...props} onError={handleError} />;
});

export default Image;
