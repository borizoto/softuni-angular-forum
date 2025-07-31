import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ThemeItem } from '../themes/theme-item/theme-item';
import { Theme } from '../../models';
import { PostBoard } from '../posts/post-board/post-board';
import { ThemeService } from '../../core/services';

@Component({
	selector: 'app-home',
	imports: [ThemeItem, PostBoard],
	templateUrl: './home.html',
	styleUrl: './home.css',
})
export class Home implements OnInit {
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
