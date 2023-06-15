import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent {
  //menuOpen = false;
  @Output() itemSelected: EventEmitter<void> = new EventEmitter<void>();
  @Output() menuToggle: EventEmitter<void> = new EventEmitter<void>();
  
  selectedItem: string = 'Dashboard';

  menuItems = [
    { icon: 'dashboard', text: 'Dashboard', link: 'dashboard' },
    { icon: 'person', text: 'Meu Perfil', link: 'profile' },
    { icon: 'productivity', text: 'Produtos', link:'product'  },
    { icon: 'group', text: 'Usuários', link: 'users'  }
  ];

  constructor(private service: AuthService) {
    
  }

  

  selectItem(item: string): void {
    this.selectedItem = item;
    //console.log(item);
    this.itemSelected.emit();
  }

  logout() {
    this.service.logout();
  }


}
