import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepperComponent {
    constructor() {
        this.minValue = 1;
        this.isLoading = false;
        this.hideInput = false;
        this.changeValue = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.maxValue = Number.parseInt(this.maxValue);
        this.minValue = Number.parseInt(this.minValue);
        this.value = Number.parseInt(this.value);
    }
    /**
     * Handle the input change: convert the value to number and call checkAndEmitValue
     * @param {?} event any - the input change event
     * @return {?} void
     */
    inputChange(event) {
        /** @type {?} */
        let value = Number.parseInt(event.target.value);
        this.checkAndEmitValue(value);
    }
    /**
     * Call checkAndEmitValue with the current value increased by one
     * @return {?} void
     */
    increaseValue() {
        this.checkAndEmitValue(this.value + 1);
    }
    /**
     * Call checkAndEmitValue with the current value decreased by one
     * @return {?} void
     */
    decreaseValue() {
        this.checkAndEmitValue(this.value - 1);
    }
    /**
     * Check if the value parameter is allowed to be set as the new value
     * - If allowed to be set: change the value and emit the change
     * - If not allowed to be set: change the value to the nearest safeguard and emit the change
     * @private
     * @param {?} value
     * @return {?} void
     */
    checkAndEmitValue(value) {
        if (value !== value || value === undefined || value === null) {
            // NOTE: Check value against itself to check if its NaN, since NaN is the only JS value unequal to itself.
            value = this.minValue;
        }
        if (value > this.maxValue) {
            value = this.maxValue;
        }
        if (value < this.minValue) {
            value = this.minValue;
        }
        this.value = Number(value);
        this.changeValue.emit(this.value);
    }
}
StepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'valk-stepper',
                template: "<div class=\"stepper\">\n\t<button (click)=\"decreaseValue()\">-</button>\n\t<input\n\t\t[ngClass]=\"{ 'stepper__input': !hideInput }\"\n\t\t[attr.type]=\"hideInput ? 'hidden' : 'number'\"\n\t\t(change)=\"inputChange($event)\"\n\t\tpattern=\"[0-9]*\"\n\t\tautocomplete=\"off\"\n\t\tvalue=\"{{ value }}\"\n\t\tid=\"{{ stepperId }}\"\n\t>\n\t<button (click)=\"increaseValue()\"> +</button>\n</div>\n",
                styles: [""]
            }] }
];
/** @nocollapse */
StepperComponent.ctorParameters = () => [];
StepperComponent.propDecorators = {
    maxValue: [{ type: Input }],
    minValue: [{ type: Input }],
    value: [{ type: Input }],
    isLoading: [{ type: Input }],
    hideInput: [{ type: Input }],
    stepperId: [{ type: Input }],
    changeValue: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    StepperComponent.prototype.maxValue;
    /** @type {?} */
    StepperComponent.prototype.minValue;
    /** @type {?} */
    StepperComponent.prototype.value;
    /** @type {?} */
    StepperComponent.prototype.isLoading;
    /** @type {?} */
    StepperComponent.prototype.hideInput;
    /** @type {?} */
    StepperComponent.prototype.stepperId;
    /** @type {?} */
    StepperComponent.prototype.changeValue;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class StepperModule {
}
StepperModule.decorators = [
    { type: NgModule, args: [{
                declarations: [StepperComponent],
                imports: [CommonModule],
                exports: [StepperComponent],
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { StepperModule, StepperComponent as ɵa };
//# sourceMappingURL=bit-cas-aanzee.pairprogramming.stepper.js.map
