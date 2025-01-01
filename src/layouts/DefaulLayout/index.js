import Header from '~/layouts/components/Header';
import SideBar from './SideBar';
import styles from './DefaulLayout.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);
function DefaulLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <SideBar />
                <div className={cx('content')}>{children}</div>
            </div>
        </div>
    );
}

DefaulLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaulLayout;
