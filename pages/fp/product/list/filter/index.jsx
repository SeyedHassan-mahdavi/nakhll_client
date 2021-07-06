// component
import useViewport from '../../../../../component/viewPort';
import MobileHeader from '../../../../../component/mobileHeader';
// scss
import styles from '../../../../../styles/product/filter.module.scss';
/**
 * filter product component
 * @param
 * @returns void
 */
function FilterProduct() {
    const { width } = useViewport();
    const breakpoint = 620;
    return (
        <>
            {width < breakpoint &&
                <div className={styles.wrapper}>
                    <MobileHeader title="فیلترها" type="back" />
                    <form className={styles.form}>
                        <div className={styles.form_card}>
                            <h6 className={styles.form_header}>وضعیت محصول:</h6>
                            <div className={styles.form_status}>
                                <label className={styles.form_status_checkboxLabel}>
                                    <input className={styles.form_status_checkbox} type="checkbox" name="active" id="active" />
                                    فعال
                                </label>
                                <label className={styles.form_status_checkboxLabel}>
                                    <input className={styles.form_status_checkbox} type="checkbox" name="inactive" id="inactive" />
                                    غیر فعال
                                </label>
                                <label className={styles.form_status_checkboxLabel}>
                                    <input className={styles.form_status_checkbox} type="checkbox" name="accepted" id="accepted" />
                                    تایید شده
                                </label>
                                <label className={styles.form_status_checkboxLabel}>
                                    <input className={styles.form_status_checkbox} type="checkbox" name="failed" id="failed" />
                                    رد شده
                                </label>
                                <label className={styles.form_status_checkboxLabel}>
                                    <input className={styles.form_status_checkbox} type="checkbox" name="productEnd" id="productEnd" />
                                    اتمام موجودی
                                </label>
                                <label className={styles.form_status_checkboxLabel}>
                                    <input className={styles.form_status_checkbox} type="checkbox" name="pending" id="pending" />
                                    در انتظار تایید
                                </label>
                            </div>
                        </div>
                        <div className={styles.form_card}>
                            <h6 className={styles.form_header}>قیمت :</h6>
                            <label className={styles.form_card_label}>
                                از
                                <input className={styles.form_card_input} type="number" name="" id="" />
                                تومان تا
                                <input className={styles.form_card_input} type="number" name="" id="" />
                                تومان
                            </label>
                            <input className={styles.form_card_input_range} type="range" name="price" value="20" />
                        </div>
                        <div className={styles.form_card}>
                            <h6 className={styles.form_header}>زمان آماده سازی :</h6>
                            <label className={styles.form_card_label}>
                                از
                                <input className={styles.form_card_input} type="number" name="" id="" />
                                روز تا
                                <input className={styles.form_card_input} type="number" name="" id="" />
                                روز
                            </label>
                        </div>
                        <div className={styles.form_card}>
                            <h6 className={styles.form_header}>موجودی :</h6>
                            <label className={styles.form_card_label}>
                                از
                                <input className={styles.form_card_input} type="number" name="" id="" />
                                عدد تا
                                <input className={styles.form_card_input} type="number" name="" id="" />
                                عدد
                            </label>
                        </div>
                        <div className={styles.form_buttons}>
                            <button type="submit" className={styles.form_buttonSubmit}>اعمال فیلترها</button>
                            <button className={styles.form_clearFilter}>تنظیم مجدد</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}
// export
export default FilterProduct;