# Forty foot Sea Swimming

## Introduction
A website designed to attract visitors to the historic Forty foot swimming location in Sandycove, Dublin, Ireland.

### Portfolio Project 1 - Stephen Docherty

![Responsive simulator image](assets/images/readme-images/responsive-simulator.png)

[Project Repository](https://stevedoc-40foot-wq18d1gnah6.ws-eu90.gitpod.io)

[Live Site](https://steve-doc.github.io/40-foot/)

## Table of contents
1. [UX](#ux)
2. [Features](#features)


## <a name="ux">UX</a>

###  Strategy

    To attract visitors to The Forty Foot swimming facility.  Promoting the benefits of swimming in the sea and specifically this area. Highlighting other attractions and activities and also sharing the unique history of the Forty Foot.

#### User Stories

##### Users 
* I want to find out about the benefit of swimming in the sea.
* I want to find out about what makes the Forty Foot unique.
* I want to learn about the history of the Forty Foot.
* I want to find out about what else I can do or see while I am there.
* I want to stay in touch with any interesting events that might be upcoming or learn about other events that has taken place.
* I want to check the weather and tide before I travel to the Forty Foot.
* I want to know how to get there.

##### Site owner
* I want to promote users partaking in a healthy activity.
* I want to promote visitors to the area but 
    * conveying healthy lifestyle choices.
    * uniques history of location
    * promoting popularity of location
* I want give visitors all the information they need to get to location and have a great experience
* I want to promote local businesses and attractions and attract advertising revenue.

### Scope
    Website will
* Provode consistent navigation across pages
* Contain useful information on the benefits of swimming
* Links to the websites of other activities/businesses in the area
* Provide a history of the Forty Foot
* A sign up form for a newsletter with call to action button
* Interactive weather, tides and mapping inserts
* Safety information
* Directions
* Links to social media platforms
* High quality images
* Content will be responsive on different device devices

### Structure

#### Home Page
* Header Bar with Logo and Navigation links
* Hero image
* Healthy Habit Section - Images and benefits of Sea Swimming
* Aprés Swim Section - Images with links to other things to do after swimming
* Footer - Links to Social Media platforms

#### History page
* Header Bar with Logo and Navigation links
* Images with narrative on different aspects of Forty Foot history
* Footer - Links to Social Media platforms

#### About page
* Header Bar with Logo and Navigation links
* Hero image
* Newletter Signup forms with callto action button
* Live Weather insert
* Live Tide insert
* Safety Narrative
* Google map iframe
* Directions narrative
* Footer - Links to Social Media platforms

### Skeleton
![Home page desktop layout wireframe](assets/images/readme-images/home-desktop-wireframe.pnghome-desktop-wireframe.png)
![Home page mobile layout wireframe](assets/images/readme-images/home-mobile-wireframe.png)
### Surface
Aim is to create a theme that is consistent with the Sea and nature and promotes a feeling of wellbeing.

#### Background color
* Header and Footer both use #3a3a3a, a charcole color to frame the body.
* Body uses #A5DFFE.  A light blue green color sampled from the sky of the hero image to creaste consistency and in keeping with the sea theme.
* Have use a darker #6399c9, also sampled from hero image, to frame images and provide contrast tobody background.

#### Font color
* Have consistently used #3a3a3a to contrast with light backgrounds. Softer color than using pure black.
* Have consistently used Ivory to contrast with dark backgrounds.  Again, less urgent than pure white.

#### Fonts
* Using Quicksand for Headings, provides a clean look without disctracting from message.
* Using Hind Madurai for rest of text.  Was recommended as complimentary by https://fontjoy.com/
* Fonts imported from Google Fonts. 
    
#### Logo 
* Created in Canva

## <a name="features">Features</a>

### Existing Features
* #### Nav Bar
![Navigation Bar screen grab](assets/images/readme-images/nav-bar.png)
* #### Hero Image Section
![Hero Image of Forty Foot Sign screen grab](assets/images/readme-images/hero.png)
* #### Healthy Habit Section
![Health Habit Section screen grab](assets/images/readme-images/healthy-habit.png)
* #### Aprés Swim
![Aprés Swim section screen grab](assets/images/readme-images/healthy-habit.png)
* #### Footer
![Footer screen grab](assets/images/readme-images/footer.png)
* #### History of 40 Foot Section
![History Section screen grab](assets/images/readme-images/history.png)
* #### Newsletter Form
![Newsletter form screen grab](assets/images/readme-images/newsletter-form.png)
* #### Info section with Weather, Tide, Safety, Maps and Directions
![About info section screen grab](assets/images/readme-images/about-info.png)

### Future Features
1. Events calendar - I would create an area where local business, sports clubs could post upcoming events
2. News section - Post reports and images from recent events create more of a buzz.
3. Advertising - Posibly integrate into Aprés Swim section adverts from local business promoting their business.  This could presnet revenue generating opportunity.

### Accessibility Features

* All images have alt labels
* Any links that take user to external website have aria labels
* Have used semantic html throughout

## Testing

* ### Functional testing

| Test              | Outcome |
|-------------------|---------------|
|All navigation links take user to correct page|pass|
|All external links open new, correct page|pass|
|Footer navigation and social & social links load correct pages|pass|
|Content reformats on smaller screens|pass|
|Newsletter form submits correctly|pass|
|Newlstter form prevents wrong data types|pass|

* ### User testing


* ### Responsive design
* ### Bugs found a fixed
    1. On deployment discovered images failed to load.  
        Solved by changing image address to relative rather than absolute.
    2. Title under Apres Swim images was overlapping images.
        Solved by adding a container around images and adding padding bottom to image and container.
    3. Container border around circular image became eliptical at certain points when screen was narrowed for smaller devices.
        Solved by using media queries to give images and container defined, small width and height at smaller screen sizes.
    
* ### Code andCSS validators
* ### Testing User Stories from User Experience (UX) Section

* ### Bugs found a not fixed yet
    1. Tidal script on about page doesn't format correctly at small screen sides.  Don't know how to style a called JS yet.

## Deployment

* How site was deployed
* Link to live production site

## Credits

### Code

    Any code that came from another source
### Content

    History section based on 40ft wikipedia entry https://en.wikipedia.org/wi


### Media

    Credit and image/video sources
    40-foot-gentlemans-bathing.jpeg - The Irish Independant https://www.independent.ie/lifestyle/turning-the-tide-30113564.html 
    40-foot-women-rights.png - Meanwhile in Ireland website https://meanwhileinireland.com/on-this-day-irish-women-protested-men-only-bathing-at-the-forty-foot/
    40-foot-james-joyce.jpeg The Art of Dark Pod website https://artofdarkpod.com/the-underbred-james-joyce/
    sandycove-beack.png Dublin Guide https://www.dublinguide.ie/places/sandycove-beach
    killiney-hill.png Curious Ireland https://curiousireland.ie/killiney-obelisk/
    sup.jpg unsplash.com
    wave.ico from favicon wedbsite https://www.favicon.cc/?action=icon&file_id=990257


### Acknowledgements
    
    Mentor
    Tech Support