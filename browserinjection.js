const CHALLENGE_VALID_SECONDS = 600

function XorEncryptDecrypt(input, key = "6871249b51244e0f072e7ebc47af566f01a0484ddf033211aab5658037da5b2f") {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

const parseCookies = (cookieString) => {
    if (!cookieString) return {};
    return cookieString
        .split(';')
        .map(cookie => {
            const [key, ...value] = cookie.split('=');
            return [key.trim(), value.join('=')];
        })
        .reduce((acc, [key, value]) => {
            acc[key] = value;
            return acc;
        }, {});
};

function challengeRequest(accessTkn) {
    return new Response(`<script>document.cookie="accessTkn=${accessTkn}; SameSite=Lax; path=/; Secure"; location.href = location.href</script>`, {
        headers: {
            "content-type": "text/html;charset=UTF-8",
        },
    });
}

export default {

    /**
     * @param {Request} request
     * @param {ExecutionContext} ctx
     * @returns {Promise<Response>}
     */
    async fetch(request, env, ctx) {

        const cookies = request.headers.get('Cookie');
        const parsedCookies = parseCookies(cookies);
        const accessToken = parsedCookies['accessTkn'];

        const accessTkn = {
            "IP": request.headers.get('cf-connecting-ip'),
            "TIME": Date.now() / 1000,
        }

        try {
            if (!accessToken) {
                return challengeRequest(btoa(XorEncryptDecrypt(JSON.stringify(accessTkn))).replaceAll("=", "-"));
            } else {
                const provided = JSON.parse(XorEncryptDecrypt(atob(accessToken.replaceAll("-", "="))))
                if (
                    provided.IP != accessTkn.IP ||
                    provided.TIME + CHALLENGE_VALID_SECONDS < accessTkn.TIME
                ) {
                    return challengeRequest(btoa(XorEncryptDecrypt(JSON.stringify(accessTkn))).replaceAll("=", "-"));
                }
            }

            const resp = await fetch(request)
            return resp
        } catch {
            return challengeRequest(btoa(XorEncryptDecrypt(JSON.stringify(accessTkn))).replaceAll("=", "-"));
        }
    }
}
