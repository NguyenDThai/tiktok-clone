import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Img from '~/components/Image';

const cx = classNames.bind(styles);
function AccountItems({ data }) {
    return (
        <Link to={`/@${data.nickname}`}>
            <div className={cx('wrapper')}>
                <Img className={cx('avatar')} src={data.avatar} alt={data.avatar} />
                <div className={cx('info')}>
                    <h4 className={cx('name')}>
                        <span>{data.full_name}</span>
                        {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCircleCheck} />}
                    </h4>
                    <span className={cx('username')}>{data.nickname}</span>
                </div>
            </div>
        </Link>
    );
}

AccountItems.propTypes = {
    data: PropTypes.object.isRequired,
};
export default AccountItems;
