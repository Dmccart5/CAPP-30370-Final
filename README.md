CAPP-30370-Final
================

Dan McCarthy
------------


PURPOSE & GOALS
---------------

The purpose of this site is to provide information about the team to prospective and current Club Golf members
as well as other interested parties, including but not limited to alumni, competitors, and the NCCGA. Up unti now, 
the Club Team only had a blog and a section on the RecSports website with contact information for our officers. With
this site, we are able to provide much more information to interested parties in a well-organized matter. We aim to 
provide a brief summary with our mission as well as our recent schedule, a bit more information on our officers, and
additional resources relating to the game of golf.


BREAKPOINTS
-----------

Breakpoints for this website are at 700px and 1000px according to the suggestions on the rubric. In the mobile version,
using mobile-first RWD, all elements are stacked. Once expanded beyond 700px wide, the header and footer remain at the
top and bottom of the screen, respectively, while the vertical navigation and club logo occupy the left quarter of the 
display and the main content occupies the right seventy-five percent of the screen with all images resizing
accordingly. Once the display becomes 1000px wide, the navigation becomes horizontal and relocates to the top of the screen. The main content then takes up the full width of the content area minus the margins.


THREE-UP COLUMN LAYOUT
----------------------

The three column layout is located on the Resources page [resources.html]. Each recognized affiliate has their own
dedicated column with logo and a brief summary.


CSS ANIMATION ON LOOP
---------------------

The first image [id="sean-pic"] on the Contact Us page [contact_us.html] is on a continuous loop to spin counter-clockwise. Using webkits and the transform properties, I created a spin animation [class="spin"] which spins the image every three seconds.


CSS ANIMATION ON USER INTERACTION
---------------------------------

The second image [id="dan-pic"] on the Contact Us page [contact_us.html] increases in size when it is clicked. Using webkits and the transform properties, I created a grow animation [class="grow"] which scales the image 150% when it is clicked by the user.


BACKGROUND IMAGE
----------------

The background image is located on the Contact Us page [contact_us.html]. While still incorporating the same stylesheet used for all other pages, I inserted a single line of style code within the Contact Us page after the link to the external stylesheet to override the background-image element. Instead of the blue gradient used on all other sheets, this pages uses a blue stained hardwood as a background image. 


JQUERY INTERACTION
------------------

Within the desktop version of the Home page [index.html], the user can click a button to fade in and fade out the logo. This is done using a simple fadeToggle() command in jQuery.









