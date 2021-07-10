// node libraies
import Head from "next/head";
import { useEffect, useState } from 'react';
// components
import MyLayout from '../../../../component/layout/Layout';
import MobileHeader from '../../../../component/mobileHeader';
import useViewport from '../../../../component/viewPort';
import { ApiRegister } from '../../../../apis/services/apiRegister/ApiRegister';
// styles
import styles from '../../../../styles/store/createStore.module.scss';

export default function NewStore() {

    let [selectState, setSelectState] = useState([]);
    let [selectBigCities, setSelectBigCities] = useState([]);
    let [selectCities, setSelectCities] = useState([]);

    const { width } = useViewport();
    const breakpoint = 620;

    // big city
    const apiBigCity = async (id) => {
        let params = { "ali": "hosein", "adklsjfkl": "sdfsf" }
        let loadData = null;
        let dataUrl = `/app/api/v1/get-big-cities/?state_id=${id}`;
        let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
        setSelectBigCities(response);
    }

    // city
    const apiCity = async (id) => {
        let params = { "ali": "hosein", "adklsjfkl": "sdfsf" }
        let loadData = null;
        let dataUrl = `/app/api/v1/get-cities/?bigcity_id=${id}`;
        let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
        setSelectCities(response);
    }

    useEffect(() => {
        // state
        const apiState = async () => {
            let params = { "ali": "hosein", "adklsjfkl": "sdfsf" }
            let loadData = null;
            let dataUrl = '/app/api/v1/get-all-state/';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
            setSelectState(response);
        }
        apiState();
    }, []);

    return (
        <>
            {width < breakpoint &&
                <div>
                    <Head>
                        <title>ثبت حجره</title>
                        <link
                            rel="stylesheet"
                            href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                        />
                        <meta
                            name="viewport"
                            content="initial-scale=1.0, width=device-width"
                        />
                    </Head>
                    <MobileHeader title="ثبت حجره" type="close" />
                    <form className={styles.form} onSubmit={(e) => {
                        e.preventDefault();
                        const data = new FormData(e.target);
                        console.log(Object.fromEntries(data.entries()));
                        const submit = async () => {
                            let params = { "ali": "hosein", "adklsjfkl": "sdfsf" }
                            let loadData = null;
                            let dataUrl = '/api/v1/shop/create/';
                            let response = await ApiRegister().apiRequest(loadData, 'post', dataUrl, true, params);
                            console.log(">>>", response);
                        }
                        submit();
                    }}>
                        <label className={styles.form_label}>نام حجره</label>
                        <input className={styles.form_input} type="text" name="name-store" placeholder="پسته اکبری" />
                        <label className={styles.form_label}>آدرس اینترنتی حجره</label>
                        <input style={{ textAlign: "left" }} className={styles.form_input} placeholder="/nakhll.com" type="text" name="store-url" />
                        <label className={styles.form_label}>استان</label>
                        <select className={styles.form_select} name="state" defaultValue="0">
                            <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                            {selectState.map((value, index) => {
                                return (
                                    <option key={index} value={value.id} onClick={(e) => {
                                        apiBigCity(e.target.value);
                                    }}>{value.name}</option>
                                );
                            })}
                        </select>
                        <label className={styles.form_label}>شهرستان</label>
                        <select className={styles.form_select} name="big-city" defaultValue="0">
                            <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                            {selectBigCities.map((value, index) => {
                                return (
                                    <option key={index} value={value.id} onClick={(e) => {
                                        apiCity(e.target.value);
                                    }}
                                    >{value.name}</option>
                                );
                            })}
                        </select>
                        <label className={styles.form_label}>شهر</label>
                        <select className={styles.form_select} name="city" defaultValue="0">
                            <option value="0" disabled>برای باز شدن لیست کلیک کنید</option>
                            {selectCities.map((value, index) => {
                                return (
                                    <option key={index} value={value.id}>{value.name}</option>
                                );
                            })}
                        </select>
                        <label className={styles.form_label}>
                            <input className={styles.form_checkbox} type="checkbox" name="roles" />
                            <a>قوانین</a> را به طور کامل مطالعه کردم و آنها را می پذیرم
                        </label>
                        <div className={styles.wrapper_submit}>
                            <button className={styles.button_submit} type="submit">ثبت حجره</button>
                        </div>
                    </form>
                </div>
            }
        </>
    );
}
NewStore.Layout = MyLayout;