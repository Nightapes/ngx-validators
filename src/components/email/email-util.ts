
export interface EmailOptions {
    domains: string[],
    secondLevelDomains: string[],
    topLevelDomains: string[]
}

export interface SplittedEmail {
    topLevelDomain: string,
    secondLevelDomain: string,
    domain: string,
    address: string
}

export class EmailSuggestion {

    private defaultOptions: EmailOptions = {
        domains: ['msn.com', 'bellsouth.net',
            'telus.net', 'comcast.net', 'optusnet.com.au',
            'earthlink.net', 'qq.com', 'sky.com', 'icloud.com',
            'mac.com', 'sympatico.ca', 'googlemail.com',
            'att.net', 'xtra.co.nz', 'web.de',
            'cox.net', 'gmail.com', 'ymail.com',
            'aim.com', 'rogers.com', 'verizon.net',
            'rocketmail.com', 'google.com', 'optonline.net',
            'sbcglobal.net', 'aol.com', 'me.com', 'btinternet.com',
            'charter.net', 'shaw.ca'],
        secondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
        topLevelDomains: ["com", "com.au", "com.tw", "ca", "co.nz", "co.uk", "de",
            "fr", "it", "ru", "net", "org", "edu", "gov", "jp", "nl", "kr", "se", "eu",
            "ie", "co.il", "us", "at", "be", "dk", "hk", "es", "gr", "ch", "no", "cz",
            "in", "net", "net.au", "info", "biz", "mil", "co.jp", "sg", "hu", "uk"]
    }

    public setDefaults(options: EmailOptions) {
        this.defaultOptions = options
    }

    public suggest(email: string) {
        let emailParts = this.splitEmail(email.toLowerCase())
        if (!emailParts) {

        }

    };

    public splitEmail(email: string) {

        var parts = email.trim().split('@');

        if (parts.length != 2) {
            return undefined;
        }

        if (parts[0] === '' || parts[1] === '') {
            return undefined;
        }

        let result = {
            topLevelDomain: "",
            secondLevelDomain: "",
            domain: parts[1],
            address: parts[0]
        }

        let domainParts = parts[1].split('.');

        if (domainParts.length === 0) {
            return undefined;
        } else if (domainParts.length == 1) {
            result.topLevelDomain = domainParts[0];
        } else {
            // The address has a domain and a top-level domain
            result.secondLevelDomain = domainParts[0];
            for (var j = 1; j < domainParts.length; j++) {
                result.topLevelDomain += domainParts[j] + '.';
            }
            result.topLevelDomain = result.topLevelDomain.substring(0, result.topLevelDomain.length - 1);
        }

        return result;

    }
}