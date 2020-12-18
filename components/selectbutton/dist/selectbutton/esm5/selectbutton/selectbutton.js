var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Component, Input, Output, EventEmitter, forwardRef, ChangeDetectorRef, ContentChild, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from '../utils/objectutils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
/** @type {?} */
export var SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    function () { return SelectButton; })),
    multi: true
};
var SelectButton = /** @class */ (function () {
    function SelectButton(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        function () { });
        this.onModelTouched = (/**
         * @return {?}
         */
        function () { });
    }
    Object.defineProperty(SelectButton.prototype, "options", {
        get: /**
         * @return {?}
         */
        function () {
            return this._options;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            /** @type {?} */
            var opts = this.optionLabel ? ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
            this._options = opts;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    SelectButton.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.value = value;
        this.cd.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectButton.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectButton.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onModelTouched = fn;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    SelectButton.prototype.setDisabledState = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.disabled = val;
    };
    /**
     * @param {?} event
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    SelectButton.prototype.onItemClick = /**
     * @param {?} event
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    function (event, option, index) {
        if (this.disabled || option.disabled) {
            return;
        }
        if (this.multiple) {
            /** @type {?} */
            var itemIndex_1 = this.findItemIndex(option);
            if (itemIndex_1 != -1)
                this.value = this.value.filter((/**
                 * @param {?} val
                 * @param {?} i
                 * @return {?}
                 */
                function (val, i) { return i != itemIndex_1; }));
            else
                this.value = __spread(this.value || [], [option.value]);
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectButton.prototype.onFocus = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focusedItem = (/** @type {?} */ (event.target));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectButton.prototype.onBlur = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.focusedItem = null;
        this.onModelTouched();
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectButton.prototype.isSelected = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return ObjectUtils.equals(option.value, this.value, this.dataKey);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectButton.prototype.findItemIndex = /**
     * @param {?} option
     * @return {?}
     */
    function (option) {
        /** @type {?} */
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    SelectButton.decorators = [
        { type: Component, args: [{
                    selector: 'p-selectButton',
                    template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + (options ? options.length : 0)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options; let i = index\" #btn class=\"ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}\"\n                [ngClass]=\"{'ui-state-active':isSelected(option), 'ui-state-disabled': disabled || option.disabled, 'ui-state-focus': btn == focusedItem, \n                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}\" (click)=\"onItemClick($event,option,i)\" (keydown.enter)=\"onItemClick($event,option,i)\"\n                [attr.title]=\"option.title\" [attr.aria-label]=\"option.label\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [attr.tabindex]=\"tabindex\">\n                <ng-container *ngIf=\"!itemTemplate else customcontent\">\n                    <span [ngClass]=\"['ui-clickable', 'ui-button-icon-left']\" [class]=\"option.icon\" *ngIf=\"option.icon\"></span>\n                    <span class=\"ui-button-text ui-clickable\">{{option.label||'ui-btn'}}</span>\n                </ng-container>\n                <ng-template #customcontent>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: i}\"></ng-container>\n                </ng-template>\n            </div>\n        </div>\n    ",
                    providers: [SELECTBUTTON_VALUE_ACCESSOR]
                }] }
    ];
    /** @nocollapse */
    SelectButton.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    SelectButton.propDecorators = {
        tabindex: [{ type: Input }],
        multiple: [{ type: Input }],
        style: [{ type: Input }],
        styleClass: [{ type: Input }],
        disabled: [{ type: Input }],
        dataKey: [{ type: Input }],
        optionLabel: [{ type: Input }],
        onOptionClick: [{ type: Output }],
        onChange: [{ type: Output }],
        itemTemplate: [{ type: ContentChild, args: [TemplateRef, { static: false },] }],
        options: [{ type: Input }]
    };
    return SelectButton;
}());
export { SelectButton };
if (false) {
    /** @type {?} */
    SelectButton.prototype.tabindex;
    /** @type {?} */
    SelectButton.prototype.multiple;
    /** @type {?} */
    SelectButton.prototype.style;
    /** @type {?} */
    SelectButton.prototype.styleClass;
    /** @type {?} */
    SelectButton.prototype.disabled;
    /** @type {?} */
    SelectButton.prototype.dataKey;
    /** @type {?} */
    SelectButton.prototype.optionLabel;
    /** @type {?} */
    SelectButton.prototype.onOptionClick;
    /** @type {?} */
    SelectButton.prototype.onChange;
    /** @type {?} */
    SelectButton.prototype.itemTemplate;
    /** @type {?} */
    SelectButton.prototype.value;
    /** @type {?} */
    SelectButton.prototype.focusedItem;
    /** @type {?} */
    SelectButton.prototype._options;
    /** @type {?} */
    SelectButton.prototype.onModelChange;
    /** @type {?} */
    SelectButton.prototype.onModelTouched;
    /**
     * @type {?}
     * @private
     */
    SelectButton.prototype.cd;
}
var SelectButtonModule = /** @class */ (function () {
    function SelectButtonModule() {
    }
    SelectButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [SelectButton],
                    declarations: [SelectButton]
                },] }
    ];
    return SelectButtonModule;
}());
export { SelectButtonModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VsZWN0YnV0dG9uLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQGJpdC9zZWxlY3RidXR0b24vIiwic291cmNlcyI6WyJzZWxlY3RidXR0b24vc2VsZWN0YnV0dG9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBQyxRQUFRLEVBQUMsU0FBUyxFQUFDLEtBQUssRUFBQyxNQUFNLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQyxZQUFZLEVBQUMsV0FBVyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ2pJLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU3QyxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFDLGlCQUFpQixFQUF1QixNQUFNLGdCQUFnQixDQUFDOztBQUV2RSxNQUFNLEtBQU8sMkJBQTJCLEdBQVE7SUFDOUMsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVTs7O0lBQUMsY0FBTSxPQUFBLFlBQVksRUFBWixDQUFZLEVBQUM7SUFDM0MsS0FBSyxFQUFFLElBQUk7Q0FDWjtBQUVEO0lBb0RJLHNCQUFvQixFQUFxQjtRQUFyQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQTlCaEMsYUFBUSxHQUFXLENBQUMsQ0FBQztRQWNwQixrQkFBYSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRXRELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQVUzRCxrQkFBYTs7O1FBQWEsY0FBTyxDQUFDLEVBQUM7UUFFbkMsbUJBQWM7OztRQUFhLGNBQU8sQ0FBQyxFQUFDO0lBRVEsQ0FBQztJQUU3QyxzQkFBYSxpQ0FBTzs7OztRQUFwQjtZQUNJLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDOzs7OztRQUVELFVBQVksR0FBVTs7Z0JBQ2QsSUFBSSxHQUFHLElBQUksQ0FB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QkFDdkIsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO29CQUN2QixZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7aUJBQy9COztJQUNpQyx5QkFBQztDQUFBLEFBTG5DLElBS21DO1NBQXRCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmdNb2R1bGUsQ29tcG9uZW50LElucHV0LE91dHB1dCxFdmVudEVtaXR0ZXIsZm9yd2FyZFJlZixDaGFuZ2VEZXRlY3RvclJlZixDb250ZW50Q2hpbGQsVGVtcGxhdGVSZWZ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb21tb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1NlbGVjdEl0ZW19IGZyb20gJy4uL2NvbW1vbi9zZWxlY3RpdGVtJztcbmltcG9ydCB7T2JqZWN0VXRpbHN9IGZyb20gJy4uL3V0aWxzL29iamVjdHV0aWxzJztcbmltcG9ydCB7TkdfVkFMVUVfQUNDRVNTT1IsIENvbnRyb2xWYWx1ZUFjY2Vzc29yfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbmV4cG9ydCBjb25zdCBTRUxFQ1RCVVRUT05fVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNlbGVjdEJ1dHRvbiksXG4gIG11bHRpOiB0cnVlXG59O1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ3Atc2VsZWN0QnV0dG9uJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cIid1aS1zZWxlY3RidXR0b24gdWktYnV0dG9uc2V0IHVpLXdpZGdldCB1aS1jb3JuZXItYWxsIHVpLWJ1dHRvbnNldC0nICsgKG9wdGlvbnMgPyBvcHRpb25zLmxlbmd0aCA6IDApXCIgW25nU3R5bGVdPVwic3R5bGVcIiBbY2xhc3NdPVwic3R5bGVDbGFzc1wiPlxuICAgICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIG9wdGlvbnM7IGxldCBpID0gaW5kZXhcIiAjYnRuIGNsYXNzPVwidWktYnV0dG9uIHVpLXdpZGdldCB1aS1zdGF0ZS1kZWZhdWx0IHVpLWJ1dHRvbi10ZXh0LW9ubHkge3tvcHRpb24uc3R5bGVDbGFzc319XCJcbiAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J3VpLXN0YXRlLWFjdGl2ZSc6aXNTZWxlY3RlZChvcHRpb24pLCAndWktc3RhdGUtZGlzYWJsZWQnOiBkaXNhYmxlZCB8fCBvcHRpb24uZGlzYWJsZWQsICd1aS1zdGF0ZS1mb2N1cyc6IGJ0biA9PSBmb2N1c2VkSXRlbSwgXG4gICAgICAgICAgICAgICAgJ3VpLWJ1dHRvbi10ZXh0LWljb24tbGVmdCc6IChvcHRpb24uaWNvbiAhPSBudWxsKSwgJ3VpLWJ1dHRvbi1pY29uLW9ubHknOiAob3B0aW9uLmljb24gJiYgIW9wdGlvbi5sYWJlbCl9XCIgKGNsaWNrKT1cIm9uSXRlbUNsaWNrKCRldmVudCxvcHRpb24saSlcIiAoa2V5ZG93bi5lbnRlcik9XCJvbkl0ZW1DbGljaygkZXZlbnQsb3B0aW9uLGkpXCJcbiAgICAgICAgICAgICAgICBbYXR0ci50aXRsZV09XCJvcHRpb24udGl0bGVcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIm9wdGlvbi5sYWJlbFwiIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiAoYmx1cik9XCJvbkJsdXIoJGV2ZW50KVwiIFthdHRyLnRhYmluZGV4XT1cInRhYmluZGV4XCI+XG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpdGVtVGVtcGxhdGUgZWxzZSBjdXN0b21jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cIlsndWktY2xpY2thYmxlJywgJ3VpLWJ1dHRvbi1pY29uLWxlZnQnXVwiIFtjbGFzc109XCJvcHRpb24uaWNvblwiICpuZ0lmPVwib3B0aW9uLmljb25cIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidWktYnV0dG9uLXRleHQgdWktY2xpY2thYmxlXCI+e3tvcHRpb24ubGFiZWx8fCd1aS1idG4nfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjdXN0b21jb250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwiaXRlbVRlbXBsYXRlOyBjb250ZXh0OiB7JGltcGxpY2l0OiBvcHRpb24sIGluZGV4OiBpfVwiPjwvbmctY29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYCxcbiAgICBwcm92aWRlcnM6IFtTRUxFQ1RCVVRUT05fVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIFNlbGVjdEJ1dHRvbiBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcblxuICAgIEBJbnB1dCgpIHRhYmluZGV4OiBudW1iZXIgPSAwO1xuXG4gICAgQElucHV0KCkgbXVsdGlwbGU6IGJvb2xlYW47XG4gICAgXG4gICAgQElucHV0KCkgc3R5bGU6IGFueTtcbiAgICAgICAgXG4gICAgQElucHV0KCkgc3R5bGVDbGFzczogc3RyaW5nO1xuXG4gICAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW47XG5cbiAgICBASW5wdXQoKSBkYXRhS2V5OiBzdHJpbmdcbiAgICBcbiAgICBASW5wdXQoKSBvcHRpb25MYWJlbDogc3RyaW5nO1xuICAgIFxuICAgIEBPdXRwdXQoKSBvbk9wdGlvbkNsaWNrOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAgIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7IHN0YXRpYzogZmFsc2UgfSkgaXRlbVRlbXBsYXRlO1xuICAgIFxuICAgIHZhbHVlOiBhbnk7XG4gICAgXG4gICAgZm9jdXNlZEl0ZW06IEhUTUxEaXZFbGVtZW50O1xuICAgIFxuICAgIF9vcHRpb25zOiBhbnlbXTtcbiAgICBcbiAgICBvbk1vZGVsQ2hhbmdlOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIG9uTW9kZWxUb3VjaGVkOiBGdW5jdGlvbiA9ICgpID0+IHt9O1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmKSB7fVxuICAgIFxuICAgIEBJbnB1dCgpIGdldCBvcHRpb25zKCk6IGFueVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XG4gICAgfVxuXG4gICAgc2V0IG9wdGlvbnModmFsOiBhbnlbXSkge1xuICAgICAgICBsZXQgb3B0cyA9IHRoaXMub3B0aW9uTGFiZWwgPyBPYmplY3RVdGlscy5nZW5lcmF0ZVNlbGVjdEl0ZW1zKHZhbCwgdGhpcy5vcHRpb25MYWJlbCkgOiB2YWw7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSBvcHRzO1xuICAgIH1cbiAgICBcbiAgICB3cml0ZVZhbHVlKHZhbHVlOiBhbnkpIDogdm9pZCB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5jZC5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG4gICAgXG4gICAgcmVnaXN0ZXJPbkNoYW5nZShmbjogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlID0gZm47XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IEZ1bmN0aW9uKTogdm9pZCB7XG4gICAgICAgIHRoaXMub25Nb2RlbFRvdWNoZWQgPSBmbjtcbiAgICB9XG4gICAgXG4gICAgc2V0RGlzYWJsZWRTdGF0ZSh2YWw6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHZhbDtcbiAgICB9XG4gICAgXG4gICAgb25JdGVtQ2xpY2soZXZlbnQsIG9wdGlvbjogU2VsZWN0SXRlbSwgaW5kZXg6IG51bWJlcikge1xuICAgICAgICBpZih0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIGlmKHRoaXMubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIGxldCBpdGVtSW5kZXggPSB0aGlzLmZpbmRJdGVtSW5kZXgob3B0aW9uKTtcbiAgICAgICAgICAgIGlmKGl0ZW1JbmRleCAhPSAtMSlcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy52YWx1ZS5maWx0ZXIoKHZhbCxpKSA9PiBpIT1pdGVtSW5kZXgpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSBbLi4udGhpcy52YWx1ZXx8W10sIG9wdGlvbi52YWx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gb3B0aW9uLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLm9uT3B0aW9uQ2xpY2suZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW5hbEV2ZW50OiBldmVudCxcbiAgICAgICAgICAgIG9wdGlvbjogb3B0aW9uLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbk1vZGVsQ2hhbmdlKHRoaXMudmFsdWUpO1xuICAgICAgICBcbiAgICAgICAgdGhpcy5vbkNoYW5nZS5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbmFsRXZlbnQ6IGV2ZW50LFxuICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIG9uRm9jdXMoZXZlbnQ6IEV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW0gPSA8SFRNTERpdkVsZW1lbnQ+IGV2ZW50LnRhcmdldDtcbiAgICB9XG4gICAgXG4gICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgICAgICB0aGlzLm9uTW9kZWxUb3VjaGVkKCk7XG4gICAgfVxuICAgIFxuICAgIGlzU2VsZWN0ZWQob3B0aW9uOiBTZWxlY3RJdGVtKSB7XG4gICAgICAgIGlmKHRoaXMubXVsdGlwbGUpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maW5kSXRlbUluZGV4KG9wdGlvbikgIT0gLTE7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBPYmplY3RVdGlscy5lcXVhbHMob3B0aW9uLnZhbHVlLCB0aGlzLnZhbHVlLCB0aGlzLmRhdGFLZXkpO1xuICAgIH1cbiAgICBcbiAgICBmaW5kSXRlbUluZGV4KG9wdGlvbjogU2VsZWN0SXRlbSkge1xuICAgICAgICBsZXQgaW5kZXggPSAtMTtcbiAgICAgICAgaWYodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMudmFsdWUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnZhbHVlW2ldID09IG9wdGlvbi52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxufVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICAgIGV4cG9ydHM6IFtTZWxlY3RCdXR0b25dLFxuICAgIGRlY2xhcmF0aW9uczogW1NlbGVjdEJ1dHRvbl1cbn0pXG5leHBvcnQgY2xhc3MgU2VsZWN0QnV0dG9uTW9kdWxlIHsgfVxuIl19