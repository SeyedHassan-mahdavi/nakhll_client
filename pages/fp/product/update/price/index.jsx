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
            <form className={styles.form_edit}>
                {[1, 2, 3].map((value, index) => {
                    return (
                        <div key={index} className={styles.form_edit_card}>
                            <label>گل محمدی</label>
                            <input className={styles.form_edit_input} type="number" name="price" id="" />
                            <input className={styles.form_edit_input} type="number" name="price" id="" />
                        </div>
                    )
                })}
                <div className={styles.form_edit_wrapper_button}>
                    <button type="submit" className={styles.form_edit_button}>اعمال تغییرات</button>
                </div>
            </form>
        </div>
    );
}
// export
export default Price;
Price.Layout = Layout;