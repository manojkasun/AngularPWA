import { Directive, ElementRef, Input, EventEmitter, Component, Output, NgModule } from '@angular/core';
import { DomHandler } from '@bit/primefaces.primeng.internal.dom';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';

const _c0 = function (a1, a2) { return { "ui-clickable": true, "ui-button-icon-left": a1, "ui-button-icon-right": a2 }; };
function Button_span_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "span", 3);
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵclassMap(ctx_r0.icon);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(3, _c0, ctx_r0.iconPos === "left", ctx_r0.iconPos === "right"));
} }
const _c1 = function (a1, a2, a3, a4, a5, a6) { return { "ui-button ui-widget ui-state-default ui-corner-all": true, "ui-button-icon-only": a1, "ui-button-text-icon-left": a2, "ui-button-text-icon-right": a3, "ui-button-text-only": a4, "ui-button-text-empty": a5, "ui-state-disabled": a6 }; };
const _c2 = ["*"];
class ButtonDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            /** @type {?} */
            let iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            /** @type {?} */
            let iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        /** @type {?} */
        let labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    }
    /**
     * @return {?}
     */
    getStyleClass() {
        /** @type {?} */
        let styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
        if (this.icon) {
            if (this.label != null && this.label != undefined) {
                if (this.iconPos == 'left')
                    styleClass = styleClass + ' ui-button-text-icon-left';
                else
                    styleClass = styleClass + ' ui-button-text-icon-right';
            }
            else {
                styleClass = styleClass + ' ui-button-icon-only';
            }
        }
        else {
            if (this.label) {
                styleClass = styleClass + ' ui-button-text-only';
            }
            else {
                styleClass = styleClass + ' ui-button-text-empty';
            }
        }
        return styleClass;
    }
    /**
     * @return {?}
     */
    get label() {
        return this._label;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set label(val) {
        this._label = val;
        if (this.initialized) {
            DomHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
            if (!this.icon) {
                if (this._label) {
                    DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                    DomHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                }
                else {
                    DomHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                    DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
                }
            }
        }
    }
    /**
     * @return {?}
     */
    get icon() {
        return this._icon;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    set icon(val) {
        this._icon = val;
        if (this.initialized) {
            /** @type {?} */
            let iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            DomHandler.findSingle(this.el.nativeElement, '.ui-clickable').className =
                iconPosClass + ' ui-clickable ' + this.icon;
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    }
}
ButtonDirective.ɵfac = function ButtonDirective_Factory(t) { return new (t || ButtonDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
ButtonDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ButtonDirective, selectors: [["", "pButton", ""]], inputs: { iconPos: "iconPos", cornerStyleClass: "cornerStyleClass", label: "label", icon: "icon" } });
/** @nocollapse */
ButtonDirective.ctorParameters = () => [
    { type: ElementRef }
];
ButtonDirective.propDecorators = {
    iconPos: [{ type: Input }],
    cornerStyleClass: [{ type: Input }],
    label: [{ type: Input }],
    icon: [{ type: Input }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonDirective, [{
        type: Directive,
        args: [{
                selector: '[pButton]'
            }]
    }], function () { return [{ type: ɵngcc0.ElementRef }]; }, { iconPos: [{
            type: Input
        }], cornerStyleClass: [{
            type: Input
        }], label: [{
            type: Input
        }], icon: [{
            type: Input
        }] }); })();
class Button {
    constructor() {
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
}
Button.ɵfac = function Button_Factory(t) { return new (t || Button)(); };
Button.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: Button, selectors: [["p-button"]], inputs: { iconPos: "iconPos", type: "type", icon: "icon", label: "label", disabled: "disabled", style: "style", styleClass: "styleClass" }, outputs: { onClick: "onClick", onFocus: "onFocus", onBlur: "onBlur" }, ngContentSelectors: _c2, decls: 5, vars: 16, consts: [[3, "disabled", "ngClass", "click", "focus", "blur"], [3, "ngClass", "class", 4, "ngIf"], [1, "ui-button-text", "ui-clickable"], [3, "ngClass"]], template: function Button_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "button", 0);
        ɵngcc0.ɵɵlistener("click", function Button_Template_button_click_0_listener($event) { return ctx.onClick.emit($event); })("focus", function Button_Template_button_focus_0_listener($event) { return ctx.onFocus.emit($event); })("blur", function Button_Template_button_blur_0_listener($event) { return ctx.onBlur.emit($event); });
        ɵngcc0.ɵɵprojection(1);
        ɵngcc0.ɵɵtemplate(2, Button_span_2_Template, 1, 6, "span", 1);
        ɵngcc0.ɵɵelementStart(3, "span", 2);
        ɵngcc0.ɵɵtext(4);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵstyleMap(ctx.style);
        ɵngcc0.ɵɵclassMap(ctx.styleClass);
        ɵngcc0.ɵɵproperty("disabled", ctx.disabled)("ngClass", ɵngcc0.ɵɵpureFunction6(9, _c1, ctx.icon && !ctx.label, ctx.icon && ctx.label && ctx.iconPos === "left", ctx.icon && ctx.label && ctx.iconPos === "right", !ctx.icon && ctx.label, !ctx.icon && !ctx.label, ctx.disabled));
        ɵngcc0.ɵɵattribute("type", ctx.type);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.icon);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵtextInterpolate(ctx.label || "ui-btn");
    } }, directives: [ɵngcc1.NgClass, ɵngcc1.NgIf], encapsulation: 2 });
