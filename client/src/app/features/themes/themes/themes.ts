import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeItem } from '../theme-item/theme-item';
import { PostBoard } from '../../posts/post-board/post-board';
import { Theme } from '../../../models';
import { ThemeService } from '../../../core/services';

@Component({
  selector: 'app-themes',
  imports: [ThemeItem, PostBoard],
  templateUrl: './themes.html',
  styleUrl: './themes.css'
})
export class Themes implements OnInit {
  themes: Theme[] = [];

  constructor(private themeService: ThemeService, private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.fetchThemes();
  }

  fetchThemes() {
    this.themeService.getAll().subscribe((themes) => {
      this.themes = themes;
      console.log(this.themes)

      this.cdRef.detectChanges();
    });
  }
}