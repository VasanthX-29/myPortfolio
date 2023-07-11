import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  introPara1=`  I am a dedicated and enthusiastic full stack developer with a passion for creating
  innovative and efficient solutions. With a strong foundation in both front-end
  and back-end development, I thrive on building dynamic and responsive web
  applications that deliver exceptional user experiences.`;
  introPara2=` Over the years,
  I have honed my skills in a wide range of technologies,
  constantly expanding my knowledge and staying up-to-date with the latest industry trends.`;

  myIntro:object=
  {
    textAlign: 'justify'
  }




}
