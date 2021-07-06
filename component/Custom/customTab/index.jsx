// node libraries
import React, { useState, useEffect } from 'react';
// methods
import { clickOnTabs } from './methods/clickOnTabs';

/**
 * component of custom badge
 * @param {array} tab => array of object each object have title and content
 * @param {string} customTabClassWrapper => class name custom tab wrapper
 * @param {string} customTabClassWrapperTitle => class name custom tab wrapper title
 * @param {string} customTabClassTitle => class name custom tab title
 * @param {string} customTabClassWrapperContent => class name custom tab wrapper content
 * @param {string} customTabClassContent => class name custom tab content
 */
const CustomTab = ({
    tab,
    customTabClassWrapper,
    customTabClassWrapperTitle,
    customTabClassTitle,
    customTabClassWrapperContent,
    customTabClassContent
}) => {
    let [activeTab, setActiveTab] = useState("");

    useEffect(() => {
        setActiveTab(tab[0].title);
    }, [tab]);

    return (
        <div
            className={
                `customTab
                ${customTabClassWrapper !== undefined && customTabClassWrapper}`
            }>
            <div
                className={
                    `customTab__div
                    ${customTabClassWrapperTitle !== undefined && customTabClassWrapperTitle}`
                }>
                {tab.length > 0 && tab.map((value, index) => {
                    return (
                        <span key={index}
                            className={
                                `customTab__div--title
                                ${activeTab === value.title && 'divCustomTab__div--titleActive'}
                            ${customTabClassTitle !== undefined && customTabClassTitle}`
                            } onClick={(event) => {
                                setActiveTab(value.title);
                                clickOnTabs(event);
                            }}>
                            {value.title}
                        </span>);
                })}
            </div>
            <div
                className={
                    `${customTabClassWrapperContent !== undefined && customTabClassWrapperContent}`
                }>
                {tab.length > 0 && tab.map((value, index) => {
                    return (
                        <div key={index}
                            className={
                                `${customTabClassContent !== undefined && customTabClassContent}`
                            }>
                            {activeTab === value.title && value.content}
                        </div>);
                })}
            </div>
        </div>
    );
}
// export
export { CustomTab };