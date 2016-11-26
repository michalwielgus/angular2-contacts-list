import {Component, Input} from '@angular/core';
import { md5 } from '../gravatar.service';
@Component({
    selector: 'app-gravatar',
    templateUrl: './gravatar.component.html'
})
export class GravatarComponent {
    @Input() size: number = 200;
    @Input() email: string = '';
    gravatarUrl = 'http://www.gravatar.com/avatar/' + md5(this.email) + '?s=' + this.size;
}
