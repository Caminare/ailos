import { Injectable } from '@angular/core';
import { Cooperated } from '../models/cooperated';
import cpfs from '../../assets/cpflist.json';

@Injectable({
  providedIn: 'root'
})
export class CpfService {
  cpfList: Cooperated[] = cpfs;

  constructor() { }

  search(CPF: string): Cooperated | boolean {
    let foundedCpf = this.cpfList.find(x => x.CPF == CPF);

    if (foundedCpf)
      return foundedCpf;

    return false;
  }
}