Button.propDecorators = {
    type: [{ type: Input }],
    iconPos: [{ type: Input }],
    icon: [{ type: Input }],
    label: [{ type: Input }],
    disabled: [{ type: Input }],
    style: [{ type: Input }],
    styleClass: [{ type: Input }],
    onClick: [{ type: Output }],
    onFocus: [{ type: Output }],
    onBlur: [{ type: Output }]
};
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(Button, [{
        type: Component,
        args: [{
                selector: 'p-button',
                template: `
        <button [attr.type]="type" [class]="styleClass" [style]="style" [disabled]="disabled"
            [ngClass]="{'ui-button ui-widget ui-state-default ui-corner-all':true,
                        'ui-button-icon-only': (icon && !label),
                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),
                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),
                        'ui-button-text-only': (!icon && label),
                        'ui-button-text-empty': (!icon && !label),
                        'ui-state-disabled': disabled}"
                        (click)="onClick.emit($event)" (focus)="onFocus.emit($event)" (blur)="onBlur.emit($event)">
            <ng-content></ng-content>
            <span [ngClass]="{'ui-clickable': true,
                        'ui-button-icon-left': (iconPos === 'left'), 
                        'ui-button-icon-right': (iconPos === 'right')}"
                        [class]="icon" *ngIf="icon"></span>
            <span class="ui-button-text ui-clickable">{{label||'ui-btn'}}</span>
        </button>
    `
            }]
    }], function () { return []; }, { iconPos: [{
            type: Input
        }], onClick: [{
            type: Output
        }], onFocus: [{
            type: Output
        }], onBlur: [{
            type: Output
        }], type: [{
            type: Input
        }], icon: [{
            type: Input
        }], label: [{
            type: Input
        }], disabled: [{
            type: Input
        }], style: [{
            type: Input
        }], styleClass: [{
            type: Input
        }] }); })();
class ButtonModule {
}
ButtonModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ButtonModule });
ButtonModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function ButtonModule_Factory(t) { return new (t || ButtonModule)(); }, imports: [[CommonModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ButtonModule, { declarations: function () { return [ButtonDirective, Button]; }, imports: function () { return [CommonModule]; }, exports: function () { return [ButtonDirective, Button]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(ButtonModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                exports: [ButtonDirective, Button],
                declarations: [ButtonDirective, Button]
            }]
    }], null, null); })();

export { Button, ButtonDirective, ButtonModule };


//# sourceMappingURL=bit-button.js.map