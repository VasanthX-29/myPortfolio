import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
    skills=[`Java full stack development`,
    `PostgreSQL`,
    `Data modeling and Evaluation`,
    `Cyber Security`];
    skillDesc=[`Done 3 projects | 4 years of expriences`,
    `Done 2 projects | 2 years of experiencs`,
    `Done 1 projects | 1 year of experiencs`,
    `Done 5 projects | 7 years of experiencs`];
}
