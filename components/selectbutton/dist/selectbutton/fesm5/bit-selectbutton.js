import { forwardRef, Component, ChangeDetectorRef, Input, Output, ContentChild, TemplateRef, EventEmitter, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from '@bit/primefaces.primeng.utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

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
/** @type {?} */
var SELECTBUTTON_VALUE_ACCESSOR = {
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

export { SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule };
//# sourceMappingURL=bit-selectbutton.js.map
