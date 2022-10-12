import Cookies from "js-cookie";
import CryptoJS from 'crypto-js'

const PUBLIC_KEY = CryptoJS.enc.Utf8.parse("7BCDEF1234123412");
const PRIVATE_KEY = CryptoJS.enc.Utf8.parse('ABCDEF1234123412');
const TOKEN_KEY = 'token'
const TOKEN_EXPIRED = 100000


export function Encrypt(word) {
    let srcs = CryptoJS.enc.Utf8.parse(word);
    let encrypted = CryptoJS.AES.encrypt(srcs, PUBLIC_KEY, { iv: PRIVATE_KEY, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    return encrypted.ciphertext.toString().toUpperCase();
}
export function Decrypt(word) {
    let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
    let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
    let decrypt = CryptoJS.AES.decrypt(srcs, PUBLIC_KEY, { iv: PRIVATE_KEY, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
    let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
    return decryptedStr.toString();
}


export function getToken() {
    return Cookies.get(TOKEN_KEY)
}

export function removeToken() {
    Cookies.remove(TOKEN_KEY)
}

export function setToken(value) {
    const expires = new Date(new Date() * 1 + TOKEN_EXPIRED)
    return Cookies.set(TOKEN_KEY, value, { expires: expires })
}
export function transTree(list) {
    const res = []
    const map = list.reduce((res, v) => (res[v.id] = v, v.children = [], res), {})
    for (const item of list) {
        if (item.parentId === 0) {
            res.push(item)
            continue
        }
        if (item.parentId in map) {
            const parent = map[item.parentId]
            parent.children = parent.children || []
            parent.children.push(item)
        }
    }
    return res
}
export function arrToTree(arr, parentId = 0) {
    // return arr
    //   .filter((item) =>
    //     parentId === undefined
    //       ? item.parentBcbCode === ""
    //       : item.parentBcbCode === parentId
    //   )
    //   .map((item) => {
    //     item.children = this.arrToTree(arr, item.bcbCode);
    //     return item;
    //   });
    [
        { id: 1, name: "部门A", pId: 0 },
        { id: 2, name: "部门B", pId: 0 },
        { id: 3, name: "部门C", pId: 1 },
        { id: 4, name: "部门D", pId: 1 },
        { id: 5, name: "部门E", pId: 2 },
        { id: 6, name: "部门F", pId: 3 },
        { id: 7, name: "部门G", pId: 2 },
        { id: 8, name: "部门H", pId: 4 },
    ]
    const getChildren = (pid) => {
        let childs = []
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].pId === pid) {
                const children = getChildren(arr[i].id)
                if (children.length) {
                    arr[i].children = getChildren(arr[i].id)
                }
                childs.push(arr[i])
            }
        }
        return childs
    }
    return getChildren(parentId)
}
