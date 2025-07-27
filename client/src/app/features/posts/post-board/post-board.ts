import { Component } from '@angular/core';
import { PostItem } from '../post-item/post-item';

@Component({
  selector: 'app-post-board',
  imports: [PostItem],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css'
})
export class PostBoard {

}
