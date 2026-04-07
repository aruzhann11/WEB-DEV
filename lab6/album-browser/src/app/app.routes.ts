import { Routes } from '@angular/router';
import { HomeComponent} from './components/home/home';
import { AboutComponent } from './components/about/about';
import { AlbumDetailComponent } from './components/album-detail/album-detail';
import { AlbumPhotosComponent } from './components/album-photos/album-photos';
import { AlbumsComponent } from './components/albums/albums';
import { New } from './new/new';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'albums', component: AlbumsComponent },
  { path: 'albums/:id', component: AlbumDetailComponent },
  { path: 'albums/:id/photos', component: AlbumPhotosComponent },
  { path: 'new', component: New },

  { path: '**', redirectTo: '/home' }
];