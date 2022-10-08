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

