import { Component } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

interface Item {
  name: string;
  type: string;
  email: string;
  phoneNo: string;
  companyName: string;
  address: string;
  expanded: boolean;
  selected: boolean;
  showButtons?: boolean;
  children?: Item[];
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableWithSearchComponent {
  searchQuery: string = '';
  selectAllRows: boolean = false;
  filteredData: Item[] = [];
  data: Item[] = [
    {
      name: 'Susan Boyle',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'Marc Johnson',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: ' 169 11th Street, 94103 San Francisco ads ad ss',
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'PiedPiper',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: ' 169 11th Street, 94103 San Francisco ads ad ss',
      children: [
        {
          name: 'Children 1',
          type: 'company',
          email: '1 - someone@gmail.com',
          phoneNo: '1 - +1 628 291 2098',
          companyName: '1 -',
          address: '1 - 169 11th Street, 94103 San Francisco',
          children: [
            {
              name: 'testtest',
              type: 'company',
              email: '21 - someone@gmail.com',
              phoneNo: '21 - +1 628 291 2098',
              companyName: '21 -',
              address: '21 - 169 11th Street, 94103 San Francisco',
              selected: false,
              expanded: false,
            },
            {
              name: 'Children 31',
              type: 'company',
              email: '31 - someone@gmail.com',
              phoneNo: '31 - +1 628 291 2098',
              companyName: '31 -',
              address: '31 - 169 11th Street, 94103 San Francisco',
              selected: false,
              expanded: false,
            },
          ],
          selected: false,
          expanded: false,
        },
        {
          name: 'Children 2',
          type: 'company',
          email: '2 - someone@gmail.com',
          phoneNo: '2 - +1 628 291 2098',
          companyName: '2 -',
          address: '2 - 169 11th Street, 94103 San Francisco',
          children: [
            {
              name: 'Children 21',
              type: 'company',
              email: '21 - someone@gmail.com',
              phoneNo: '21 - +1 628 291 2098',
              companyName: '21 -',
              address: '21 - 169 11th Street, 94103 San Francisco',
              selected: false,
              expanded: false,
            },
            {
              name: 'Children 31',
              type: 'company',
              email: '31 - someone@gmail.com',
              phoneNo: '31 - +1 628 291 2098',
              companyName: '31 -',
              address: '31 - 169 11th Street, 94103 San Francisco',
              selected: false,
              expanded: false,
            },
          ],
          selected: false,
          expanded: false,
        },
        {
          name: 'Children 3',
          type: 'company',
          email: '3 - someone@gmail.com',
          phoneNo: '3 - +1 628 291 2098',
          companyName: '3 -',
          address: '3 - 169 11th Street, 94103 San Francisco',
          selected: false,
          expanded: false,
        },
      ],
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'PiedPiper',
      type: 'company',
      email: 'someone_at_very_lonng_long_long@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: '',
      address: '169 11th Street, 94103 San Francisco',
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'PiedPiper',
      type: 'company',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: '',
      address: '169 11th Street, 94103 San Francisco',
      children: [
        {
          name: 'Children 21',
          type: 'company',
          email: '21 - someone@gmail.com',
          phoneNo: '21 - +1 628 291 2098',
          companyName: '21 -',
          address: '21 - 169 11th Street, 94103 San Francisco',
          selected: false,
          expanded: false,
        },
        {
          name: 'Children 31',
          type: 'company',
          email: '31 - someone@gmail.com',
          phoneNo: '31 - +1 628 291 2098',
          companyName: '31 -',
          address: '31 - 169 11th Street, 94103 San Francisco',
          selected: false,
          expanded: false,
        },
      ],
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'PiedPiper',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'Florin Galan',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'March Andreesen',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
      children: [
        {
          name: 'Andreesen',
          type: 'company',
          email: '21 - someone@gmail.com',
          phoneNo: '21 - +1 628 291 2098',
          companyName: '21 -',
          address: '21 - 169 11th Street, 94103 San Francisco',
          selected: false,
          expanded: false,
        },
        {
          name: 'Space X',
          type: 'company',
          email: '31 - someone@gmail.com',
          phoneNo: '31 - +1 628 291 2098',
          companyName: '31 -',
          address: '31 - 169 11th Street, 94103 San Francisco',
          selected: false,
          expanded: false,
        },
      ],
      selected: false,
      showButtons: false,
      expanded: false,
    },
    {
      name: 'Ben Horowitz',
      type: 'person',
      email: 'someone@gmail.com',
      phoneNo: '+1 628 291 2098',
      companyName: 'Alphabet',
      address: '169 11th Street, 94103 San Francisco',
      selected: false,
      showButtons: false,
      expanded: false,
    },
  ];
  debounceSubscription: Subscription = new Subscription();
  isRowSelected: boolean | undefined = false;

  constructor() {
    this.filteredData = this.data;
  }

  filterTable(): void {
    this.filteredData = this.data.filter((item: Item) => this.filterItem(item));
  }

  filterItem(item: Item): boolean {
    if (item.name.toLowerCase().includes(this.searchQuery.toLowerCase())) {
      return true;
    }

    if (item.children) {
      for (const child of item.children) {
        if (this.filterItem(child)) {
          return true;
        }
      }
    }

    return false;
  }

  toggleSelectAll(): void {
    for (let person of this.filteredData) {
      person.selected = this.selectAllRows;
    }
  }

  toggleRow(item: Item): void {
    item.expanded = !item.expanded;
  }

  handleDebouncedInput(): void {
    // Unsubscribe the previous debounce subscription, if it exists
    if (this.debounceSubscription) {
      this.debounceSubscription.unsubscribe();
    }

    // Subscribe to a new debounce stream
    this.debounceSubscription = this.applyDebounce().subscribe(() => {
      // Call your filtering method here
      this.filterTable();
    });
  }

  applyDebounce(): Observable<void> {
    // Return the debounced observable
    return this.debounceTime(300);
  }

  debounceTime(duration: number): Observable<void> {
    return new Observable<void>((subscriber) => {
      const timer = setTimeout(() => {
        subscriber.next();
        subscriber.complete();
      }, duration);

      return () => clearTimeout(timer);
    });
  }

  selectRow(): void {
    // Find the first selected item in the filtered data
    const selectedItem = this.filteredData.find((item) => item.selected);

    // Update the isRowSelected flag based on whether a selected item was found
    this.isRowSelected = selectedItem !== undefined;
  }
}
