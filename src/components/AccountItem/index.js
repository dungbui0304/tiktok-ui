import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

const AccountItem = () => {
  return (
    <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://icdn.dantri.com.vn/thumb_w/660/2021/08/27/chi-xedocx-1630078422969.jpeg"
                alt="Hoaa"
            />
        <div className={cx('info')}>
            <h4 className={cx('name')}>
                <span>Hoàng Thu Hà</span>
                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </h4>
            <span className={cx('username')}>halamlong</span>
        </div>
    </div>
  )
}

export default AccountItem