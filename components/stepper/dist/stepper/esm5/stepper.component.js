/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
var StepperComponent = /** @class */ (function () {
    function StepperComponent() {
        this.minValue = 1;
        this.isLoading = false;
        this.hideInput = false;
        this.changeValue = new EventEmitter();
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
        { type: Component, args: [{
                    selector: 'valk-stepper',
                    template: "<div class=\"stepper\">\n\t<button (click)=\"decreaseValue()\">-</button>\n\t<input\n\t\t[ngClass]=\"{ 'stepper__input': !hideInput }\"\n\t\t[attr.type]=\"hideInput ? 'hidden' : 'number'\"\n\t\t(change)=\"inputChange($event)\"\n\t\tpattern=\"[0-9]*\"\n\t\tautocomplete=\"off\"\n\t\tvalue=\"{{ value }}\"\n\t\tid=\"{{ stepperId }}\"\n\t>\n\t<button (click)=\"increaseValue()\"> +</button>\n</div>\n",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    StepperComponent.ctorParameters = function () { return []; };
    StepperComponent.propDecorators = {
        maxValue: [{ type: Input }],
        minValue: [{ type: Input }],
        value: [{ type: Input }],
        isLoading: [{ type: Input }],
        hideInput: [{ type: Input }],
        stepperId: [{ type: Input }],
        changeValue: [{ type: Output }]
    };
    return StepperComponent;
}());
export { StepperComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L2Nhcy1hYW56ZWUucGFpcnByb2dyYW1taW5nLnN0ZXBwZXIvIiwic291cmNlcyI6WyJzdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUvRTtJQWNDO1FBUFMsYUFBUSxHQUFRLENBQUMsQ0FBQztRQUVsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFMUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUvQyxDQUFDOzs7O0lBRWhCLG1DQUFROzs7SUFBUjtRQUNDLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7SUFDSCxzQ0FBVzs7Ozs7SUFBWCxVQUFZLEtBQVU7O1lBQ2pCLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQy9DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHOzs7OztJQUNILHdDQUFhOzs7O0lBQWI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7OztPQUdHOzs7OztJQUNILHdDQUFhOzs7O0lBQWI7UUFDQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRUQ7Ozs7OztPQU1HOzs7Ozs7Ozs7SUFDSyw0Q0FBaUI7Ozs7Ozs7O0lBQXpCLFVBQTBCLEtBQVU7UUFDbkMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUM3RCwwR0FBMEc7WUFDMUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOztnQkFwRUQsU0FBUyxTQUFDO29CQUNWLFFBQVEsRUFBRSxjQUFjO29CQUN4Qix5WkFBdUM7O2lCQUV2Qzs7Ozs7MkJBRUMsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLEtBQUs7OEJBQ0wsTUFBTTs7SUF5RFIsdUJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQWhFWSxnQkFBZ0I7OztJQUM1QixvQ0FBdUI7O0lBQ3ZCLG9DQUEyQjs7SUFDM0IsaUNBQW9COztJQUNwQixxQ0FBb0M7O0lBQ3BDLHFDQUFvQzs7SUFDcEMscUNBQTJCOztJQUMzQix1Q0FBOEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuXHRzZWxlY3RvcjogJ3ZhbGstc3RlcHBlcicsXG5cdHRlbXBsYXRlVXJsOiAnLi9zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vc3RlcHBlci5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTdGVwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0QElucHV0KCkgbWF4VmFsdWU6IGFueTtcblx0QElucHV0KCkgbWluVmFsdWU6IGFueSA9IDE7XG5cdEBJbnB1dCgpIHZhbHVlOiBhbnk7XG5cdEBJbnB1dCgpIGlzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXHRASW5wdXQoKSBoaWRlSW5wdXQ6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgc3RlcHBlcklkOiBzdHJpbmc7XG5cdEBPdXRwdXQoKSBjaGFuZ2VWYWx1ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cblx0Y29uc3RydWN0b3IoKSB7fVxuXG5cdG5nT25Jbml0KCk6IHZvaWQge1xuXHRcdHRoaXMubWF4VmFsdWUgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5tYXhWYWx1ZSk7XG5cdFx0dGhpcy5taW5WYWx1ZSA9IE51bWJlci5wYXJzZUludCh0aGlzLm1pblZhbHVlKTtcblx0XHR0aGlzLnZhbHVlID0gTnVtYmVyLnBhcnNlSW50KHRoaXMudmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEhhbmRsZSB0aGUgaW5wdXQgY2hhbmdlOiBjb252ZXJ0IHRoZSB2YWx1ZSB0byBudW1iZXIgYW5kIGNhbGwgY2hlY2tBbmRFbWl0VmFsdWVcblx0ICogQHBhcmFtIGV2ZW50IGFueSAtIHRoZSBpbnB1dCBjaGFuZ2UgZXZlbnRcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRpbnB1dENoYW5nZShldmVudDogYW55KTogdm9pZCB7XG5cdFx0bGV0IHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSk7XG5cdFx0dGhpcy5jaGVja0FuZEVtaXRWYWx1ZSh2YWx1ZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsbCBjaGVja0FuZEVtaXRWYWx1ZSB3aXRoIHRoZSBjdXJyZW50IHZhbHVlIGluY3JlYXNlZCBieSBvbmVcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRpbmNyZWFzZVZhbHVlKCk6IHZvaWQge1xuXHRcdHRoaXMuY2hlY2tBbmRFbWl0VmFsdWUodGhpcy52YWx1ZSArIDEpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGwgY2hlY2tBbmRFbWl0VmFsdWUgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBkZWNyZWFzZWQgYnkgb25lXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0ZGVjcmVhc2VWYWx1ZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNoZWNrQW5kRW1pdFZhbHVlKHRoaXMudmFsdWUgLSAxKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiB0aGUgdmFsdWUgcGFyYW1ldGVyIGlzIGFsbG93ZWQgdG8gYmUgc2V0IGFzIHRoZSBuZXcgdmFsdWVcblx0ICogLSBJZiBhbGxvd2VkIHRvIGJlIHNldDogY2hhbmdlIHRoZSB2YWx1ZSBhbmQgZW1pdCB0aGUgY2hhbmdlXG5cdCAqIC0gSWYgbm90IGFsbG93ZWQgdG8gYmUgc2V0OiBjaGFuZ2UgdGhlIHZhbHVlIHRvIHRoZSBuZWFyZXN0IHNhZmVndWFyZCBhbmQgZW1pdCB0aGUgY2hhbmdlXG5cdCAqIEBwYXJhbSBhbnkgdmFsdWUgLSB0aGUgbnVtZXJpYyB2YWx1ZSB0byBiZSBzZXQgYXMgdGhlIG5ldyB2YWx1ZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdHByaXZhdGUgY2hlY2tBbmRFbWl0VmFsdWUodmFsdWU6IGFueSk6IHZvaWQge1xuXHRcdGlmICh2YWx1ZSAhPT0gdmFsdWUgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkge1xuXHRcdFx0Ly8gTk9URTogQ2hlY2sgdmFsdWUgYWdhaW5zdCBpdHNlbGYgdG8gY2hlY2sgaWYgaXRzIE5hTiwgc2luY2UgTmFOIGlzIHRoZSBvbmx5IEpTIHZhbHVlIHVuZXF1YWwgdG8gaXRzZWxmLlxuXHRcdFx0dmFsdWUgPSB0aGlzLm1pblZhbHVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPiB0aGlzLm1heFZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMubWF4VmFsdWU7XG5cdFx0fVxuXHRcdGlmICh2YWx1ZSA8IHRoaXMubWluVmFsdWUpIHtcblx0XHRcdHZhbHVlID0gdGhpcy5taW5WYWx1ZTtcblx0XHR9XG5cdFx0dGhpcy52YWx1ZSA9IE51bWJlcih2YWx1ZSk7XG5cdFx0dGhpcy5jaGFuZ2VWYWx1ZS5lbWl0KHRoaXMudmFsdWUpO1xuXHR9XG59XG4iXX0=