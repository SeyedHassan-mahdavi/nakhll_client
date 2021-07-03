import { instanceAxiosWithToken, instanceAxiosWithOutToken } from '../axios/AxiosRegister';
/**
 * 
 */
export const ApiRegister = () => {
    return {
        /**
         * @param {* data > any or null if empty }
         * @param {* method > GET OR POST OR PUT OR DELETE String --> camaleCase}
         * @param {* url > api url String}
         * @param {* token > Authorization Boolean}
         */
        apiRequest: (data, method, url, token) => token
            ? instanceAxiosWithToken({ method, url, data })
            : instanceAxiosWithOutToken({ method, url, data }),
    }
}
