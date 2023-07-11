import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projectTitles=[`Medical diagnosis support system`,

  `Large-scale e-commerce`,
  
  `Blockchain-based secure voting system`];
  projectDescriptions=[`Created a model that can assist doctors in diagnosing diseases based on medical data and patient symptoms.`,

  `Developed a scalable and robust online marketplace that can handle a high volume of transactions and users.`,

  `Developed a decentralized voting system using blockchain technology to ensure transparency, immutability, and security.`];

}
