import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.less']
})
export class SignUpComponent implements OnInit {
    
    emailForm: FormGroup;

    constructor(private formBuilder: FormBuilder) { }
    ngOnInit(): void {
        this.emailForm = this.formBuilder.group({
            email: ['', [ Validators.required, Validators.email ]]
        })
    }
    
    get email() {
        return this.emailForm.get('email');
    }

    submitHandler(): void {
        const formValue = this.emailForm.value;
        
        console.log('Submitted');
    }

}
