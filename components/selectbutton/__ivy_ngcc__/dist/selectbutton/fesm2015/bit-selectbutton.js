import { forwardRef, EventEmitter, Component, ChangeDetectorRef, Input, Output, ContentChild, TemplateRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectUtils } from '@bit/primefaces.primeng.utils';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function () { return ["ui-clickable", "ui-button-icon-left"]; };
function SelectButton_div_1_ng_container_2_span_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 8);
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext(2).$implicit;
    ɵngcc0.ɵɵclassMap(option_r1.icon);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction0(3, _c0));
} }
function SelectButton_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, SelectButton_div_1_ng_container_2_span_1_Template, 1, 4, "span", 6);
    ɵngcc0.ɵɵelementStart(2, "span", 7);
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const option_r1 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", option_r1.icon);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(option_r1.label || "ui-btn");
} }
function SelectButton_div_1_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c1 = function (a0, a1) { return { $implicit: a0, index: a1 }; };
function SelectButton_div_1_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, SelectButton_div_1_ng_template_3_ng_container_0_Template, 1, 0, "ng-container", 9);
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext();
    const option_r1 = ctx_r11.$implicit;
    const i_r2 = ctx_r11.index;
    const ctx_r6 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", ctx_r6.itemTemplate)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction2(2, _c1, option_r1, i_r2));
} }
const _c2 = function (a0, a1, a2, a3, a4) { return { "ui-state-active": a0, "ui-state-disabled": a1, "ui-state-focus": a2, "ui-button-text-icon-left": a3, "ui-button-icon-only": a4 }; };
function SelectButton_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2, 3);
    ɵngcc0.ɵɵlistener("click", function SelectButton_div_1_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.onItemClick($event, option_r1, i_r2); })("keydown.enter", function SelectButton_div_1_Template_div_keydown_enter_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const option_r1 = ctx.$implicit; const i_r2 = ctx.index; const ctx_r14 = ɵngcc0.ɵɵnextContext(); return ctx_r14.onItemClick($event, option_r1, i_r2); })("focus", function SelectButton_div_1_Template_div_focus_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r15 = ɵngcc0.ɵɵnextContext(); return ctx_r15.onFocus($event); })("blur", function SelectButton_div_1_Template_div_blur_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.onBlur($event); });
    ɵngcc0.ɵɵtemplate(2, SelectButton_div_1_ng_container_2_Template, 4, 2, "ng-container", 4);
    ɵngcc0.ɵɵtemplate(3, SelectButton_div_1_ng_template_3_Template, 1, 5, "ng-template", null, 5, ɵngcc0.ɵɵtemplateRefExtractor);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r1 = ctx.$implicit;
    const _r3 = ɵngcc0.ɵɵreference(1);
    const _r5 = ɵngcc0.ɵɵreference(4);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMapInterpolate1("ui-button ui-widget ui-state-default ui-button-text-only ", option_r1.styleClass, "");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction5(9, _c2, ctx_r0.isSelected(option_r1), ctx_r0.disabled || option_r1.disabled, _r3 == ctx_r0.focusedItem, option_r1.icon != null, option_r1.icon && !option_r1.label));
    ɵngcc0.ɵɵattribute("title", option_r1.title)("aria-label", option_r1.label)("tabindex", ctx_r0.tabindex);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r0.itemTemplate)("ngIfElse", _r5);
} }
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
SelectButton.ɵfac = function SelectButton_Factory(t) { return new (t || SelectButton)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ChangeDetectorRef)); };
SelectButton.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: SelectButton, selectors: [["p-selectButton"]], contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵngcc0.ɵɵcontentQuery(dirIndex, TemplateRef, true);
    } if (rf & 2) {
        var _t;
        ɵngcc0.ɵɵqueryRefresh(_t = ɵngcc0.ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
    } }, inputs: { tabindex: "tabindex", options: "options", disabled: "disabled", multiple: "multiple", style: "style", styleClass: "styleClass", dataKey: "dataKey", optionLabel: "optionLabel" }, outputs: { onOptionClick: "onOptionClick", onChange: "onChange" }, features: [ɵngcc0.ɵɵProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR])], decls: 2, vars: 5, consts: [[3, "ngClass", "ngStyle"], [3, "class", "ngClass", "click", "keydown.enter", "focus", "blur", 4, "ngFor", "ngForOf"], [3, "ngClass", "click", "keydown.enter", "focus", "blur"], ["btn", ""], [4, "ngIf", "ngIfElse"], ["customcontent", ""], [3, "ngClass", "class", 4, "ngIf"], [1, "ui-button-text", "ui-clickable"], [3, "ngClass"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SelectButton_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, SelectButton_div_1_Template, 5, 15, "div", 1);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("ngClass", "ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-" + (ctx.options ? ctx.options.length : 0))("ngStyle", ctx.style);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.options);
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgStyle, ɵngcc1.NgForOf, ɵngcc1.NgIf, ɵngcc1.NgTemplateOutlet], encapsulation: 2 });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectButton, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ɵngcc0.ChangeDetectorRef }]; }, { tabindex: [{
            type: Input
        }], onOptionClick: [{
            type: Output
        }], onChange: [{
            type: Output
        }], options: [{
            type: Input
        }], disabled: [{
            type: Input
        }], multiple: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }], dataKey: [{
            type: Input
        }], optionLabel: [{
            type: Input
        }], itemTemplate: [{
            type: ContentChild,
            args: [TemplateRef, { static: false }]
        }] }); })();
class SelectButtonModule {
}
SelectButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: SelectButtonModule });
SelectButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function SelectButtonModule_Factory(t) { return new (t || SelectButtonModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(SelectButtonModule, { declarations: function () { return [SelectButton]; }, imports: function () { return [CommonModule]; }, exports: function () { return [SelectButton]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(SelectButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [SelectButton],
                declarations: [SelectButton]
            }]
    }], null, null); })();

export { SELECTBUTTON_VALUE_ACCESSOR, SelectButton, SelectButtonModule };


//# sourceMappingURL=bit-selectbutton.js.map