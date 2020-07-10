import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {
  private _commands = [];
  get commands() { return this._commands ?? []; }

  private endpoint = environment.endpoint + '/commands';

  constructor(private http: HttpClient) {}

  async init() {
    if (this._commands.length <= 0)
      await this.updateCommands();
  }

  async updateCommands() {
    this._commands = await this.http.get(this.endpoint).toPromise() as any;
  }

  getCommand(name: string) {
    return this.commands.find(c => c.name === name);
  }
}
