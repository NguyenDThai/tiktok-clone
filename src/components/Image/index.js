import { useState, forwardRef } from 'react';
import images from '~/assets/image';
import classNames from 'classnames';
import styles from './Image.module.scss';
import PropTypes from 'prop-types';

const Image = forwardRef(({ src, alt, className, fallBack: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    return (
        <img
            className={classNames(styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallBack: PropTypes.string,
};

export default Image;
