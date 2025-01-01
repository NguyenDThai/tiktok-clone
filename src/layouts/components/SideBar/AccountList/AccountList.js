import classNames from 'classnames/bind';
import styles from './AccountList.module.scss';
import PropTypes from 'prop-types';

import SuggestedAccount from '~/components/SuggestedAccount';

const cx = classNames.bind(styles);
function AccountList({ title }) {
    return (
        <div className={cx('wrapper')}>
            <h2 className={cx('title')}>{title}</h2>
            <SuggestedAccount />
            <SuggestedAccount />
            <SuggestedAccount />
        </div>
    );
}

AccountList.propTypes = {
    title: PropTypes.string,
};

export default AccountList;
