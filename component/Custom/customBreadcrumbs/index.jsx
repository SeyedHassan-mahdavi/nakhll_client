// node libraries
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * component of custom bread crumbs
 * @param {array} titles => array of string
 * @param {string} customClassWrapper => className for div custom Bread Crumbs
 * @param {string} customClass => className for custom Bread Crumbs
 */
const CustomBreadcrumbs = ({
    titles,
    customClassWrapper,
    customClassSpan
}) => {

    return (
        <div className={`customBreadCrumbs mb-3 p-2 
        ${customClassWrapper !== undefined && customClassWrapper}`}>
            <Link to="/" className={`${customClassSpan !== undefined && customClassSpan}`}>خانه</Link>
            <span>{`>`}</span>
            <Link to={`https://nakhll.com${titles && titles.length > 0 && titles[0].market.url}`} className={`${customClassSpan !== undefined && customClassSpan}`}>
                {titles && titles.length > 0 && titles[0].market.title}
            </Link>
            <span>{`>`}</span>
            <Link to={`https://nakhll.com${titles && titles.length > 0 && titles[1].url}`} className={`${customClassSpan !== undefined && customClassSpan}`}>
                {titles && titles.length > 0 && titles[1].title}
            </Link>
            <span>{`>`}</span>
            <Link to={`https://nakhll.com${titles && titles.length > 0 && titles[0].url}`} className={`${customClassSpan !== undefined && customClassSpan}`}>
                {titles && titles.length > 0 && titles[0].title}
            </Link>
        </div>
    );
}
// export
export { CustomBreadcrumbs };