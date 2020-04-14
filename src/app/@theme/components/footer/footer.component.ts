import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://akveo.page.link/8V2f" target="_blank">Akveo</a></b> and <b>
        <a href="https://mhkarami97.github.io" target="_blank">MHKarami</a></b>
    </span>
    <div class="socials">
      <a href="https://github.com/mhkarami97" target="_blank" class="ion ion-social-github"></a>
      <a href="https://facebook.com/mhkarami97" target="_blank" class="ion ion-social-facebook"></a>
      <a href="https://twitter.com/mhkarami97" target="_blank" class="ion ion-social-twitter"></a>
      <a href="https://linkedin.com/in/mhkarami97" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
