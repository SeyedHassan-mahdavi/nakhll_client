// libraries
import { useState } from 'react';
// component
import useViewport from '../../../../../component/viewPort';
import MobileHeader from '../../../../../component/mobileHeader';
import Layout from '../../../../../component/layout/Layout';
// methods
import { getFilterData } from './methods/getFilterData';
// scss
import styles from '../../../../../styles/product/filter.module.scss';
/**
 * filter product component
 * @param
 * @returns void
 */
const FilterProduct = () => {

    let [filterData, setFilterData] = useState({
        minPrice: 0,
        maxPrice: 1000000,
        minNumber: 1,
        maxNumber: 20,
        fromDate: 1,
        untilDate: 15,
    });
    const { width } = useViewport();
    const breakpoint = 620;

    return (
        <>
            {width < breakpoint &&
                <div className={styles.wrapper}>
                    <MobileHeader title="فیلترها" type="back" />
                    <form id="formFilter" className={styles.form} onSubmit={(event) => {
                        event.preventDefault();
                        getFilterData(filterData);
                    }}>
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
                                <input value={filterData.minPrice} className={styles.form_card_input} type="number"
                                    onChange={(e) => {
                                        setFilterData((pre) => {
                                            return {
                                                ...pre,
                                                minPrice: e.target.value
                                            }
                                        });
                                    }}
                                />
                                تومان تا
                                <input value={filterData.maxPrice} className={styles.form_card_input} type="number"
                                    onChange={(e) => {
                                        setFilterData((pre) => {
                                            return {
                                                ...pre,
                                                maxPrice: e.target.value
                                            }
                                        });
                                    }}
                                />
                                تومان
                            </label>
                            <input value={filterData.maxPrice} className={styles.form_card_input_range} type="range" step="10" max="100000" min="0"
                                onChange={(e) => {
                                    setFilterData((pre) => {
                                        return {
                                            ...pre,
                                            maxPrice: e.target.value
                                        }
                                    });
                                }}
                            />
                        </div>
                        <div className={styles.form_card}>
                            <h6 className={styles.form_header}>زمان آماده سازی :</h6>
                            <label className={styles.form_card_label}>
                                از
                                <input value={filterData.fromDate} className={styles.form_card_input} type="number"
                                    onChange={(e) => {
                                        setFilterData((pre) => {
                                            return {
                                                ...pre,
                                                fromDate: e.target.value
                                            }
                                        });
                                    }}
                                />
                                روز تا
                                <input value={filterData.untilDate} className={styles.form_card_input} type="number"
                                    onChange={(e) => {
                                        setFilterData((pre) => {
                                            return {
                                                ...pre,
                                                untilDate: e.target.value
                                            }
                                        });
                                    }}
                                />
                                روز
                            </label>
                        </div>
                        <div className={styles.form_card}>
                            <h6 className={styles.form_header}>موجودی :</h6>
                            <label className={styles.form_card_label}>
                                از
                                <input value={filterData.minNumber} className={styles.form_card_input} type="number"
                                    onChange={(e) => {
                                        setFilterData((pre) => {
                                            return {
                                                ...pre,
                                                minNumber: e.target.value
                                            }
                                        });
                                    }}
                                />
                                عدد تا
                                <input value={filterData.maxNumber} className={styles.form_card_input} type="number"
                                    onChange={(e) => {
                                        setFilterData((pre) => {
                                            return {
                                                ...pre,
                                                maxNumber: e.target.value
                                            }
                                        });
                                    }}
                                />
                                عدد
                            </label>
                        </div>
                        <div className={styles.form_buttons}>
                            <button type="submit" className={styles.form_buttonSubmit}>اعمال فیلترها</button>
                            <button type="reset" className={styles.form_clearFilter} onClick={() => {
                                document.getElementById("formFilter").reset();
                                setFilterData({
                                    minPrice: 0,
                                    maxPrice: 1000000,
                                    minNumber: 1,
                                    maxNumber: 20,
                                    fromDate: 1,
                                    untilDate: 15,
                                });
                            }}>تنظیم مجدد</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}
// export
export default FilterProduct;
FilterProduct.Layout = Layout;