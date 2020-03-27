import { EmailSuggestion, SplittedEmail, EmailOptions } from "./email-util";

interface SplitEmailTest {
  test: string;
  result: SplittedEmail;
}

describe("Email util service", () => {
  const emailSuggestion: EmailSuggestion = new EmailSuggestion();

  function testSuggestion(
    testDomain: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resultDomain: any,
    options?: EmailOptions
  ) {
    const address = "test";
    let result;

    if (options) {
      result = emailSuggestion.suggest(address + "@" + testDomain, options);
    } else {
      result = emailSuggestion.suggest(address + "@" + testDomain);
    }

    if (resultDomain) {
      expect(result.suggestion.domain).toEqual(resultDomain);
      expect(result.suggestion.address).toEqual(address);
      expect(result.suggestion.full).toEqual(address + "@" + resultDomain);
    } else {
      expect(result).toEqual(resultDomain);
    }
  }

  it("should work splitting emails", () => {
    const mail: SplitEmailTest[] = [
      {
        test: "prettyandsimple@example.com",
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "example",
          domain: "example.com",
          address: "prettyandsimple"
        }
      },
      {
        test: "very.common@example.com",
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "example",
          domain: "example.com",
          address: "very.common"
        }
      },
      {
        test: "disposable.style.email.with+symbol@example.com",
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "example",
          domain: "example.com",
          address: "disposable.style.email.with+symbol"
        }
      },
      {
        test: "other.email-with-dash@example.com",
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "example",
          domain: "example.com",
          address: "other.email-with-dash"
        }
      },
      {
        test: "example@s.solutions",
        result: {
          topLevelDomain: "solutions",
          secondLevelDomain: "s",
          domain: "s.solutions",
          address: "example"
        }
      },
      {
        test: "example-indeed@strange-example.com",
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "strange-example",
          domain: "strange-example.com",
          address: "example-indeed"
        }
      },
      {
        test:
          '"()<>[]:;@,\\"!#$%&\'*+-/=?^_`{}|     ~       ?            ^_`{}|~.a"@allthesymbols.com',
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "allthesymbols",
          domain: "allthesymbols.com",
          address:
            '"()<>[]:;@,\\"!#$%&\'*+-/=?^_`{}|     ~       ?            ^_`{}|~.a"'
        }
      },
      {
        test: "postbox@com",
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "",
          domain: "com",
          address: "postbox"
        }
      },
      {
        test: '"foo@bar"@example.com',
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "example",
          domain: "example.com",
          address: '"foo@bar"'
        }
      },
      {
        test: "test@mail.randomsmallcompany.co.uk",
        result: {
          topLevelDomain: "randomsmallcompany.co.uk",
          secondLevelDomain: "mail",
          domain: "mail.randomsmallcompany.co.uk",
          address: "test"
        }
      },
      {
        test: '"contains.and.@.symbols.com"@example.com',
        result: {
          topLevelDomain: "com",
          secondLevelDomain: "example",
          domain: "example.com",
          address: '"contains.and.@.symbols.com"'
        }
      },
      {
        test: "example-indeed-broken-strange-example.com",
        result: undefined
      },
      {
        test: "@",
        result: undefined
      },
      {
        test: "email@",
        result: undefined
      },
      {
        test: "@example.com",
        result: undefined
      }
    ];

    mail.forEach(element => {
      const result = emailSuggestion.splitEmail(element.test);
      expect(result).toEqual(element.result);
    });
  });

  // expect(mailcheck.suggest('', domains)).toBeFalsy();
  // expect(mailcheck.suggest('test@', domains)).toBeFalsy();
  // expect(mailcheck.suggest('test', domains)).toBeFalsy();

  it("should work suggest emails", () => {
    testSuggestion("gmailc.om", "gmail.com");
    testSuggestion("gmailc.om", "gmail.com");
    testSuggestion("emaildomain.co", "emaildomain.com");
    testSuggestion("gmail.con", "gmail.com");
    testSuggestion("gnail.con", "gmail.com");
    testSuggestion("GNAIL.con", "gmail.com");
    testSuggestion("#gmail.com", "gmail.com");
    testSuggestion("comcast.nry", "comcast.net");
    testSuggestion("homail.con", "hotmail.com");
    testSuggestion("hotmail.co", "hotmail.com");
    testSuggestion("yajoo.com", "yahoo.com");
    testSuggestion("yajoo.de", "yahoo.de");
    testSuggestion("randomsmallcompany.cmo", "randomsmallcompany.com");

    // Ensure we do not touch the second level domain when suggesting new top level domain
    testSuggestion("con-artists.con", "con-artists.com");
  });

  it("should work suggest emails for broken mails", () => {
    testSuggestion("", undefined);
    testSuggestion("test@", undefined);
    testSuggestion("test", undefined);
  });

  it("should work suggest emails own options", () => {
    const options: EmailOptions = {
      domains: ["gmail.com"],
      secondLevelDomains: ["gmail"],
      topLevelDomains: ["com"]
    };
    testSuggestion("gmailc.om", "gmail.com", options);
  });

  it("should work suggest emails empty options", () => {
    const options: EmailOptions = {
      domains: ["gmail.com"],
      secondLevelDomains: [],
      topLevelDomains: []
    };
    testSuggestion("gmailc.om", "gmail.com", options);
  });
});
