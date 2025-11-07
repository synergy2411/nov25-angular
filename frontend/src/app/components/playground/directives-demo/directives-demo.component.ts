import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-demo',
  templateUrl: './directives-demo.component.html',
  styleUrl: './directives-demo.component.css',
})
export class DirectivesDemoComponent {
  tab = 0;

  todos = [
    { label: 'planting', status: false },
    { label: 'shopping', status: true },
    { label: 'insurance', status: true },
    { label: 'grocery', status: false },
  ];

  styles = { color: 'blue', backgroundColor: 'yellow', fontWeight: 500 };

  // classes = ['my-feature', 'my-border'];

  classes = { 'my-border': true, 'my-feature': false };

  onClassChange() {
    this.classes['my-border'] = !this.classes['my-border'];
    this.classes['my-feature'] = !this.classes['my-feature'];
  }

  onStyleChange(flag: boolean) {
    if (flag) {
      this.styles.color = 'yellow';
      this.styles.backgroundColor = 'blue';
      this.styles.fontWeight = 700;
    } else {
      this.styles.color = 'blue';
      this.styles.backgroundColor = 'yellow';
      this.styles.fontWeight = 500;
    }
  }
}
