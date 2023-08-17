import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Button.module.scss';

export default function Button({
    to,
    href,
    primary,
    outline,
    outlinePrimary,
    fill,
    disabled,
    children,
    onClick,
    ...args
}) {
    const cx = classNames.bind(styles);
    let Component = 'button';

    const stylesClass = cx('wrapper', {
        primary: primary,
        outline,
        outlinePrimary,
        fill,
    });

    const props = {
        onClick,
        disabled,
        ...args,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={stylesClass} {...props}>
            <span>{children}</span>
        </Component>
    );
}
