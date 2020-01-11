/*
 * Code fromMailcheck https://github.com/mailcheck/mailcheck
 * Author
 * Derrick Ko (@derrickko)
 *
 * Released under the MIT License.
 *
 * v 1.1.2
 */

export interface EmailOptions {
  domains: string[];
  secondLevelDomains: string[];
  topLevelDomains: string[];
}

export interface SplittedEmail {
  topLevelDomain: string;
  secondLevelDomain: string;
  domain: string;
  address: string;
}

export interface Suggestion {
  address: string;
  domain: string;
  full: string;
}

interface Offset {
  c1: number;
  c2: number;
  trans: boolean;
}

export class EmailSuggestion {
  private defaultOptions: EmailOptions = {
    domains: [
      "msn.com",
      "bellsouth.net",
      "telus.net",
      "comcast.net",
      "optusnet.com.au",
      "earthlink.net",
      "qq.com",
      "sky.com",
      "icloud.com",
      "mac.com",
      "sympatico.ca",
      "googlemail.com",
      "att.net",
      "xtra.co.nz",
      "web.de",
      "cox.net",
      "gmail.com",
      "ymail.com",
      "yahoo.com",
      "aim.com",
      "rogers.com",
      "verizon.net",
      "rocketmail.com",
      "google.com",
      "optonline.net",
      "sbcglobal.net",
      "aol.com",
      "me.com",
      "btinternet.com",
      "charter.net",
      "shaw.ca"
    ],
    secondLevelDomains: ["yahoo", "hotmail", "mail", "live", "outlook", "gmx"],
    topLevelDomains: [
      "com",
      "com.au",
      "com.tw",
      "ca",
      "co.nz",
      "co.uk",
      "de",
      "fr",
      "it",
      "ru",
      "net",
      "org",
      "edu",
      "gov",
      "jp",
      "nl",
      "kr",
      "se",
      "eu",
      "ie",
      "co.il",
      "us",
      "at",
      "be",
      "dk",
      "hk",
      "es",
      "gr",
      "ch",
      "no",
      "cz",
      "in",
      "net",
      "net.au",
      "info",
      "biz",
      "mil",
      "co.jp",
      "sg",
      "hu",
      "uk"
    ]
  };

  public suggest(
    email: string,
    options?: EmailOptions
  ): { [key: string]: Suggestion } {
    let opt = this.defaultOptions;
    if (options != undefined) {
      opt = options;
    }
    const emailParts = this.splitEmail(email.toLowerCase());

    if (!emailParts) {
      return undefined;
    }

    if (opt.secondLevelDomains && opt.topLevelDomains) {
      // If the email is a valid 2nd-level + top-level, do not suggest anything.
      if (
        opt.secondLevelDomains.indexOf(emailParts.secondLevelDomain) !== -1 &&
        opt.topLevelDomains.indexOf(emailParts.topLevelDomain) !== -1
      ) {
        return undefined;
      }
    }

    let closestDomain = this.findClosestDomain(
      emailParts.domain,
      opt.domains,
      2
    );
    if (closestDomain) {
      if (closestDomain == emailParts.domain) {
        // The email address exactly matches one of the supplied domains; do not return a suggestion.
        return undefined;
      } else {
        // The email address closely matches one of the supplied domains; return a suggestion
        return {
          suggestion: {
            address: emailParts.address,
            domain: closestDomain,
            full: emailParts.address + "@" + closestDomain
          }
        };
      }
    }

    const closestSecondLevelDomain = this.findClosestDomain(
      emailParts.secondLevelDomain,
      opt.secondLevelDomains,
      2
    );
    const closestTopLevelDomain = this.findClosestDomain(
      emailParts.topLevelDomain,
      opt.topLevelDomains,
      2
    );

    if (emailParts.domain) {
      closestDomain = emailParts.domain;
      let rtrn = false;

      if (
        closestSecondLevelDomain &&
        closestSecondLevelDomain != emailParts.secondLevelDomain
      ) {
        // The email address may have a mispelled second-level domain; return a suggestion
        closestDomain = closestDomain.replace(
          emailParts.secondLevelDomain,
          closestSecondLevelDomain
        );
        rtrn = true;
      }

      if (
        closestTopLevelDomain &&
        closestTopLevelDomain != emailParts.topLevelDomain &&
        emailParts.secondLevelDomain !== ""
      ) {
        // The email address may have a mispelled top-level domain; return a suggestion
        closestDomain = closestDomain.replace(
          new RegExp(emailParts.topLevelDomain + "$"),
          closestTopLevelDomain
        );
        rtrn = true;
      }

      if (rtrn) {
        return {
          suggestion: {
            address: emailParts.address,
            domain: closestDomain,
            full: emailParts.address + "@" + closestDomain
          }
        };
      }
    }

    /* The email address exactly matches one of the supplied domains, does not closely
     * match any domain and does not appear to simply have a mispelled top-level domain,
     * or is an invalid email address; do not return a suggestion.
     */
    return undefined;
  }

