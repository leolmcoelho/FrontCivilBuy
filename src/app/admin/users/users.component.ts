import { Component } from '@angular/core';

interface Tab {
  label: string;
  id: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  activeTab: number = 0;

  tabs: Tab[] = [
    { label: 'Lojista', id: 'Lojistas' },
    { label: 'Entregadores', id: 'Entregadores' },
    { label: 'Clientes', id: 'Clientes' }
  ];

  openTab(city: string) {
    const tabIndex = this.tabs.findIndex(tab => tab.label === city);
    if (tabIndex !== -1) {
      this.activeTab = tabIndex;
    }
    console.log('ativou');
  }
}
