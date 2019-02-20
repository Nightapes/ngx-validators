import { Directive, forwardRef, Input, OnDestroy } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Subscription } from 'rxjs';
import { delay } from 'rxjs/operators';

@Directive({
  selector: '[equalTo][ngModel], [equalTo][formControlName], [equalTo][formControl]',
  providers: [{
    provide: NG_VALIDATORS,
    // tslint:disable-next-line:no-forward-ref
    useExisting: forwardRef(() => EqualToDirective),
    multi: true
  }]
})
export class EqualToDirective implements Validator, OnDestroy {

  @Input() equalTo: string | AbstractControl;

  private subscription: Subscription;

  validate(c: AbstractControl): ValidationErrors | null {
    const otherControl = typeof this.equalTo === 'string' ? c.parent.get(this.equalTo) : this.equalTo;
    if (!this.subscription) {
      this.subscription = otherControl.valueChanges
        .pipe(delay(1)).subscribe(() => {
          c.updateValueAndValidity()
        });
    }
    return c.value !== otherControl.value ? {notEqualTo: true} : null;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
