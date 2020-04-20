import { FormControl, FormGroup } from "@angular/forms";
import { EqualToValidator } from "./equal-to-validator";

describe("EqualTo Validator Test", () => {
  describe("equalTo", () => {
    it("should not show error when both values are empty", () => {
      const password: FormControl = new FormControl("");
      const confirmPassword: FormControl = new FormControl("");
      const form = new FormGroup(
        {
          newPassword: password,
          confirmPassword,
        },
        EqualToValidator.equalTo("newPassword", "confirmPassword")
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("notEqualTo")).toBeNull();
      expect(confirmPassword.hasError("notEqualTo")).toBe(false);
    });

    it("should not show error when values are equal", () => {
      const password: FormControl = new FormControl("testPassword");
      const confirmPassword: FormControl = new FormControl("testPassword");
      const form = new FormGroup(
        {
          newPassword: password,
          confirmPassword,
        },
        EqualToValidator.equalTo("newPassword", "confirmPassword")
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("notEqualTo")).toBeNull();
      expect(confirmPassword.hasError("notEqualTo")).toBe(false);
    });

    it("should get error when values are different", () => {
      const password: FormControl = new FormControl("testPassword");
      const confirmPassword: FormControl = new FormControl("testPassword2");
      const form = new FormGroup(
        {
          newPassword: password,
          confirmPassword,
        },
        EqualToValidator.equalTo("newPassword", "confirmPassword")
      );
      form.updateValueAndValidity();
      expect(confirmPassword.getError("notEqualTo")).toBe(true);
      expect(confirmPassword.hasError("notEqualTo")).toBe(true);
    });
  });
});
