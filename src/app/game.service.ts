import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface test {
  status: boolean
}

interface afterGameDataUpdate {
  status: boolean
}

interface dataToSet {
  topScore: number,
  totalRows: number,
  spendedTime:number

}

@Injectable()
export class GameService {

  constructor(private http: HttpClient) { }

  setDataAfterGame (topScoreToDb, linesCountToDb,s, m, h){
    return this.http.put <afterGameDataUpdate>('/api/setdataaftergame', {topScoreToDb, linesCountToDb, s, m, h})
  }


setDataBeforeGame (){

return this.http.get <dataToSet>('/api/setdatabeforegame')

}


}
