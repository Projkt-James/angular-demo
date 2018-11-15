import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.less']
})
export class SignUpComponent implements OnInit {
    
    emailForm: FormGroup;

    constructor(private formBuilder: FormBuilder, private router: Router) { }
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

        //Conduct async backend post HERE

        console.log(`Submitted email ${formValue.email}`);
        this.router.navigate(['confirm'])
    }

}
