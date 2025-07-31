import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PostItem } from '../post-item/post-item';
import { Post } from '../../../models';
import { PostsService } from '../../../core/services';

@Component({
  selector: 'app-post-board',
  imports: [PostItem],
  templateUrl: './post-board.html',
  styleUrl: './post-board.css'
})
export class PostBoard implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostsService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.postService.getAll().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);

      this.cdRef.detectChanges();
    })
  }
}
