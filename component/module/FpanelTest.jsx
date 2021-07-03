import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FpanelTest = () => {
    const [t] = useTranslation();
    const history = useHistory();
    return (
        <div>
            <span>{t('common:login.title')}</span>
            <button onClick={() => { history.push('/fp/page') }}>got to url fp page</button>
        </div>
    )
}

export default FpanelTest;
