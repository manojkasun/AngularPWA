(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@bit/primefaces.primeng.internal.dom'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@bit/primefaces.primeng.button', ['exports', '@angular/core', '@bit/primefaces.primeng.internal.dom', '@angular/common'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit.button = {}), global.ng.core, global.internal_dom, global.ng.common));
}(this, function (exports, core, internal_dom, common) { 'use strict';

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
            internal_dom.DomHandler.addMultipleClasses(this.el.nativeElement, this.getStyleClass());
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
                    internal_dom.DomHandler.findSingle(this.el.nativeElement, '.ui-button-text').textContent = this._label;
                    if (!this.icon) {
                        if (this._label) {
                            internal_dom.DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-empty');
                            internal_dom.DomHandler.addClass(this.el.nativeElement, 'ui-button-text-only');
                        }
                        else {
                            internal_dom.DomHandler.addClass(this.el.nativeElement, 'ui-button-text-empty');
                            internal_dom.DomHandler.removeClass(this.el.nativeElement, 'ui-button-text-only');
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
                    internal_dom.DomHandler.findSingle(this.el.nativeElement, '.ui-clickable').className =
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
            { type: core.Directive, args: [{
                        selector: '[pButton]'
                    },] }
        ];
        /** @nocollapse */
        ButtonDirective.ctorParameters = function () { return [
            { type: core.ElementRef }
        ]; };
        ButtonDirective.propDecorators = {
            iconPos: [{ type: core.Input }],
            cornerStyleClass: [{ type: core.Input }],
            label: [{ type: core.Input }],
            icon: [{ type: core.Input }]
        };
        return ButtonDirective;
    }());
    var Button = /** @class */ (function () {
        function Button() {
            this.iconPos = 'left';
            this.onClick = new core.EventEmitter();
            this.onFocus = new core.EventEmitter();
            this.onBlur = new core.EventEmitter();
        }
        Button.decorators = [
            { type: core.Component, args: [{
                        selector: 'p-button',
                        template: "\n        <button [attr.type]=\"type\" [class]=\"styleClass\" [style]=\"style\" [disabled]=\"disabled\"\n            [ngClass]=\"{'ui-button ui-widget ui-state-default ui-corner-all':true,\n                        'ui-button-icon-only': (icon && !label),\n                        'ui-button-text-icon-left': (icon && label && iconPos === 'left'),\n                        'ui-button-text-icon-right': (icon && label && iconPos === 'right'),\n                        'ui-button-text-only': (!icon && label),\n                        'ui-button-text-empty': (!icon && !label),\n                        'ui-state-disabled': disabled}\"\n                        (click)=\"onClick.emit($event)\" (focus)=\"onFocus.emit($event)\" (blur)=\"onBlur.emit($event)\">\n            <ng-content></ng-content>\n            <span [ngClass]=\"{'ui-clickable': true,\n                        'ui-button-icon-left': (iconPos === 'left'), \n                        'ui-button-icon-right': (iconPos === 'right')}\"\n                        [class]=\"icon\" *ngIf=\"icon\"></span>\n            <span class=\"ui-button-text ui-clickable\">{{label||'ui-btn'}}</span>\n        </button>\n    "
                    }] }
        ];
        Button.propDecorators = {
            type: [{ type: core.Input }],
            iconPos: [{ type: core.Input }],
            icon: [{ type: core.Input }],
            label: [{ type: core.Input }],
            disabled: [{ type: core.Input }],
            style: [{ type: core.Input }],
            styleClass: [{ type: core.Input }],
            onClick: [{ type: core.Output }],
            onFocus: [{ type: core.Output }],
            onBlur: [{ type: core.Output }]
        };
        return Button;
    }());
    var ButtonModule = /** @class */ (function () {
        function ButtonModule() {
        }
        ButtonModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule],
                        exports: [ButtonDirective, Button],
                        declarations: [ButtonDirective, Button]
                    },] }
        ];
        return ButtonModule;
    }());

    exports.Button = Button;
    exports.ButtonDirective = ButtonDirective;
    exports.ButtonModule = ButtonModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=bit-button.umd.js.map
