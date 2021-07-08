// component
import Layout from '../../../../../component/layout/Layout';
import MobileHeader from '../../../../../component/mobileHeader';
// scss
import styles from '../../../../../styles/product/price.module.scss';

const Price = () => {
    return (
        <div className={styles.wrapper}>
            <MobileHeader title="ویرایش قیمت و تخفیف محصولات" type="back" />
            <div className={styles.header}>
                <span>عنوان محصول</span>
                <span>قیمت</span>
                <span>قیمت با تخفیف</span>
            </div>
            {[1, 2, 3].map((value, index) => {
                return (
                    <div key={index} className={styles.card}>
                        <span>گل محمدی</span>
                        <span>29000</span>
                        <span>29000</span>
                    </div>
                )
            })}
        </div>
    );
}
// export
export default Price;
Price.Layout = Layout;