/**
 * 密码算法 [1000+]
 * 接口声明: {"name": "system.cipher"}
 */
declare module '@system.cipher' {
    /**
     * RSA加解密。不支持分段加密，内容超长会出错
     * @param obj
     * @property action 加解密类型，两个可选值：encrypt：加密，decrypt： 解密
     * @property text 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，待解密的文本内容应该是经过base64编码的一段二进制值。base64编码使用默认风格，下同
     * @property key 加密或解密使用到的RSA密钥，经过base64编码后生成的字符串。加密时key为公钥，解密时key为私钥
     * @property transformation RSA算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding"
     * @property success 成功回调
     * @property fail 失败回调
     * @property complete 执行结束后的回调
     */
    export function rsa(obj: {
        /**
         * 加解密类型，两个可选值：encrypt：加密，decrypt： 解密
         */
        action: string,
        /**
         * 待加密或解密的文本内容。待加密的文本内容应该是一段普通文本，长度不能超过 keySize / 8 - 66，其中 keySize 是秘钥的长度（例如秘钥长度为 1024 时，text 不能超过 62 个字节）。待解密的文本内容应该是经过 base64 编码的一段二进制值。base64 编码使用默认风格，下同
         */
        text: string,
        /**
         * 加密或解密使用到的 RSA 密钥，经过 base64 编码后生成的字符串。加密时 key 为公钥，解密时 key 为私钥
         */
        key: string,
        /**
         * RSA 算法的填充项，默认为"RSA/None/OAEPwithSHA-256andMGF1Padding"
         */
        transformation?: string,
        /**
         * 成功回调
         */
        success?: (data: {
            /**
             * 经过加密或解密后生成的文本内容。加密后内容是经过 base64 编码的一段二进制值，解密后内容是一段普通文本。如果解密后的内容不能转化为 utf-8 字符串会出错
             */
            text: string
        }) => void,
        /**
         * 失败回调
         * 202: 输入参数错误
         */
        fail?: (data, code) => void,
        /**
         * 执行结束后的回调
         */
        complete?: () => void
    }): void
}