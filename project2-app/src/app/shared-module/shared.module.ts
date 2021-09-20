import { NgModule } from "@angular/core";
import { SearchbarComponent } from '../components/searchbar/searchbar.component';
import { HeaderComponent } from '../components/header/header.component';
import { ProductsComponent } from '../components/products/products.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
    declarations: [ SearchbarComponent, HeaderComponent, ProductsComponent, FooterComponent ],
    exports: [ SearchbarComponent, HeaderComponent, ProductsComponent, FooterComponent ]
})
export class SharedModule {}