(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@bit/cas-aanzee.pairprogramming.stepper', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit['cas-aanzee'] = global.bit['cas-aanzee'] || {}, global.bit['cas-aanzee'].pairprogramming = global.bit['cas-aanzee'].pairprogramming || {}, global.bit['cas-aanzee'].pairprogramming.stepper = {}), global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var StepperComponent = /** @class */ (function () {
        function StepperComponent() {
            this.minValue = 1;
            this.isLoading = false;
            this.hideInput = false;
            this.changeValue = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        StepperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
        function () {
            this.maxValue = Number.parseInt(this.maxValue);
            this.minValue = Number.parseInt(this.minValue);
            this.value = Number.parseInt(this.value);
        };
        /**
         * Handle the input change: convert the value to number and call checkAndEmitValue
         * @param event any - the input change event
         * @return void
         */
        /**
         * Handle the input change: convert the value to number and call checkAndEmitValue
         * @param {?} event any - the input change event
         * @return {?} void
         */
        StepperComponent.prototype.inputChange = /**
         * Handle the input change: convert the value to number and call checkAndEmitValue
         * @param {?} event any - the input change event
         * @return {?} void
         */
        function (event) {
            /** @type {?} */
            var value = Number.parseInt(event.target.value);
            this.checkAndEmitValue(value);
        };
        /**
         * Call checkAndEmitValue with the current value increased by one
         * @return void
         */
        /**
         * Call checkAndEmitValue with the current value increased by one
         * @return {?} void
         */
        StepperComponent.prototype.increaseValue = /**
         * Call checkAndEmitValue with the current value increased by one
         * @return {?} void
         */
        function () {
            this.checkAndEmitValue(this.value + 1);
        };
        /**
         * Call checkAndEmitValue with the current value decreased by one
         * @return void
         */
        /**
         * Call checkAndEmitValue with the current value decreased by one
         * @return {?} void
         */
        StepperComponent.prototype.decreaseValue = /**
         * Call checkAndEmitValue with the current value decreased by one
         * @return {?} void
         */
        function () {
            this.checkAndEmitValue(this.value - 1);
        };
        /**
         * Check if the value parameter is allowed to be set as the new value
         * - If allowed to be set: change the value and emit the change
         * - If not allowed to be set: change the value to the nearest safeguard and emit the change
         * @param any value - the numeric value to be set as the new value
         * @return void
         */
        /**
         * Check if the value parameter is allowed to be set as the new value
         * - If allowed to be set: change the value and emit the change
         * - If not allowed to be set: change the value to the nearest safeguard and emit the change
         * @private
         * @param {?} value
         * @return {?} void
         */
        StepperComponent.prototype.checkAndEmitValue = /**
         * Check if the value parameter is allowed to be set as the new value
         * - If allowed to be set: change the value and emit the change
         * - If not allowed to be set: change the value to the nearest safeguard and emit the change
         * @private
         * @param {?} value
         * @return {?} void
         */
        function (value) {
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
        };
        StepperComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'valk-stepper',
                        template: "<div class=\"stepper\">\n\t<button (click)=\"decreaseValue()\">-</button>\n\t<input\n\t\t[ngClass]=\"{ 'stepper__input': !hideInput }\"\n\t\t[attr.type]=\"hideInput ? 'hidden' : 'number'\"\n\t\t(change)=\"inputChange($event)\"\n\t\tpattern=\"[0-9]*\"\n\t\tautocomplete=\"off\"\n\t\tvalue=\"{{ value }}\"\n\t\tid=\"{{ stepperId }}\"\n\t>\n\t<button (click)=\"increaseValue()\"> +</button>\n</div>\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        StepperComponent.ctorParameters = function () { return []; };
        StepperComponent.propDecorators = {
            maxValue: [{ type: core.Input }],
            minValue: [{ type: core.Input }],
            value: [{ type: core.Input }],
            isLoading: [{ type: core.Input }],
            hideInput: [{ type: core.Input }],
            stepperId: [{ type: core.Input }],
            changeValue: [{ type: core.Output }]
        };
        return StepperComponent;
    }());
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
    var StepperModule = /** @class */ (function () {
        function StepperModule() {
        }
        StepperModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [StepperComponent],
                        imports: [common.CommonModule],
                        exports: [StepperComponent],
                    },] }
        ];
        return StepperModule;
    }());

    exports.StepperModule = StepperModule;
    exports.ɵa = StepperComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bit-cas-aanzee.pairprogramming.stepper.umd.js.map
