import { CreditCardValidators } from "./creditcard-validators";
import { FormControl } from "@angular/forms";
import { americanexpress, visa, dinersclub, discover, jcb, maestro, mastercard } from "./creditcards/creditcards";

describe("CreditCardValidators", () => {
  describe("creditcard", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.isCreditCard(control);
      expect(validated).toBeUndefined();
    });

    it("should work for creditcard number (americanExpress)", () => {
      americanexpress.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for creditcard number (visa)", () => {
      visa.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for creditcard number (dinersclub)", () => {
      dinersclub.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for creditcard number (discover)", () => {
      discover.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for creditcard number (jcb)", () => {
      jcb.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for creditcard number (maestro)", () => {
      maestro.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for creditcard number (mastercard)", () => {
      mastercard.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.isCreditCard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong creditcard number 1", () => {
      const control: FormControl = new FormControl("478282246310005");
      const validated = CreditCardValidators.isCreditCard(control);
      expect(validated).toEqual({ creditcard: true });
    });

    it("should work for wrong creditcard number 2", () => {
      const control: FormControl = new FormControl("478282246310005 foo");
      const validated = CreditCardValidators.isCreditCard(control);
      expect(validated).toEqual({ creditcard: true });
    });

    it("should work for wrong creditcard number 3", () => {
      const control: FormControl = new FormControl("378282246");
      const validated = CreditCardValidators.isCreditCard(control);
      expect(validated).toEqual({ creditcard: true });
    });
  });

  describe("americanExpress", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.americanExpress(control);
      expect(validated).toBeUndefined();
    });

    it("should work for americanExpress number", () => {
      americanexpress.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.americanExpress(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong americanExpress number 1", () => {
      const control: FormControl = new FormControl("478282246310005");
      const validated = CreditCardValidators.americanExpress(control);
      expect(validated).toEqual({ americanExpress: true });
    });

    it("should work for wrong americanExpress number 2", () => {
      const control: FormControl = new FormControl("478282246310005 foo");
      const validated = CreditCardValidators.americanExpress(control);
      expect(validated).toEqual({ americanExpress: true });
    });

    it("should work for wrong americanExpress number 3", () => {
      const control: FormControl = new FormControl("378282246");
      const validated = CreditCardValidators.americanExpress(control);
      expect(validated).toEqual({ americanExpress: true });
    });
  });

  describe("visa", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.visa(control);
      expect(validated).toBeUndefined();
    });

    it("should work for visa number", () => {
      visa.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.visa(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong visa number 1", () => {
      const control: FormControl = new FormControl("401288888888188");
      const validated = CreditCardValidators.visa(control);
      expect(validated).toEqual({ visa: true });
    });

    it("should work for wrong visa number 2", () => {
      const control: FormControl = new FormControl("4012888888881881 foo");
      const validated = CreditCardValidators.visa(control);
      expect(validated).toEqual({ visa: true });
    });

    it("should work for wrong visa number 3", () => {
      const control: FormControl = new FormControl("301288");
      const validated = CreditCardValidators.visa(control);
      expect(validated).toEqual({ visa: true });
    });
  });

  describe("dinersclub", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.dinersclub(control);
      expect(validated).toBeUndefined();
    });

    it("should work for dinersclub number", () => {
      dinersclub.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.dinersclub(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong dinersclub number 1", () => {
      const control: FormControl = new FormControl("401288888888188");
      const validated = CreditCardValidators.dinersclub(control);
      expect(validated).toEqual({ dinersclub: true });
    });

    it("should work for wrong dinersclub number 2", () => {
      const control: FormControl = new FormControl("4012888888881881 foo");
      const validated = CreditCardValidators.dinersclub(control);
      expect(validated).toEqual({ dinersclub: true });
    });

    it("should work for wrong dinersclub number 3", () => {
      const control: FormControl = new FormControl("301288");
      const validated = CreditCardValidators.dinersclub(control);
      expect(validated).toEqual({ dinersclub: true });
    });
  });

  describe("discover", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.discover(control);
      expect(validated).toBeUndefined();
    });

    it("should work for discover number", () => {
      discover.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.discover(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong discover number 1", () => {
      const control: FormControl = new FormControl("401288888888188");
      const validated = CreditCardValidators.discover(control);
      expect(validated).toEqual({ discover: true });
    });

    it("should work for wrong discover number 2", () => {
      const control: FormControl = new FormControl("4012888888881881 foo");
      const validated = CreditCardValidators.discover(control);
      expect(validated).toEqual({ discover: true });
    });

    it("should work for wrong discover number 3", () => {
      const control: FormControl = new FormControl("301288");
      const validated = CreditCardValidators.discover(control);
      expect(validated).toEqual({ discover: true });
    });
  });

  describe("jcb", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.jcb(control);
      expect(validated).toBeUndefined();
    });

    it("should work for jcb number", () => {
      jcb.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.jcb(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong jcb number 1", () => {
      const control: FormControl = new FormControl("401288888888188");
      const validated = CreditCardValidators.jcb(control);
      expect(validated).toEqual({ jcb: true });
    });

    it("should work for wrong jcb number 2", () => {
      const control: FormControl = new FormControl("4012888888881881 foo");
      const validated = CreditCardValidators.jcb(control);
      expect(validated).toEqual({ jcb: true });
    });

    it("should work for wrong jcb number 3", () => {
      const control: FormControl = new FormControl("301288");
      const validated = CreditCardValidators.jcb(control);
      expect(validated).toEqual({ jcb: true });
    });
  });

  describe("maestro", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.maestro(control);
      expect(validated).toBeUndefined();
    });

    it("should work for maestro number", () => {
      maestro.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.maestro(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong maestro number 1", () => {
      const control: FormControl = new FormControl("401288888888188");
      const validated = CreditCardValidators.maestro(control);
      expect(validated).toEqual({ maestro: true });
    });

    it("should work for wrong maestro number 2", () => {
      const control: FormControl = new FormControl("4012888888881881 foo");
      const validated = CreditCardValidators.maestro(control);
      expect(validated).toEqual({ maestro: true });
    });

    it("should work for wrong maestro number 3", () => {
      const control: FormControl = new FormControl("301288");
      const validated = CreditCardValidators.maestro(control);
      expect(validated).toEqual({ maestro: true });
    });
  });

  describe("mastercard", () => {
    it("should work for empty control", () => {
      const control: FormControl = new FormControl("");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toBeUndefined();
    });

    it("should work for mastercard number", () => {
      mastercard.forEach((element) => {
        const control: FormControl = new FormControl(element);
        const validated = CreditCardValidators.mastercard(control);
        expect(validated).toBeUndefined();
      });
    });

    it("should work for wrong mastercard number 1", () => {
      const control: FormControl = new FormControl("401288888888188");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 2", () => {
      const control: FormControl = new FormControl("4012888888881881 foo");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 3", () => {
      const control: FormControl = new FormControl("301288");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 4", () => {
      const control: FormControl = new FormControl("1221009999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 5", () => {
      const control: FormControl = new FormControl("2121009999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 6", () => {
      const control: FormControl = new FormControl("2211009999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 7", () => {
      const control: FormControl = new FormControl("2220009999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 8", () => {
      const control: FormControl = new FormControl("2721009999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 9", () => {
      const control: FormControl = new FormControl("2721999999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 10", () => {
      const control: FormControl = new FormControl("2730999999999999");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 11", () => {
      const control: FormControl = new FormControl("2820999999999999 foo");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });

    it("should work for wrong mastercard number 12", () => {
      const control: FormControl = new FormControl("4111111111111111");
      const validated = CreditCardValidators.mastercard(control);
      expect(validated).toEqual({ mastercard: true });
    });
  });
});
