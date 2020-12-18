import { Component, TemplateRef, Input } from "@angular/core";
import { BsModalRef, BsModalService } from "ngx-bootstrap/modal/";
@Component({
  selector: "app-my-button",
  templateUrl: "./my-button.component.html",
  styleUrls: ["./my-button.component.scss"],
})
export class MyButtonComponent {
  @Input() buttonText = "My Button";
  modalRef: BsModalRef = new BsModalRef();

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
}
