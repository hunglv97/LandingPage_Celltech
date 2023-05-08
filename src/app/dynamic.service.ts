import {Inject, Injectable} from "@angular/core";
import {BaseApi} from "./base-api.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DynamicService extends BaseApi {
  private sessionId: string;

  constructor(
    httpClient: HttpClient) {
    super(httpClient);
    this.setEndpoint('https://api.infi2.celltech.vn', 'hub');
    this.sessionId = 'fe2a1ffe-4034-4f06-bd87-9b65ac58c140';
  }

  public createRecord(data: any) {
    data.sessionId = this.sessionId;
    return this.httpClient.post(this.baseUrl, data);
  }
}
