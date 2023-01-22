import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/models/tutorial.model';
import { TutorialService } from 'src/app/services/tutorial.service';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent {
  constructor(private tutorialService: TutorialService) { }

  tutorial: Tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }

  saveTutorial(): void {
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };
    this.tutorialService.create(data).subscribe({
      next: (res) => {
        this.submitted = true;
      },
      error: (error) => {
        console.error(error);
      }
    })
  }
}
