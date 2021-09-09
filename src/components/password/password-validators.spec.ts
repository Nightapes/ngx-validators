import { PasswordValidators } from "./password-validators";
import { FormControl, FormGroup } from "@angular/forms";

describe("Password validators service", () => {
  describe("repeatCharacterRegexRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for valid password", () => {
      const control: FormControl = new FormControl("aaabbbccc");
      const validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for invalid password", () => {
      const control: FormControl = new FormControl("aaabbbbccc");
      const validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
      expect(validated).toEqual({
        repeatCharacterRegexRule: { repeatCount: 4 },
      });
    });
    it("should work for invalid password with length 9", () => {
      const control: FormControl = new FormControl("aaabbbbbbbbbccc");
      const validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
      expect(validated).toEqual({
        repeatCharacterRegexRule: { repeatCount: 4 },
      });
    });
    it("should work for valid password with length 9", () => {
      const control: FormControl = new FormControl("aaabbbccc");
      const validated = PasswordValidators.repeatCharacterRegexRule(4)(control);
      expect(validated).toBeUndefined();
    });
  });

  describe("allowedCharacterRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const allowedCharacter: string[] = ["a", "b", "c"];
      const validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for valid password", () => {
      const control: FormControl = new FormControl("aaabbbccc");
      const allowedCharacter: string[] = ["a", "b", "c"];
      const validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for invalid password with one wrong char", () => {
      const control: FormControl = new FormControl("aaabbbcccd");
      const allowedCharacter: string[] = ["a", "b", "c"];
      const validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
      expect(validated).toEqual({
        allowedCharacterRule: {
          invalidChars: ["d"],
          allowedChars: ["a", "b", "c"],
        },
      });
    });

    it("should work for invalid password with multiple wrong char", () => {
      const control: FormControl = new FormControl("aaafb bbccc) d!");
      const allowedCharacter: string[] = ["a", "b", "c"];
      const validated = PasswordValidators.allowedCharacterRule(allowedCharacter)(control);
      expect(validated).toEqual({
        allowedCharacterRule: {
          invalidChars: ["f", " ", ")", "d", "!"],
          allowedChars: ["a", "b", "c"],
        },
      });
    });
  });

  describe("alphabeticalCharacterRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for valid password", () => {
      const control: FormControl = new FormControl("aAa345b!bdDb\"c cc76");
      const validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid password", () => {
      const control: FormControl = new FormControl("1234Abc!");
      const validated = PasswordValidators.alphabeticalCharacterRule(5)(control);
      expect(validated).toEqual({
        alphabeticalCharacterRule: { required: 5, actual: 3 },
      });
    });
  });

  describe("digitCharacterRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = PasswordValidators.digitCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for valid password", () => {
      const control: FormControl = new FormControl("aAa345b!bdDb\"c cc76");
      const validated = PasswordValidators.digitCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid password", () => {
      const control: FormControl = new FormControl("1234Abc!");
      const validated = PasswordValidators.digitCharacterRule(5)(control);
      expect(validated).toEqual({
        digitCharacterRule: { required: 5, actual: 4 },
      });
    });
  });

  describe("lowercaseCharacterRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = PasswordValidators.lowercaseCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for valid password", () => {
      const control: FormControl = new FormControl("abcdeAACDEF!231");
      const validated = PasswordValidators.lowercaseCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid password", () => {
      const control: FormControl = new FormControl("1234abcADc!");
      const validated = PasswordValidators.lowercaseCharacterRule(5)(control);
      expect(validated).toEqual({
        lowercaseCharacterRule: { required: 5, actual: 4 },
      });
    });
  });

  describe("uppercaseCharacterRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = PasswordValidators.uppercaseCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid password", () => {
      const control: FormControl = new FormControl("abcdeAACDEF!231");
      const validated = PasswordValidators.uppercaseCharacterRule(5)(control);
      expect(validated).toBeUndefined();
    });
    it("should work for invalid password", () => {
      const control: FormControl = new FormControl("1234abcAbc!");
      const validated = PasswordValidators.uppercaseCharacterRule(5)(control);
      expect(validated).toEqual({
        uppercaseCharacterRule: { required: 5, actual: 1 },
      });
    });
  });

  describe("mismatchedPasswords", () => {
    it("should work for empty control", () => {
      const password: FormControl = new FormControl("");
      const confirmPassword: FormControl = new FormControl("");
      const form = new FormGroup(
        {
          newPassword: password,
          confirmPassword,
        },
        PasswordValidators.mismatchedPasswords()
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("mismatchedPasswords")).toBeNull();
    });

    it("should work for valid password", () => {
      const password: FormControl = new FormControl("testPassword");
      const confirmPassword: FormControl = new FormControl("testPassword");
      const form = new FormGroup(
        {
          newPassword: password,
          confirmPassword,
        },
        PasswordValidators.mismatchedPasswords()
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("mismatchedPasswords")).toBeNull();
    });

    it("should work for override password", () => {
      const password: FormControl = new FormControl("testPassword");
      const confirmPassword: FormControl = new FormControl("testPassword");
      const form = new FormGroup(
        {
          test: password,
          test2: confirmPassword,
        },
        PasswordValidators.mismatchedPasswords("test", "test2")
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("mismatchedPasswords")).toBeNull();
    });

    it("should work for override password", () => {
      const password: FormControl = new FormControl("testPassword");
      const confirmPassword: FormControl = new FormControl("testPassword2");
      const form = new FormGroup(
        {
          test: password,
          test2: confirmPassword,
        },
        PasswordValidators.mismatchedPasswords("test", "test2")
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("mismatchedPasswords")).not.toBeUndefined();
    });

    it("should work for invalid password", () => {
      const password: FormControl = new FormControl("testPassword");
      const confirmPassword: FormControl = new FormControl("testPasswords");
      const form = new FormGroup(
        {
          newPassword: password,
          confirmPassword,
        },
        PasswordValidators.mismatchedPasswords()
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("mismatchedPasswords")).not.toBeUndefined();
    });
  });
});
