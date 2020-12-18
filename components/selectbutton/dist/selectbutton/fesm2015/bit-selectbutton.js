import { forwardRef, EventEmitter, Component, ChangeDetectorRef, Input, Output, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from '@bit/primefaces.primeng.utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const SELECTBUTTON_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef((/**
     * @return {?}
     */
    () => SelectButton)),
    multi: true
};
class SelectButton {
    /**
     * @param {?} cd
     */
    constructor(cd) {
        this.cd = cd;
        this.tabindex = 0;
        this.onOptionClick = new EventEmitter();
        this.onChange = new EventEmitter();
        this.onModelChange = (/**
         * @return {?}
         */
        () => { });
        this.onModelTouched = (/**
         * @return {?}
         */
        () => { });
    }
    /**
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set options(val) {
        /** @type {?} */
        let opts = this.optionLabel ? ObjectUtils.generateSelectItems(val, this.optionLabel) : val;
        this._options = opts;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
        this.cd.markForCheck();
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setDisabledState(val) {
        this.disabled = val;
    }
    /**
     * @param {?} event
     * @param {?} option
     * @param {?} index
     * @return {?}
     */
    onItemClick(event, option, index) {
        if (this.disabled || option.disabled) {
            return;
        }
        if (this.multiple) {
            /** @type {?} */
            let itemIndex = this.findItemIndex(option);
            if (itemIndex != -1)
                this.value = this.value.filter((/**
                 * @param {?} val
                 * @param {?} i
                 * @return {?}
                 */
                (val, i) => i != itemIndex));
            else
                this.value = [...this.value || [], option.value];
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
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocus(event) {
        this.focusedItem = (/** @type {?} */ (event.target));
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlur(event) {
        this.focusedItem = null;
        this.onModelTouched();
    }
    /**
     * @param {?} option
     * @return {?}
     */
    isSelected(option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return ObjectUtils.equals(option.value, this.value, this.dataKey);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    findItemIndex(option) {
        /** @type {?} */
        let index = -1;
        if (this.value) {
            for (let i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    }
}
SelectButton.decorators = [
    { type: Component, args: [{
                selector: 'p-selectButton',
                template: `
        <div [ngClass]="'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + (options ? options.length : 0)" [ngStyle]="style" [class]="styleClass">
            <div *ngFor="let option of options; let i = index" #btn class="ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}"
                [ngClass]="{'ui-state-active':isSelected(option), 'ui-state-disabled': disabled || option.disabled, 'ui-state-focus': btn == focusedItem, 
                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}" (click)="onItemClick($event,option,i)" (keydown.enter)="onItemClick($event,option,i)"
                [attr.title]="option.title" [attr.aria-label]="option.label" (focus)="onFocus($event)" (blur)="onBlur($event)" [attr.tabindex]="tabindex">
                <ng-container *ngIf="!itemTemplate else customcontent">
                    <span [ngClass]="['ui-clickable', 'ui-button-icon-left']" [class]="option.icon" *ngIf="option.icon"></span>
                    <span class="ui-button-text ui-clickable">{{option.label||'ui-btn'}}</span>
                </ng-container>
                <ng-template #customcontent>
                    <ng-container *ngTemplateOutlet="itemTemplate; context: {$implicit: option, index: i}"></ng-container>
                </ng-template>
            </div>
        </div>
    `,
                providers: [SELECTBUTTON_VALUE_ACCESSOR]
            }] }
];
/** @nocollapse */
SelectButton.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
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
class SelectButtonModule {
}
SelectButtonModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [SelectButton],
                declarations: [SelectButton]
            },] }
];

export { SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule };
//# sourceMappingURL=bit-selectbutton.js.map
