import { Component, inject } from '@angular/core';
import { LoaderService } from '../../loader.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
})
export class LoaderComponent {

  loaderService: LoaderService = inject(LoaderService);
  isLoaded$: Observable<boolean> = this.loaderService.loader$;
  
}
