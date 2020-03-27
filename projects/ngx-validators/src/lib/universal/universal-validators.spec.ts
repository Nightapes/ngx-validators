import { UniversalValidators } from "./universal-validators";
import { FormControl } from "@angular/forms";

describe("Universal validators service", () => {
  describe("whitespaceRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.noWhitespace(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid string", () => {
      const control: FormControl = new FormControl("aaabbbccc");
      const validated = UniversalValidators.noWhitespace(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid string", () => {
      const control: FormControl = new FormControl("aaab bbccc");
      const validated = UniversalValidators.noWhitespace(control);
      expect(validated).toEqual({ noWhitespaceRequired: true });
    });
  });

  describe("noEmptyString ", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.noEmptyString(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid string", () => {
      const control: FormControl = new FormControl("aaabbbccc");
      const validated = UniversalValidators.noEmptyString(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid string 2", () => {
      const control: FormControl = new FormControl(" a ");
      const validated = UniversalValidators.noEmptyString(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid string", () => {
      const control: FormControl = new FormControl(" ");
      const validated = UniversalValidators.noEmptyString(control);
      expect(validated).toEqual({ noEmptyString: true });
    });

    it("should work for invalid string 2", () => {
      const control: FormControl = new FormControl("  ");
      const validated = UniversalValidators.noEmptyString(control);
      expect(validated).toEqual({ noEmptyString: true });
    });
  });

  describe("numberRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.isNumber(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid number", () => {
      const control: FormControl = new FormControl("453");
      const validated = UniversalValidators.isNumber(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid number 2", () => {
      const control: FormControl = new FormControl("453.5");
      const validated = UniversalValidators.isNumber(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid number", () => {
      const control: FormControl = new FormControl("abbccc");
      const validated = UniversalValidators.isNumber(control);
      expect(validated).toEqual({ numberRequired: true });
    });
  });

  describe("isInRangeRule", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for empty control", () => {
      const control: FormControl = new FormControl(null);
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid number, lower range", () => {
      const control: FormControl = new FormControl("5");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid number, higher range", () => {
      const control: FormControl = new FormControl("10");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid number", () => {
      const control: FormControl = new FormControl("7");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid number small", () => {
      const control: FormControl = new FormControl("4");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toEqual({
        rangeValueToSmall: {
          requiredMinValue: 5,
          requiredMaxValue: 10,
          actual: "4"
        }
      });
    });

    it("should work for invalid number big", () => {
      const control: FormControl = new FormControl("11");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toEqual({
        rangeValueToBig: {
          requiredMinValue: 5,
          requiredMaxValue: 10,
          actual: "11"
        }
      });
    });

    it("should work for invalid input", () => {
      const control: FormControl = new FormControl("sdsd");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toEqual({ numberRequired: true });
    });
  });

  describe("minLength", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.minLength(2)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid length", () => {
      const control: FormControl = new FormControl("1");
      const validated = UniversalValidators.minLength(3)(control);
      expect(validated).toEqual({
        minLength: { requiredMinLength: 3, actualLength: 1 }
      });
    });

    it("should work for valid length", () => {
      const control: FormControl = new FormControl("1234567");
      const validated = UniversalValidators.minLength(6)(control);
      expect(validated).toBeUndefined();
    });
  });

  describe("maxLength", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.maxLength(2)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid length", () => {
      const control: FormControl = new FormControl("1234");
      const validated = UniversalValidators.maxLength(4)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid length", () => {
      const control: FormControl = new FormControl("123");
      const validated = UniversalValidators.maxLength(2)(control);
      expect(validated).toEqual({
        maxLength: { requiredMaxLength: 2, actualLength: 3 }
      });
    });
  });

  describe("min", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.min(2)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid min", () => {
      const control: FormControl = new FormControl("12");
      const validated = UniversalValidators.min(2)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid min", () => {
      const control: FormControl = new FormControl("2");
      const validated = UniversalValidators.min(2)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid min", () => {
      const control: FormControl = new FormControl("2");
      const validated = UniversalValidators.min(6)(control);
      expect(validated).toEqual({ min: { required: 6, actual: "2" } });
    });
  });

  describe("max", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.max(2)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid max", () => {
      const control: FormControl = new FormControl("2");
      const validated = UniversalValidators.max(4)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid max", () => {
      const control: FormControl = new FormControl("4");
      const validated = UniversalValidators.max(4)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid max", () => {
      const control: FormControl = new FormControl("3");
      const validated = UniversalValidators.max(2)(control);
      expect(validated).toEqual({ max: { required: 2, actual: "3" } });
    });
  });
});
