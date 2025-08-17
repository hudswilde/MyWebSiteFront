import { Component } from '@angular/core';
import { Menuclient } from '../../../../shared/components/menuclient/menuclient';
import { Logopag } from '../logopag/logopag';
import { Description } from '../description/description';
import { Skills } from '../skills/skills';
import { Testemonials } from '../testemonials/testemonials';

@Component({
  selector: 'app-home',
    standalone: true, // <-- ESTA LINHA É ESSENCIAL
  imports: [Menuclient,Logopag,Description,Skills,Testemonials],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
