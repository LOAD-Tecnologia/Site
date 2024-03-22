// Angular
import {NgIf} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

// App
import {RotateAnimation, SlideInOutAnimation} from './animations';

interface MessageForm {
  name   : string;
  message: string;
}

@Component({
  selector   : 'app-root',
  standalone : true,
  imports    : [RouterOutlet, NgIf, ReactiveFormsModule],
  templateUrl: 'app.component.html',
  animations : [SlideInOutAnimation, RotateAnimation]
})
export class AppComponent {

  @ViewChild('contact')
  private _contactSection: ElementRef<HTMLElement> | undefined;

  showContact: boolean = false;
  accordion: any = {
    '0': 'out',
    '1': 'out',
    '2': 'out',
    '3': 'out',
    '4': 'out'
  };

  readonly form: FormGroup = new FormGroup({
    name   : new FormControl(null, [Validators.required]),
    message: new FormControl(null, [Validators.required])
  });

  toggleAccordion(id: 0 | 1 | 2 | 3 | 4): void {
    this.accordion[id] = this.accordion[id] === 'in' ? 'out' : 'in';
  }

  contactClick(): void {
    this.showContact = true;
    setTimeout((): void => {
      this._contactSection?.nativeElement?.scrollIntoView();
    });
  }

  sendMessage(): void {
    const form: MessageForm = this.form.getRawValue();
    const text: string = `Olá, me chamo ${form.name}.%0a%0a${form.message}`;
    window.open(`https://wa.me/+5548991491615?text=${text}`, '_blank');
  }

}
