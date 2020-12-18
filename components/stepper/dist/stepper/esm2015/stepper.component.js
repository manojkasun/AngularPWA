/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class StepperComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AYml0L2Nhcy1hYW56ZWUucGFpcnByb2dyYW1taW5nLnN0ZXBwZXIvIiwic291cmNlcyI6WyJzdGVwcGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8vRSxNQUFNLE9BQU8sZ0JBQWdCO0lBUzVCO1FBUFMsYUFBUSxHQUFRLENBQUMsQ0FBQztRQUVsQixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFFMUIsZ0JBQVcsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUUvQyxDQUFDOzs7O0lBRWhCLFFBQVE7UUFDUCxJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7SUFPRCxXQUFXLENBQUMsS0FBVTs7WUFDakIsS0FBSyxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7UUFDL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUM7Ozs7O0lBTUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7O0lBTUQsYUFBYTtRQUNaLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7Ozs7OztJQVNPLGlCQUFpQixDQUFDLEtBQVU7UUFDbkMsSUFBSSxLQUFLLEtBQUssS0FBSyxJQUFJLEtBQUssS0FBSyxTQUFTLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTtZQUM3RCwwR0FBMEc7WUFDMUcsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDdEI7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFCLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1NBQ3RCO1FBQ0QsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUMxQixLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDOzs7WUFwRUQsU0FBUyxTQUFDO2dCQUNWLFFBQVEsRUFBRSxjQUFjO2dCQUN4Qix5WkFBdUM7O2FBRXZDOzs7Ozt1QkFFQyxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzswQkFDTCxNQUFNOzs7O0lBTlAsb0NBQXVCOztJQUN2QixvQ0FBMkI7O0lBQzNCLGlDQUFvQjs7SUFDcEIscUNBQW9DOztJQUNwQyxxQ0FBb0M7O0lBQ3BDLHFDQUEyQjs7SUFDM0IsdUNBQThEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcblx0c2VsZWN0b3I6ICd2YWxrLXN0ZXBwZXInLFxuXHR0ZW1wbGF0ZVVybDogJy4vc3RlcHBlci5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL3N0ZXBwZXIuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU3RlcHBlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdEBJbnB1dCgpIG1heFZhbHVlOiBhbnk7XG5cdEBJbnB1dCgpIG1pblZhbHVlOiBhbnkgPSAxO1xuXHRASW5wdXQoKSB2YWx1ZTogYW55O1xuXHRASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0QElucHV0KCkgaGlkZUlucHV0OiBib29sZWFuID0gZmFsc2U7XG5cdEBJbnB1dCgpIHN0ZXBwZXJJZDogc3RyaW5nO1xuXHRAT3V0cHV0KCkgY2hhbmdlVmFsdWU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG5cdGNvbnN0cnVjdG9yKCkge31cblxuXHRuZ09uSW5pdCgpOiB2b2lkIHtcblx0XHR0aGlzLm1heFZhbHVlID0gTnVtYmVyLnBhcnNlSW50KHRoaXMubWF4VmFsdWUpO1xuXHRcdHRoaXMubWluVmFsdWUgPSBOdW1iZXIucGFyc2VJbnQodGhpcy5taW5WYWx1ZSk7XG5cdFx0dGhpcy52YWx1ZSA9IE51bWJlci5wYXJzZUludCh0aGlzLnZhbHVlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBIYW5kbGUgdGhlIGlucHV0IGNoYW5nZTogY29udmVydCB0aGUgdmFsdWUgdG8gbnVtYmVyIGFuZCBjYWxsIGNoZWNrQW5kRW1pdFZhbHVlXG5cdCAqIEBwYXJhbSBldmVudCBhbnkgLSB0aGUgaW5wdXQgY2hhbmdlIGV2ZW50XG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0aW5wdXRDaGFuZ2UoZXZlbnQ6IGFueSk6IHZvaWQge1xuXHRcdGxldCB2YWx1ZSA9IE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpO1xuXHRcdHRoaXMuY2hlY2tBbmRFbWl0VmFsdWUodmFsdWUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGwgY2hlY2tBbmRFbWl0VmFsdWUgd2l0aCB0aGUgY3VycmVudCB2YWx1ZSBpbmNyZWFzZWQgYnkgb25lXG5cdCAqIEByZXR1cm4gdm9pZFxuXHQgKi9cblx0aW5jcmVhc2VWYWx1ZSgpOiB2b2lkIHtcblx0XHR0aGlzLmNoZWNrQW5kRW1pdFZhbHVlKHRoaXMudmFsdWUgKyAxKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsIGNoZWNrQW5kRW1pdFZhbHVlIHdpdGggdGhlIGN1cnJlbnQgdmFsdWUgZGVjcmVhc2VkIGJ5IG9uZVxuXHQgKiBAcmV0dXJuIHZvaWRcblx0ICovXG5cdGRlY3JlYXNlVmFsdWUoKTogdm9pZCB7XG5cdFx0dGhpcy5jaGVja0FuZEVtaXRWYWx1ZSh0aGlzLnZhbHVlIC0gMSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgaWYgdGhlIHZhbHVlIHBhcmFtZXRlciBpcyBhbGxvd2VkIHRvIGJlIHNldCBhcyB0aGUgbmV3IHZhbHVlXG5cdCAqIC0gSWYgYWxsb3dlZCB0byBiZSBzZXQ6IGNoYW5nZSB0aGUgdmFsdWUgYW5kIGVtaXQgdGhlIGNoYW5nZVxuXHQgKiAtIElmIG5vdCBhbGxvd2VkIHRvIGJlIHNldDogY2hhbmdlIHRoZSB2YWx1ZSB0byB0aGUgbmVhcmVzdCBzYWZlZ3VhcmQgYW5kIGVtaXQgdGhlIGNoYW5nZVxuXHQgKiBAcGFyYW0gYW55IHZhbHVlIC0gdGhlIG51bWVyaWMgdmFsdWUgdG8gYmUgc2V0IGFzIHRoZSBuZXcgdmFsdWVcblx0ICogQHJldHVybiB2b2lkXG5cdCAqL1xuXHRwcml2YXRlIGNoZWNrQW5kRW1pdFZhbHVlKHZhbHVlOiBhbnkpOiB2b2lkIHtcblx0XHRpZiAodmFsdWUgIT09IHZhbHVlIHx8IHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpIHtcblx0XHRcdC8vIE5PVEU6IENoZWNrIHZhbHVlIGFnYWluc3QgaXRzZWxmIHRvIGNoZWNrIGlmIGl0cyBOYU4sIHNpbmNlIE5hTiBpcyB0aGUgb25seSBKUyB2YWx1ZSB1bmVxdWFsIHRvIGl0c2VsZi5cblx0XHRcdHZhbHVlID0gdGhpcy5taW5WYWx1ZTtcblx0XHR9XG5cdFx0aWYgKHZhbHVlID4gdGhpcy5tYXhWYWx1ZSkge1xuXHRcdFx0dmFsdWUgPSB0aGlzLm1heFZhbHVlO1xuXHRcdH1cblx0XHRpZiAodmFsdWUgPCB0aGlzLm1pblZhbHVlKSB7XG5cdFx0XHR2YWx1ZSA9IHRoaXMubWluVmFsdWU7XG5cdFx0fVxuXHRcdHRoaXMudmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXHRcdHRoaXMuY2hhbmdlVmFsdWUuZW1pdCh0aGlzLnZhbHVlKTtcblx0fVxufVxuIl19