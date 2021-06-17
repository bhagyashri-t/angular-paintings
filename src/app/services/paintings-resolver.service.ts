import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaintingsResolverService {

  constructor(private http: HttpClient) { }
  resolve(rsState: RouterStateSnapshot): Observable<any> {
    return this.http.get('../../assets/paintings.json');
  }
}
