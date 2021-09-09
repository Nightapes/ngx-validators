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
          actual: "4",
        },
      });
    });

    it("should work for invalid number big", () => {
      const control: FormControl = new FormControl("11");
      const validated = UniversalValidators.isInRange(5, 10)(control);
      expect(validated).toEqual({
        rangeValueToBig: {
          requiredMinValue: 5,
          requiredMaxValue: 10,
          actual: "11",
        },
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
        minLength: { requiredMinLength: 3, actualLength: 1 },
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
        maxLength: { requiredMaxLength: 2, actualLength: 3 },
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

  describe("maxDate", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.maxDate(new Date())(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid maxDate", () => {
      const control: FormControl = new FormControl("2012-12-24");
      const validated = UniversalValidators.maxDate(new Date())(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid maxDate", () => {
      const date = new Date();
      const control: FormControl = new FormControl(date.getTime());
      const validated = UniversalValidators.maxDate(date)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid date", () => {
      const date = new Date();
      const control: FormControl = new FormControl("broken");
      const validated = UniversalValidators.maxDate(date)(control);
      expect(validated).toEqual({ dateRequired: true });
    });

    it("should work for invalid maxDate", () => {
      const currentDate = new Date();
      const requiredDate = new Date("2012-12-24");
      const control: FormControl = new FormControl(currentDate);
      const validated = UniversalValidators.maxDate(requiredDate)(control);
      expect(validated).toEqual({ maxDate: { required: requiredDate, actual: currentDate } });
    });
  });

  describe("minDate", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = UniversalValidators.minDate(new Date())(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid minDate", () => {
      const control: FormControl = new FormControl("2020-12-24");
      const validated = UniversalValidators.minDate(new Date("2012-12-24"))(control);
      expect(validated).toBeUndefined();
    });

    it("should work for valid minDate", () => {
      const date = new Date();
      const control: FormControl = new FormControl(date.getTime());
      const validated = UniversalValidators.minDate(date)(control);
      expect(validated).toBeUndefined();
    });

    it("should work for invalid date", () => {
      const date = new Date();
      const control: FormControl = new FormControl("broken");
      const validated = UniversalValidators.minDate(date)(control);
      expect(validated).toEqual({ dateRequired: true });
    });

    it("should work for invalid minDate", () => {
      const currentDate = new Date("2012-12-24");
      const requiredDate = new Date();
      const control: FormControl = new FormControl(currentDate);
      const validated = UniversalValidators.minDate(requiredDate)(control);
      expect(validated).toEqual({ minDate: { required: requiredDate, actual: currentDate } });
    });
  });

  describe('type', () => {
    it('should allow empty input', () => {
      expect(UniversalValidators.type('number')(new FormControl(''))).toBeNull();
      expect(UniversalValidators.type('string')(new FormControl(''))).toBeNull();
      expect(UniversalValidators.type('object')(new FormControl(''))).toBeNull();
      expect(UniversalValidators.type('boolean')(new FormControl(''))).toBeNull();
    });

    it('should check for number type', () => {
      expect(UniversalValidators.type('number')(new FormControl(1))).toBeNull()
      expect(UniversalValidators.type('number')(new FormControl('str'))).toEqual({
        'type': {'required': 'number', 'actual': 'string'}
      });
      expect(UniversalValidators.type('number')(new FormControl({key: 'value'}))).toEqual({
        'type': {'required': 'number', 'actual': 'object'}
      });
      expect(UniversalValidators.type('number')(new FormControl(true))).toEqual({
        'type': {'required': 'number', 'actual': 'boolean'}
      });
    });

    it('should check for string type', () => {
      expect(UniversalValidators.type('string')(new FormControl('str'))).toBeNull();
      expect(UniversalValidators.type('string')(new FormControl(1))).toEqual({
        'type': {'required': 'string', 'actual': 'number'}
      });
      expect(UniversalValidators.type('string')(new FormControl({key: 'value'}))).toEqual({
        'type': {'required': 'string', 'actual': 'object'}
      });
      expect(UniversalValidators.type('string')(new FormControl(true))).toEqual({
        'type': {'required': 'string', 'actual': 'boolean'}
      });
    });

    it('should check for boolean type', () => {
      expect(UniversalValidators.type('boolean')(new FormControl(true))).toBeNull();
      expect(UniversalValidators.type('boolean')(new FormControl(1))).toEqual({
        'type': {'required': 'boolean', 'actual': 'number'}
      });
      expect(UniversalValidators.type('boolean')(new FormControl({key: 'value'}))).toEqual({
        'type': {'required': 'boolean', 'actual': 'object'}
      });
      expect(UniversalValidators.type('boolean')(new FormControl('str'))).toEqual({
        'type': {'required': 'boolean', 'actual': 'string'}
      });
    });

    it('should check for object type', () => {
      expect(UniversalValidators.type('object')(new FormControl({key: 'value'}))).toBeNull();
      expect(UniversalValidators.type('object')(new FormControl(1))).toEqual({
        'type': {'required': 'object', 'actual': 'number'}
      });
      expect(UniversalValidators.type('object')(new FormControl(true))).toEqual({
        'type': {'required': 'object', 'actual': 'boolean'}
      });
      expect(UniversalValidators.type('object')(new FormControl('str'))).toEqual({
        'type': {'required': 'object', 'actual': 'string'}
      });
    });
  });
});
