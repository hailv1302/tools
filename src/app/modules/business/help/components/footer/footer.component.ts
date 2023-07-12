import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  listMetaTechnologies: string[] = ['Facebook', 'Instagram', 'Messenger', 'WhatsApp', 'Audience Network', 'Oculus', 'Workplace'];
  listTools: string[] = ['Free tools', 'Facebook Pages', 'Instagram profiles', 'Stories', 'Shops', 'Meta Business Suite', 'Facebook ads', 'Messenger ads', 'Instagram ads', 'Video ads', 'Ads Manager'];

  listGoals: string[] = ['Set up a Facebook Page', 'Build brand awareness', 'Promote your local business', 'Grow online sales', 'Promote your app', 'Generate leads', 'Measure and optimise ads', 'Retarget existing customers', 'View all goals'];
  listBusinessTypes: string[] = ['Small business', 'Large businesses', 'Agency', 'Media and publisher', 'Creator', 'Developer', 'Start-up', 'Business partner'];

  listIndustries: string[] = ['Automotive', 'B2B', 'Consumer packaged goods', 'E-commerce', 'Education', 'Entertainment and media', 'Financial services', 'Gaming', 'Property', 'Restaurants', 'Retail', 'Technology and telecom', 'Travel'];
  listInspiration: string[] = ['Meta Foresight', 'Campaign guidance', 'Business news', 'Case studies', 'Video', 'Events', 'Creative Hub'];

  listSkillsAndTraining: string[] = ['Online learning', 'Certification programmes', 'Webinars'];
  listGuidesAndResources: string[] = ['Ads guide', 'COVID-19 resources', 'Safety and integrity', 'Business equity', 'Find a business partner', 'Site map'];
  listBusinessHelpCentre: string[] = ['Create and manage accounts', 'Publish and distribute content', 'Advertise', 'Sell on Facebook and Instagram', 'Monetise your content or app', 'View all articles'];

  listFooter: string[] = ['About', 'Developers', 'Careers', 'Privacy', 'Cookies', 'Terms', 'Help Centre']
  listLanguage: string[] = ['English (UK)', 'English (US)', 'Español', 'Português (Brasil)', 'Français (France)', 'Español (España)', 'More languages']
  constructor() { }

  ngOnInit(): void {
  }

}
