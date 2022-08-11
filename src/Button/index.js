import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const Button = ({
    leftIcon,
    rightIcon,
    primary = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disable = false,
    rounded = false,
    to,
    href,
    children,
    onClick,
    className,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // console.log({ ...props });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    // remove envent listener when btn disabled
    if (disable) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    const classes = cx('wrapper', {
        [className]: className,
        primary,
        outline,
        small,
        large,
        text,
        disable,
        rounded,
        className,
    });

    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Comp>
    );
};

export default Button;
