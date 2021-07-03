//=======================================================
//==>loadData:data=> type Any for request server       ==
//==>'get': method=> type String  .... 'post' or 'get  == 
//==>loadUrl: url => type String  .... '/../.../'      ==
//==>false: token => type Boolean ....  true or false  ==
//=======================================================

import React from 'react'
import ApiRegister from '../../services/apiRegister/ApiRegister';

export default () => {

    const _handleRequestApi = async () => {
        
        let loadData = null;
        let dataUrl = '/photos';
        let response = await ApiRegister().apiRequest(loadData, 'get', loadUrl, false);
        console.log('response==>', response); //==> output: {}
    }
    return (
        <div>
            <label>Api test</label>
            <button onClick={() => _handleRequestApi()}>api request</button>
        </div>
    )
}
