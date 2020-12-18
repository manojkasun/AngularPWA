/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
/**
 * Default values provider for typeahead
 */
export class TypeaheadConfig {
    constructor() {
        /**
         * sets use adaptive position
         */
        this.adaptivePosition = false;
        /**
         * turn on/off animation
         */
        this.isAnimated = false;
        /**
         * used to hide results on blur
         */
        this.hideResultsOnBlur = true;
        /**
         * used to choose the first item in typeahead container
         */
        this.selectFirstItem = true;
        /**
         * used to active/inactive the first item in typeahead container
         */
        this.isFirstItemActive = true;
        /**
         * used to choose set minimal no of characters that needs to
         * be entered before typeahead kicks-in
         */
        this.minLength = 1;
    }
}
TypeaheadConfig.decorators = [
    { type: Injectable }
];
if (false) {
    /**
     * sets use adaptive position
     * @type {?}
     */
    TypeaheadConfig.prototype.adaptivePosition;
    /**
     * turn on/off animation
     * @type {?}
     */
    TypeaheadConfig.prototype.isAnimated;
    /**
     * used to hide results on blur
     * @type {?}
     */
    TypeaheadConfig.prototype.hideResultsOnBlur;
    /**
     * used to choose the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.selectFirstItem;
    /**
     * used to active/inactive the first item in typeahead container
     * @type {?}
     */
    TypeaheadConfig.prototype.isFirstItemActive;
    /**
     * used to choose set minimal no of characters that needs to
     * be entered before typeahead kicks-in
     * @type {?}
     */
    TypeaheadConfig.prototype.minLength;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvdHlwZWFoZWFkL3R5cGVhaGVhZC8iLCJzb3VyY2VzIjpbInR5cGVhaGVhZC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7QUFJM0MsTUFBTSxPQUFPLGVBQWU7SUFENUI7Ozs7UUFHRSxxQkFBZ0IsR0FBRyxLQUFLLENBQUM7Ozs7UUFFekIsZUFBVSxHQUFHLEtBQUssQ0FBQzs7OztRQUVuQixzQkFBaUIsR0FBRyxJQUFJLENBQUM7Ozs7UUFFekIsb0JBQWUsR0FBRyxJQUFJLENBQUM7Ozs7UUFFdkIsc0JBQWlCLEdBQUcsSUFBSSxDQUFDOzs7OztRQUl6QixjQUFTLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7OztZQWhCQSxVQUFVOzs7Ozs7O0lBR1QsMkNBQXlCOzs7OztJQUV6QixxQ0FBbUI7Ozs7O0lBRW5CLDRDQUF5Qjs7Ozs7SUFFekIsMENBQXVCOzs7OztJQUV2Qiw0Q0FBeUI7Ozs7OztJQUl6QixvQ0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0eXBlYWhlYWQgKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWRDb25maWcge1xuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xuICAvKiogdHVybiBvbi9vZmYgYW5pbWF0aW9uICovXG4gIGlzQW5pbWF0ZWQgPSBmYWxzZTtcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHRzIG9uIGJsdXIgKi9cbiAgaGlkZVJlc3VsdHNPbkJsdXIgPSB0cnVlO1xuICAvKiogdXNlZCB0byBjaG9vc2UgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xuICBzZWxlY3RGaXJzdEl0ZW0gPSB0cnVlO1xuICAvKiogdXNlZCB0byBhY3RpdmUvaW5hY3RpdmUgdGhlIGZpcnN0IGl0ZW0gaW4gdHlwZWFoZWFkIGNvbnRhaW5lciAqL1xuICBpc0ZpcnN0SXRlbUFjdGl2ZSA9IHRydWU7XG4gIC8qKiB1c2VkIHRvIGNob29zZSBzZXQgbWluaW1hbCBubyBvZiBjaGFyYWN0ZXJzIHRoYXQgbmVlZHMgdG9cbiAgICogYmUgZW50ZXJlZCBiZWZvcmUgdHlwZWFoZWFkIGtpY2tzLWluXG4gICAqL1xuICBtaW5MZW5ndGggPSAxO1xufVxuIl19