import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableSortFilterDirective } from '../../directives/table-sort-filter';


@Component({
  selector: 'app-table-demo',
  standalone: true,
  templateUrl: './table-demo.html',
  styleUrls: ['./table-demo.css'],
  imports: [CommonModule, FormsModule, TableSortFilterDirective],
})
export class TableDemoComponent {
  searchText: string = '';
  sortColumn: string = '';
  sortDirection: 'asc' | 'desc' = 'asc';

  data = [
    { name: 'Lanny', role: 'QA Tester', age: 39 },
    { name: 'Marta', role: 'Frontend Dev', age: 28 },
    { name: 'Carlos', role: 'Project Manager', age: 45 },
    { name: 'Sofía', role: 'Backend Dev', age: 35 },
  ];

  get filteredData() {
    let filtered = [...this.data];

    if (this.searchText) {
      filtered = filtered.filter(item =>
        Object.values(item).some(val =>
          val.toString().toLowerCase().includes(this.searchText.toLowerCase())
        )
      );
    }

    if (this.sortColumn) {
      filtered.sort((a, b) => {
        const aVal = a[this.sortColumn as keyof typeof a];
        const bVal = b[this.sortColumn as keyof typeof b];
        return this.sortDirection === 'asc'
          ? aVal > bVal ? 1 : -1
          : aVal < bVal ? 1 : -1;
      });
    }

    return filtered;
  }

  sortTable(event: string) {
    const [column, direction] = event.split(':') as [string, 'asc' | 'desc'];
    this.sortColumn = column;
    this.sortDirection = direction;
  }

}

