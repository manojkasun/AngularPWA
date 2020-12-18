(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('@bit/primefaces.primeng.utils'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('@bit/primefaces.primeng.selectbutton', ['exports', '@angular/core', '@angular/common', '@bit/primefaces.primeng.utils', '@angular/forms'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.selectbutton = {}), global.ng.core, global.ng.common, global.utils, global.ng.forms));
}(this, function (exports, core, common, utils, forms) { 'use strict';

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
        provide: forms.NG_VALUE_ACCESSOR,
        useExisting: core.forwardRef((/**
         * @return {?}
         */
        function () { return SelectButton; })),
        multi: true
    };
    var SelectButton = /** @class */ (function () {
        function SelectButton(cd) {
            this.cd = cd;
            this.tabindex = 0;
            this.onOptionClick = new core.EventEmitter();
            this.onChange = new core.EventEmitter();
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
                var opts = this.optionLabel ? utils.ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
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
                return utils.ObjectUtils.equals(option.value, this.value, this.dataKey);
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
            { type: core.Component, args: [{
                        selector: 'p-selectButton',
                        template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + (options ? options.length : 0)\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options; let i = index\" #btn class=\"ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}\"\n                [ngClass]=\"{'ui-state-active':isSelected(option), 'ui-state-disabled': disabled || option.disabled, 'ui-state-focus': btn == focusedItem, \n                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}\" (click)=\"onItemClick($event,option,i)\" (keydown.enter)=\"onItemClick($event,option,i)\"\n                [attr.title]=\"option.title\" [attr.aria-label]=\"option.label\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [attr.tabindex]=\"tabindex\">\n                <ng-container *ngIf=\"!itemTemplate else customcontent\">\n                    <span [ngClass]=\"['ui-clickable', 'ui-button-icon-left']\" [class]=\"option.icon\" *ngIf=\"option.icon\"></span>\n                    <span class=\"ui-button-text ui-clickable\">{{option.label||'ui-btn'}}</span>\n                </ng-container>\n                <ng-template #customcontent>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option, index: i}\"></ng-container>\n                </ng-template>\n            </div>\n        </div>\n    ",
                        providers: [SELECTBUTTON_VALUE_ACCESSOR]
                    }] }
        ];
        /** @nocollapse */
        SelectButton.ctorParameters = function () { return [
            { type: core.ChangeDetectorRef }
        ]; };
        SelectButton.propDecorators = {
            tabindex: [{ type: core.Input }],
            multiple: [{ type: core.Input }],
            style: [{ type: core.Input }],
            styleClass: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            dataKey: [{ type: core.Input }],
            optionLabel: [{ type: core.Input }],
            onOptionClick: [{ type: core.Output }],
            onChange: [{ type: core.Output }],
            itemTemplate: [{ type: core.ContentChild, args: [core.TemplateRef, { static: false },] }],
            options: [{ type: core.Input }]
        };
        return SelectButton;
    }());
    var SelectButtonModule = /** @class */ (function () {
        function SelectButtonModule() {
        }
        SelectButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [SelectButton],
                        declarations: [SelectButton]
                    },] }
        ];
        return SelectButtonModule;
    }());

    exports.SELECTBUTTON_VALUE_ACCESSOR = SELECTBUTTON_VALUE_ACCESSOR;
    exports.SelectButton = SelectButton;
    exports.SelectButtonModule = SelectButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bit-selectbutton.umd.js.map
