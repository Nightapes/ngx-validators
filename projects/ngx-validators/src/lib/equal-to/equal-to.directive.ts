import type { OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { Directive, forwardRef, Input } from '@angular/core';
import type {
  AbstractControl,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { NG_VALIDATORS } from '@angular/forms';
import type { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
  selector:
    '[equalTo][ngModel], [equalTo][formControlName], [equalTo][formControl]',
  providers: [
    {
      provide: NG_VALIDATORS,
      // tslint:disable-next-line:no-forward-ref
      useExisting: forwardRef(() => EqualToDirective),
      multi: true,
    },
  ],
})
export class EqualToDirective implements Validator, OnDestroy, OnChanges {
  @Input() equalTo: string | AbstractControl = '';

  private subscription?: Subscription;
  private onChange?: () => void;

  validate(c: AbstractControl): ValidationErrors | null {
    const otherControl =
      typeof this.equalTo === 'string'
        ? c.parent?.get(this.equalTo)
        : this.equalTo;

    if (!this.subscription) {
      this.subscription = otherControl?.valueChanges
        .pipe(delay(1))
        .subscribe(() => {
          c.updateValueAndValidity();
        });
    }
    return c.value !== otherControl?.value ? { notEqualTo: true } : null;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['equalTo'] && !changes['equalTo'].isFirstChange()) {
      if (this.onChange) {
        this.onChange();
      }
    }
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
