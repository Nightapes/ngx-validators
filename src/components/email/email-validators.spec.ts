import { EmailValidators } from "./email-validators";
import { FormControl } from "@angular/forms";

describe("Email validators service", () => {
  describe("simpleRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = EmailValidators.simple(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid emails", () => {
      const mail = [
        "prettyandsimple@example.com",
        "very.common@example.com",
        "disposable.style.email.with+symbol@example.com",
        "other.email-with-dash@example.com",
        "x@example.com",
        "example@s.solutions",
        "example-indeed@strange-example.com"
      ];

      mail.forEach(element => {
        const control: FormControl = new FormControl(element);
        const validated = EmailValidators.simple(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for invalid email", () => {
      const invalidEmail = [
        "Abc.example.com"
        //  'A@b@c@example.com',
        //  'john.doe@example..com',
        //  'john..doe@example.com',
      ];
      invalidEmail.forEach(element => {
        const control: FormControl = new FormControl(element);
        const validated = EmailValidators.simple(control);
        expect(validated).toEqual({ simpleEmailRule: true });
      });
    });
  });

  describe("normalRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = EmailValidators.normal(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid emails", () => {
      const mail = [
        "prettyandsimple@example.com",
        "very.common@example.com",
        "disposable.style.email.with+symbol@example.com",
        "other.email-with-dash@example.com",
        "x@example.com",
        "example@s.solutions",
        "example-indeed@strange-example.com"
      ];

      mail.forEach(element => {
        const control: FormControl = new FormControl(element);
        const validated = EmailValidators.normal(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for invalid email", () => {
      const invalidEmail = [
        "Abc.example.com",
        "A@b@c@example.com",
        "john.doe@example..com",
        "john.doe123456789012345678901234567890123456789012345678901234567890@example..com",
        "john.doe@123456789012345678901234567890123456789012345678901234567890example..com",
        "prett[~]yandsimple@example.com"
      ];
      invalidEmail.forEach(element => {
        const control: FormControl = new FormControl(element);
        const validated = EmailValidators.normal(control);
        expect(validated).toEqual({ normalEmailRule: true });
      });
    });
  });
});