  public splitEmail(email: string) {
    const parts = email.trim().split("@");

    if (parts.length < 2) {
      return undefined;
    }

    for (let i = 0; i < parts.length; i++) {
      if (parts[i] === "") {
        return undefined;
      }
    }

    const result = {
      topLevelDomain: "",
      secondLevelDomain: "",
      domain: parts.pop(),
      address: ""
    };

    const domainParts = result.domain.split(".");

    if (domainParts.length === 0) {
      return undefined;
    } else if (domainParts.length == 1) {
      result.topLevelDomain = domainParts[0];
    } else {
      // The address has a domain and a top-level domain
      result.secondLevelDomain = domainParts[0];
      for (let j = 1; j < domainParts.length; j++) {
        result.topLevelDomain += domainParts[j] + ".";
      }
      result.topLevelDomain = result.topLevelDomain.substring(
        0,
        result.topLevelDomain.length - 1
      );
    }

    result.address = parts.join("@");

    return result;
  }

  private findClosestDomain(
    domain: string,
    domains: string[],
    threshold: number
  ): string {
    let dist;
    let minDist = Infinity;
    let closestDomain = null;

    if (!domain || !domains) {
      return undefined;
    }

    for (let i = 0; i < domains.length; i++) {
      if (domain === domains[i]) {
        return domain;
      }
      dist = this.sift4Distance(domain, domains[i], 5);
      if (dist < minDist) {
        minDist = dist;
        closestDomain = domains[i];
      }
    }

    if (minDist <= threshold && closestDomain !== null) {
      return closestDomain;
    } else {
      return undefined;
    }
  }

  private sift4Distance(s1: string, s2: string, maxOffset: number): number {
    // sift4: https://siderite.blogspot.com/2014/11/super-fast-and-accurate-string-distance.html
    if (maxOffset === undefined) {
      maxOffset = 5; //default
    }

    if (!s1 || !s1.length) {
      if (!s2) {
        return 0;
      }
      return s2.length;
    }

    if (!s2 || !s2.length) {
      return s1.length;
    }

    const l1 = s1.length;
    const l2 = s2.length;

    let c1 = 0; //cursor for string 1
    let c2 = 0; //cursor for string 2
    let lcss = 0; //largest common subsequence
    let localCS = 0; //local common substring
    let trans = 0; //number of transpositions ('ab' vs 'ba')
    const offsetArr: Offset[] = []; //offset pair array, for computing the transpositions

    while (c1 < l1 && c2 < l2) {
      if (s1.charAt(c1) == s2.charAt(c2)) {
        localCS++;
        let isTrans = false;
        //see if current match is a transposition
        let i = 0;
        while (i < offsetArr.length) {
          const ofs = offsetArr[i];
          if (c1 <= ofs.c1 || c2 <= ofs.c2) {
            // when two matches cross, the one considered a transposition is the one with the largest difference in offsets
            isTrans = Math.abs(c2 - c1) >= Math.abs(ofs.c2 - ofs.c1);
            if (isTrans) {
              trans++;
            } else {
              if (!ofs.trans) {
                ofs.trans = true;
                trans++;
              }
            }
            break;
          } else {
            if (c1 > ofs.c2 && c2 > ofs.c1) {
              offsetArr.splice(i, 1);
            } else {
              i++;
            }
          }
        }
        offsetArr.push({
          c1: c1,
          c2: c2,
          trans: isTrans
        });
      } else {
        lcss += localCS;
        localCS = 0;
        if (c1 != c2) {
          c1 = c2 = Math.min(c1, c2); //using min allows the computation of transpositions
        }
        //if matching characters are found, remove 1 from both cursors (they get incremented at the end of the loop)
        //so that we can have only one code block handling matches
        for (let j = 0; j < maxOffset && (c1 + j < l1 || c2 + j < l2); j++) {
          if (c1 + j < l1 && s1.charAt(c1 + j) == s2.charAt(c2)) {
            c1 += j - 1;
            c2--;
            break;
          }
          if (c2 + j < l2 && s1.charAt(c1) == s2.charAt(c2 + j)) {
            c1--;
            c2 += j - 1;
            break;
          }
        }
      }
      c1++;
      c2++;
      // this covers the case where the last match is on the last token in list, so that it can compute transpositions correctly
      if (c1 >= l1 || c2 >= l2) {
        lcss += localCS;
        localCS = 0;
        c1 = c2 = Math.min(c1, c2);
      }
    }
    lcss += localCS;
    return Math.round(Math.max(l1, l2) - lcss + trans); //add the cost of transpositions to the final result
  }
}
