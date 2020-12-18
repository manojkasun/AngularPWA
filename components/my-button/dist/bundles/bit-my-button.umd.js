(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('ngx-bootstrap/modal/')) :
    typeof define === 'function' && define.amd ? define('@bit/fraperleo.angular-tutorial.my-button', ['exports', '@angular/core', '@angular/common', 'ngx-bootstrap/modal/'], factory) :
    (global = global || self, factory((global.bit = global.bit || {}, global.bit['my-button'] = {}), global.ng.core, global.ng.common, global._));
}(this, (function (exports, core, common, _) { 'use strict';

    /**

     * @fileoverview added by tsickle

     * Generated from: my-button.component.ts

     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

     */

    var MyButtonComponent = /** @class */ (function () {

        function MyButtonComponent(modalService) {

            this.modalService = modalService;

            this.buttonText = "My Button";

            this.modalRef = new _.BsModalRef();

        }

        /**

         * @param {?} template

         * @return {?}

         */

        MyButtonComponent.prototype.openModal = /**

         * @param {?} template

         * @return {?}

         */

        function (template) {

            this.modalRef = this.modalService.show(template);

        };

        MyButtonComponent.decorators = [

            { type: core.Component, args: [{

                        selector: "app-my-button",

                        template: "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">{{buttonText}}</button>\n<ng-template #template>\n <div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Modal</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"    (click)=\"modalRef.hide()\">\n  <span aria-hidden=\"true\">&times;</span>\n  </button>\n </div>\n <div class=\"modal-body\">\n This is a modal.\n </div>\n</ng-template>\n",

                        styles: [""]

                    }] }

        ];

        /** @nocollapse */

        MyButtonComponent.ctorParameters = function () { return [

            { type: _.BsModalService }

        ]; };

        MyButtonComponent.propDecorators = {

            buttonText: [{ type: core.Input }]

        };

        return MyButtonComponent;

    }());

    if (false) {

        /** @type {?} */

        MyButtonComponent.prototype.buttonText;

        /** @type {?} */

        MyButtonComponent.prototype.modalRef;

        /**

         * @type {?}

         * @private

         */

        MyButtonComponent.prototype.modalService;

    }

    /**

     * @fileoverview added by tsickle

     * Generated from: my-button.module.ts

     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

     */

    var MyButtonModule = /** @class */ (function () {

        function MyButtonModule() {

        }

        MyButtonModule.decorators = [

            { type: core.NgModule, args: [{

                        declarations: [MyButtonComponent],

                        imports: [

                            common.CommonModule

                        ],

                        exports: [MyButtonComponent]

                    },] }

        ];

        return MyButtonModule;

    }());

    exports.MyButtonModule = MyButtonModule;
    exports.ɵa = MyButtonComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=bit-my-button.umd.js.map
