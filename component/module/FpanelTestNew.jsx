import React from 'react'
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const FpanelTestNew = () => {
    const [i18n] = useTranslation();
    const history = useHistory();
    return (
        <div>
            <span>test root page</span>
            <button onClick={() => { history.push('/fp') }}>got to url fp root</button>
            <button onClick={() => i18n.changeLanguage('en')}>langueag-en</button>
            <button onClick={() => i18n.changeLanguage('fa')}>langueag-fa</button>
        </div>
    )
}

export default FpanelTestNew;
