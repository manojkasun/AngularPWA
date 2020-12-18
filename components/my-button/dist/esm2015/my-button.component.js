/**

 * @fileoverview added by tsickle

 * Generated from: my-button.component.ts

 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc

 */

import { Component, Input } from "@angular/core";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal/";

export class MyButtonComponent {

    /**

     * @param {?} modalService

     */

    constructor(modalService) {

        this.modalService = modalService;

        this.buttonText = "My Button";

        this.modalRef = new BsModalRef();

    }

    /**

     * @param {?} template

     * @return {?}

     */

    openModal(template) {

        this.modalRef = this.modalService.show(template);

    }

}

MyButtonComponent.decorators = [

    { type: Component, args: [{

                selector: "app-my-button",

                template: "<button type=\"button\" class=\"btn btn-primary\" (click)=\"openModal(template)\">{{buttonText}}</button>\n<ng-template #template>\n <div class=\"modal-header\">\n  <h4 class=\"modal-title pull-left\">Modal</h4>\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\"    (click)=\"modalRef.hide()\">\n  <span aria-hidden=\"true\">&times;</span>\n  </button>\n </div>\n <div class=\"modal-body\">\n This is a modal.\n </div>\n</ng-template>\n",

                styles: [""]

            }] }

];

/** @nocollapse */

MyButtonComponent.ctorParameters = () => [

    { type: BsModalService }

];

MyButtonComponent.propDecorators = {

    buttonText: [{ type: Input }]

};

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BiaXQvbXktYnV0dG9uLyIsInNvdXJjZXMiOlsibXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzlELE9BQU8sRUFBRSxVQUFVLEVBQUUsY0FBYyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFNbEUsTUFBTSxPQUFPLGlCQUFpQjs7OztJQUk1QixZQUFvQixZQUE0QjtRQUE1QixpQkFBWSxHQUFaLFlBQVksQ0FBZ0I7UUFIdkMsZUFBVSxHQUFHLFdBQVcsQ0FBQztRQUNsQyxhQUFRLEdBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUVXLENBQUM7Ozs7O0lBRXBELFNBQVMsQ0FBQyxRQUEwQjtRQUNsQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25ELENBQUM7OztZQWJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsd2RBQXlDOzthQUUxQzs7OztZQUxvQixjQUFjOzs7eUJBT2hDLEtBQUs7Ozs7SUFBTix1Q0FBa0M7O0lBQ2xDLHFDQUF3Qzs7Ozs7SUFFNUIseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBUZW1wbGF0ZVJlZiwgSW5wdXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQnNNb2RhbFJlZiwgQnNNb2RhbFNlcnZpY2UgfSBmcm9tIFwibmd4LWJvb3RzdHJhcC9tb2RhbC9cIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJhcHAtbXktYnV0dG9uXCIsXG4gIHRlbXBsYXRlVXJsOiBcIi4vbXktYnV0dG9uLmNvbXBvbmVudC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wiLi9teS1idXR0b24uY29tcG9uZW50LnNjc3NcIl0sXG59KVxuZXhwb3J0IGNsYXNzIE15QnV0dG9uQ29tcG9uZW50IHtcbiAgQElucHV0KCkgYnV0dG9uVGV4dCA9IFwiTXkgQnV0dG9uXCI7XG4gIG1vZGFsUmVmOiBCc01vZGFsUmVmID0gbmV3IEJzTW9kYWxSZWYoKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1vZGFsU2VydmljZTogQnNNb2RhbFNlcnZpY2UpIHt9XG5cbiAgb3Blbk1vZGFsKHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+KSB7XG4gICAgdGhpcy5tb2RhbFJlZiA9IHRoaXMubW9kYWxTZXJ2aWNlLnNob3codGVtcGxhdGUpO1xuICB9XG59XG4iXX0=