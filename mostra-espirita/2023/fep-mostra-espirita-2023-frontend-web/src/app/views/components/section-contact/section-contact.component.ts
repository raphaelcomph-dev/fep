import { HttpClient } from "@angular/common/http";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: "app-section-contact",
    templateUrl: "./section-contact.component.html",
    styleUrls: ["./section-contact.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionContactComponent {
    isFormSubmitted = false;
    isDisabled = false;
    isLoading = false;
    isSent = false;

    constructor(private toastr: ToastrService, private http: HttpClient, private cdr: ChangeDetectorRef) {}

    onSubmit(form: NgForm): void {
        this.isFormSubmitted = true;

        if (form.valid) {
            this.isDisabled = true;
            this.isLoading = true;
            const messagePayload = {
                nome: form.value["input-name"],
                email: form.value["input-email"],
                telefone: form.value["input-phone"],
                motivo: form.value["select-reason"],
                mensagem: form.value["input-textarea-message"],
            };

            this.http.post("https://formspree.io/f/xgebrqnp", messagePayload).subscribe({
                next: (result) => {
                    console.log("result", result);

                    this.toastr.success(`Sua mensagem foi enviada com sucesso.`, "Enviada!");
                    this.isLoading = false;
                    this.isSent = true;
                    this.cdr.detectChanges();
                },
                error: (error) => {
                    this.toastr.error(`Infelizmente ocorreu um erro no envio. Tente recarregar a tela e enviar novamente.`, "Oops...");
                    this.isLoading = false;
                    this.isSent = false;
                    this.isDisabled = false;
                    this.cdr.detectChanges();
                },
            });
        }
    }
}
