import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function Button({
    to,
    href,
    onClick,
    primary = false,
    outline = false,
    disable = false,
    text = false,
    rounded = false,
    small = false,
    large = false,
    leftIcon,
    rightIcon,
    className,
    children,
    ...propsPass
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...propsPass,
    };

    if (disable) {
        const validateDisable = Object.keys(props);
        validateDisable.forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }

    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        disable,
        text,
        rounded,
        small,
        large,
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
}

Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    disable: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default Button;
