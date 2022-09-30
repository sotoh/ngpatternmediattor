import { Injectable } from '@angular/core';
import { Categoria, Status, TallerLugar } from './models/models';
@Injectable({
  providedIn: 'root',
})
export class SourceService {
  constructor() {}
  MainTable() {
    let some: Status[] = [
      {
        tc: undefined,
        sr1: 6,
        d: 99,
        sr2: 70,
      },
      {
        tc: 2,
        sr1: 36,
        d: 29,
        sr2: 59,
      },
      {
        tc: 8,
        sr1: 21,
        d: 49,
        sr2: undefined,
      },
      {
        tc: undefined,
        sr1: 47,
        d: undefined,
        sr2: 28,
      },
      {
        tc: 48,
        sr1: 49,
        d: 89,
        sr2: 98,
      },
      {
        tc: 12,
        sr1: undefined,
        d: 88,
        sr2: 84,
      },
      {
        tc: 46,
        sr1: 31,
        d: 62,
        sr2: 87,
      },
      {
        tc: 43,
        sr1: 95,
        d: 17,
        sr2: 40,
      },
      {
        tc: 40,
        sr1: 8,
        d: 59,
        sr2: 79,
      },
      {
        tc: 50,
        sr1: 54,
        d: 86,
        sr2: 53,
      },
      {
        tc: 36,
        sr1: 60,
        d: 70,
        sr2: 9,
      },
      {
        tc: 5,
        sr1: 15,
        d: 51,
        sr2: 29,
      },
      {
        tc: 45,
        sr1: 45,
        d: 37,
        sr2: 29,
      },
      {
        tc: 25,
        sr1: 97,
        d: undefined,
        sr2: 56,
      },
      {
        tc: 21,
        sr1: 39,
        d: 79,
        sr2: 52,
      },
      {
        tc: 38,
        sr1: 82,
        d: 21,
        sr2: 47,
      },
      {
        tc: 26,
        sr1: 90,
        d: 72,
        sr2: 65,
      },
      {
        tc: 46,
        sr1: 10,
        d: 85,
        sr2: 26,
      },
      {
        tc: 2,
        sr1: undefined,
        d: 97,
        sr2: undefined,
      },
      {
        tc: 45,
        sr1: 67,
        d: 14,
        sr2: 65,
      },
      {
        tc: 8,
        sr1: 100,
        d: 96,
        sr2: 75,
      },
      {
        tc: 12,
        sr1: 5,
        d: 83,
        sr2: 97,
      },
      {
        tc: 21,
        sr1: 4,
        d: 59,
        sr2: 63,
      },
      {
        tc: 15,
        sr1: 47,
        d: 89,
        sr2: 91,
      },
      {
        tc: 3,
        sr1: 56,
        d: 68,
        sr2: 46,
      },
      {
        tc: 13,
        sr1: 77,
        d: 91,
        sr2: 71,
      },
      {
        tc: undefined,
        sr1: 24,
        d: undefined,
        sr2: 46,
      },
      {
        tc: undefined,
        sr1: 47,
        d: 63,
        sr2: 16,
      },
      {
        tc: 24,
        sr1: 74,
        d: 26,
        sr2: 13,
      },
      {
        tc: 22,
        sr1: 7,
        d: 59,
        sr2: 65,
      },
      {
        tc: 27,
        sr1: 1,
        d: 68,
        sr2: 79,
      },
      {
        tc: 44,
        sr1: 76,
        d: 74,
        sr2: 7,
      },
      {
        tc: 31,
        sr1: 93,
        d: 80,
        sr2: 11,
      },
      {
        tc: 30,
        sr1: 69,
        d: 71,
        sr2: 36,
      },
      {
        tc: 42,
        sr1: 56,
        d: 85,
        sr2: 64,
      },
      {
        tc: 48,
        sr1: 85,
        d: 11,
        sr2: 95,
      },
      {
        tc: 8,
        sr1: 84,
        d: 22,
        sr2: 28,
      },
      {
        tc: 15,
        sr1: 51,
        d: 29,
        sr2: 91,
      },
      {
        tc: 48,
        sr1: 77,
        d: 26,
        sr2: 75,
      },
      {
        tc: 5,
        sr1: 93,
        d: 50,
        sr2: 57,
      },
      {
        tc: 33,
        sr1: 86,
        d: 36,
        sr2: 68,
      },
      {
        tc: 5,
        sr1: 81,
        d: 10,
        sr2: 54,
      },
      {
        tc: 16,
        sr1: 27,
        d: 33,
        sr2: 6,
      },
      {
        tc: 36,
        sr1: 47,
        d: 36,
        sr2: 89,
      },
      {
        tc: 44,
        sr1: 93,
        d: 22,
        sr2: 42,
      },
      {
        tc: 36,
        sr1: undefined,
        d: undefined,
        sr2: undefined,
      },
      {
        tc: 30,
        sr1: 23,
        d: 14,
        sr2: 97,
      },
      {
        tc: undefined,
        sr1: undefined,
        d: 96,
        sr2: undefined,
      },
      {
        tc: undefined,
        sr1: undefined,
        d: undefined,
        sr2: 52,
      },
      {
        tc: 41,
        sr1: 38,
        d: 33,
        sr2: 34,
      },
    ];
    return some;
  }

  Workships() {
    let result :TallerLugar[] = [
      {
        id: 1,
        nombre: "Lugar 1",
        interno: true
      },
      {
        id: 2,
        nombre: "Lugar 2",
        interno: true
      },
      {
        id: 3,
        nombre: "Lugar 3",
        interno: true
      },
    ];
    return result;
  }
  Types() {
    let result :Categoria[] = [
      {
        id: 1,
        nombre: "General Opcion 1",
        presencia: 1
      },
      {
        id: 2,
        nombre: "General Opcion 2",
        presencia: 1
      },
      {
        id: 3,
        nombre: "TC Opcion 1",
        presencia: 2
      },
      {
        id: 4,
        nombre: "TC Opcion 2",
        presencia: 2
      },
      {
        id: 5,
        nombre: "SR Opcion 1",
        presencia: 3
      },
      {
        id: 6,
        nombre: "SR Opcion 2",
        presencia: 3
      },
      {
        id: 7,
        nombre: "SR Opcion 1",
        presencia: 5
      },
      {
        id: 8,
        nombre: "SR Opcion 2",
        presencia: 5
      },
  ];
    return result;
  }
}
