import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a0) { return { "stepper__input": a0 }; };
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
StepperComponent.ɵfac = function StepperComponent_Factory(t) { return new (t || StepperComponent)(); };
StepperComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: StepperComponent, selectors: [["valk-stepper"]], inputs: { minValue: "minValue", isLoading: "isLoading", hideInput: "hideInput", maxValue: "maxValue", value: "value", stepperId: "stepperId" }, outputs: { changeValue: "changeValue" }, decls: 6, vars: 6, consts: [[1, "stepper"], [3, "click"], ["pattern", "[0-9]*", "autocomplete", "off", 3, "ngClass", "value", "id", "change"]], template: function StepperComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "button", 1);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_button_click_1_listener() { return ctx.decreaseValue(); });
        ɵngcc0.ɵɵtext(2, "-");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "input", 2);
        ɵngcc0.ɵɵlistener("change", function StepperComponent_Template_input_change_3_listener($event) { return ctx.inputChange($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(4, "button", 1);
        ɵngcc0.ɵɵlistener("click", function StepperComponent_Template_button_click_4_listener() { return ctx.increaseValue(); });
        ɵngcc0.ɵɵtext(5, " +");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵpropertyInterpolate("value", ctx.value);
        ɵngcc0.ɵɵpropertyInterpolate("id", ctx.stepperId);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(4, _c0, !ctx.hideInput));
        ɵngcc0.ɵɵattribute("type", ctx.hideInput ? "hidden" : "number");
    } }, directives: [ɵngcc1.NgClass], styles: [""] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StepperComponent, [{
        type: Component,
        args: [{
                selector: 'valk-stepper',
                template: "<div class=\"stepper\">\n\t<button (click)=\"decreaseValue()\">-</button>\n\t<input\n\t\t[ngClass]=\"{ 'stepper__input': !hideInput }\"\n\t\t[attr.type]=\"hideInput ? 'hidden' : 'number'\"\n\t\t(change)=\"inputChange($event)\"\n\t\tpattern=\"[0-9]*\"\n\t\tautocomplete=\"off\"\n\t\tvalue=\"{{ value }}\"\n\t\tid=\"{{ stepperId }}\"\n\t>\n\t<button (click)=\"increaseValue()\"> +</button>\n</div>\n",
                styles: [""]
            }]
    }], function () { return []; }, { minValue: [{
            type: Input
        }], isLoading: [{
            type: Input
        }], hideInput: [{
            type: Input
        }], changeValue: [{
            type: Output
        }], maxValue: [{
            type: Input
        }], value: [{
            type: Input
        }], stepperId: [{
            type: Input
        }] }); })();
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
StepperModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: StepperModule });
StepperModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function StepperModule_Factory(t) { return new (t || StepperModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(StepperModule, { declarations: function () { return [StepperComponent]; }, imports: function () { return [CommonModule]; }, exports: function () { return [StepperComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(StepperModule, [{
        type: NgModule,
        args: [{
                declarations: [StepperComponent],
                imports: [CommonModule],
                exports: [StepperComponent]
            }]
    }], null, null); })();

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