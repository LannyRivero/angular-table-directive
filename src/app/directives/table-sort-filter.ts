import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appSortable]',
  standalone: true
})
export class TableSortFilterDirective {
  @Input('appSortable') column: string = '';
  @Output() sort = new EventEmitter<string>();

  private direction: 'asc' | 'desc' = 'asc';

  @HostListener('click')
  onClick() {
    this.sort.emit(`${this.column}:${this.direction}`);
    this.direction = this.direction === 'asc' ? 'desc' : 'asc';
  }
}

