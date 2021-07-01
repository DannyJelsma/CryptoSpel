import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { ErrorMessageService } from '../../_shared/error-message.service';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent implements OnInit, AfterViewInit {

  public errorMessage = this.errorMessageService.message;

  constructor(
    private elementRef: ElementRef,
    private errorMessageService: ErrorMessageService
  ) { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.className = 'bg-secondary';
  }

}
