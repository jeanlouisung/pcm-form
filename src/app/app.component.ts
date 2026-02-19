import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizzComponent } from '../components/quizz/quizz.component';
import { PcmComputeResultService } from '../service/pcm-compute-result.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuizzComponent],
  providers: [PcmComputeResultService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pcm-form';
}
