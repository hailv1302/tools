import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'side-left',
  templateUrl: './side-left.component.html',
  styleUrls: ['./side-left.component.css']
})
export class SideLeftComponent implements OnInit {

  listTitle = [
    'Creating an Account',
    'Your Profile',
    'Friending',
    'Facebook Dating',
    'Your Home Page',
    'Messaging',
    'Reels',
    'Stories',
    'Your Photos and Videos',
    'Gaming',
    'Pages',
    'Groups',
    'Events',
    'Fundraisers and Donations',
    'Meta Pay',
    'Marketplace',
    'Apps',
    'Facebook Mobile Apps',
    'Accessibility',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
