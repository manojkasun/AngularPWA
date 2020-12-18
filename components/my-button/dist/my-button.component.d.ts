import { TemplateRef } from "@angular/core";

import { BsModalRef, BsModalService } from "ngx-bootstrap/modal/";

export declare class MyButtonComponent {

    private modalService;

    buttonText: string;

    modalRef: BsModalRef;

    constructor(modalService: BsModalService);

    openModal(template: TemplateRef<any>): void;

}

