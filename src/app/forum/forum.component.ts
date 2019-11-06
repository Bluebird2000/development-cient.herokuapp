import { Component, OnInit } from '@angular/core';
import { PageTitleService } from '../core/page-title/page-title.service';
import { ChkService } from '../service/chk.service';
import { MainService } from '../service/main-service.service';

@Component({
  selector: 'angly-about',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit {

   /* Variables */
   services: any;
   about: any;
   team: any;
   contact: any;
   forums;
   setTimeProgress;
   fetchForumProgress = 10;

   constructor(private pageTitleService: PageTitleService, private service: ChkService, private mainSrv: MainService) {

      /* Page title */
      this.pageTitleService.setTitle(' Know More About Us');

      /* Page subTitle */
      this.pageTitleService.setSubTitle(' Our latest news and learning articles. ');

      this.service.getServices().
         subscribe(response => {this.services = response; },
                  err       => console.log(err),
                  ()        =>this.services
               );

      this.service.getAbout().
         subscribe(response => {this.about = response; },
                   err      => console.log(err),
                   ()       => this.about
               );

      this.service.getTeam().
         subscribe(response => {this.team = response; },
                   err      => console.log(err),
                   ()       => this.team
               );

      this.service.getContactContent().
         subscribe(response => {this.contact = response; },
                   err      => console.log(err),
                   ()       => this.contact
               );

   }


   ngOnInit() {
      this.viewForums();
   }

   viewForums() {
    console.log('in here');
      this.fetchingForumProgress();
      this.mainSrv.listForums().subscribe((data: any) => {
        
        
        if (data) {
           console.log(data);
          this.forums = data.data;
          clearInterval(this.setTimeProgress);
        }
      });
    }

    fetchingForumProgress() {
      this.setTimeProgress = setInterval(() => {
        if (this.fetchForumProgress < 90) {
          this.fetchForumProgress += 10;
        }
      }, 1000);
    }

   /*
   * Social links
   */
  // tslint:disable-next-line: member-ordering
  socialDetails: any = [
    { url: 'https://www.facebook.com/', icon : 'fa-facebook'},
    { url: '', icon : 'fa-twitter text-info'},
    { url: '', icon : 'fa-pinterest text-danger'},
  ];

  /*
   * Classes of social ul, li
   */
  socialsClasses: any = {ulClass:'', liClass:"", linkClass:""}

}
