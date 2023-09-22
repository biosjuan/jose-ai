import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpinnerComponent {
  isLoading: boolean | null;
  @Input() set loading(value: boolean | null) {
    this.isLoading = value ?? null;
  }
}
