import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidateBrService } from 'angular-validate-br';
import { Cooperated } from 'src/app/models/cooperated';
import { CpfService } from 'src/app/services/cpf.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  form: FormGroup;
  selectedCooperated: Cooperated;
  invalid: boolean = false;

  constructor(private formBuilder: FormBuilder, private validateBrService: ValidateBrService, private cpfService: CpfService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      cpf: new FormControl('', [Validators.required, this.validateBrService.cpf])
    })
  }

  search(): void {
    let cpf = this.form.get('cpf').value;
    let validCpf = this.cpfService.search(cpf);

    if (validCpf) {
      this.invalid = false;
      this.selectedCooperated = validCpf as Cooperated;
    }
    else
      this.invalid = true;
  }

}
