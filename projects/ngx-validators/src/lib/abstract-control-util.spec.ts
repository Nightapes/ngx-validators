import { AbstractControlUtil } from "./abstract-control-util";
import { FormControl } from "@angular/forms";

describe("Util service", () => {
  describe("isNotPresent", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = AbstractControlUtil.isNotPresent(control);
      expect(validated).toBeTruthy();
    });

    it("should work for control with text", () => {
      const control: FormControl = new FormControl("aaabbbccc");
      const validated = AbstractControlUtil.isNotPresent(control);
      expect(validated).toBeFalsy();
    });
  });

  describe("add error", () => {
    it("should work for control without error", () => {
      const control: FormControl = new FormControl("");
      AbstractControlUtil.addError(control, "newError", true);
      expect(control.hasError("newError")).toBeTruthy();
    });

    it("should work for control with error", () => {
      const control: FormControl = new FormControl("");
      control.setErrors({ oldError: "test" });
      AbstractControlUtil.addError(control, "newError", true);
      expect(control.hasError("newError")).toBeTruthy();
      expect(control.hasError("oldError")).toBeTruthy();
    });
  });

  describe("remove error", () => {
    it("should work for control without error", () => {
      const control: FormControl = new FormControl("");
      AbstractControlUtil.removeError(control, "newError");
      expect(control.hasError("newError")).toBeFalsy();
    });

    it("should work for control with error", () => {
      const control: FormControl = new FormControl("");
      control.setErrors({ oldError: "test", newError: "test" });
      AbstractControlUtil.removeError(control, "newError");
      expect(control.hasError("newError")).toBeFalsy();
      expect(control.hasError("oldError")).toBeTruthy();
    });

    it("should work for control with one error", () => {
      const control: FormControl = new FormControl("");
      control.setErrors({ newError: "test" });
      AbstractControlUtil.removeError(control, "newError");
      expect(control.hasError("newError")).toBeFalsy();
    });
  });
});
