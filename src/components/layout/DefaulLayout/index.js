import Header from '~/components/layout/components/Header';
import SideBar from './SideBar';
import styles from './DefaulLayout.module.scss';
import classNames from 'classnames/bind';

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

export default DefaulLayout;
