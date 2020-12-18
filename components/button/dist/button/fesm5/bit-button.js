import { Directive, ElementRef, Input, EventEmitter, Component, Output, NgModule } from '@angular/core';
import { DomHandler } from '@bit/primefaces.primeng.internal.dom';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var ButtonDirective = /** @class */ (function () {
    function ButtonDirective(el) {
        this.el = el;
        this.iconPos = 'left';
        this.cornerStyleClass = 'ui-corner-all';
    }
    /**
     * @return {?}
     */
    ButtonDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
        if (this.icon) {
            /** @type {?} */
            var iconElement = document.createElement("span");
            iconElement.setAttribute("aria-hidden", "true");
            /** @type {?} */
            var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
            iconElement.className = iconPosClass + ' ui-clickable ' + this.icon;
            this.el.nativeElement.appendChild(iconElement);
        }
        /** @type {?} */
        var labelElement = document.createElement("span");
        labelElement.className = 'ui-button-text ui-clickable';
        labelElement.appendChild(document.createTextNode(this.label || 'ui-btn'));
        this.el.nativeElement.appendChild(labelElement);
        this.initialized = true;
    };
    /**
     * @return {?}
     */
    ButtonDirective.prototype.getStyleClass = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var styleClass = 'ui-button ui-widget ui-state-default ' + this.cornerStyleClass;
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
    };
    Object.defineProperty(ButtonDirective.prototype, "label", {
        get: /**
         * @return {?}
         */
        function () {
            return this._label;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonDirective.prototype, "icon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) {
            this._icon = val;
            if (this.initialized) {
                /** @type {?} */
                var iconPosClass = (this.iconPos == 'right') ? 'ui-button-icon-right' : 'ui-button-icon-left';
                DomHandler.findSingle(this.el.nativeElement, '.ui-clickable').className =
                    iconPosClass + ' ui-clickable ' + this.icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ButtonDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        while (this.el.nativeElement.hasChildNodes()) {
            this.el.nativeElement.removeChild(this.el.nativeElement.lastChild);
        }
        this.initialized = false;
    };
    ButtonDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[pButton]'
                },] }
    ];
    /** @nocollapse */
    ButtonDirective.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    ButtonDirective.propDecorators = {
        iconPos: [{ type: Input }],
        cornerStyleClass: [{ type: Input }],
        label: [{ type: Input }],
        icon: [{ type: Input }]
    };
    return ButtonDirective;
}());
var Button = /** @class */ (function () {
    function Button() {
        this.iconPos = 'left';
        this.onClick = new EventEmitter();
        this.onFocus = new EventEmitter();
        this.onBlur = new EventEmitter();
    }
    Button.decorators = [
        { type: Component, args: [{
                    selector: 'p-button',
                    template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
                }] }
    ];
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
    return Button;
}());
var ButtonModule = /** @class */ (function () {
    function ButtonModule() {
    }
    ButtonModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule],
                    exports: [ButtonDirective, Button],
                    declarations: [ButtonDirective, Button]
                },] }
    ];
    return ButtonModule;
}());

export { Button, ButtonDirective, ButtonModule };
//# sourceMappingURL=bit-button.js.map
