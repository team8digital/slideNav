# slideNav - Open Source Plugin

## Mobile-First Responsive Menu jQuery Plugin

#### Features

- Multi-level menu support
- Flexible, simple markup
- Cross-browser compatibility
- Flexible menu settings
- Lightweight, less than 10Kb, 5Kb minified


#### Usage/Install

**To get started, include the CSS & JS files**

You should include your CSS in your <head> and include the JS before the closing </body> tag.

Note: make sure you're including jQuery in the project.

```
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="css/slideNav-core.min.css" rel="stylesheet" type="text/css">
<script src="js/jquery.slideNav.min.js"></script>
```

**HTML Menu Markup**

In this Markup we're using **Google Material Icons** for the icons. You can choose to keep these or use something else.

```
<nav id="your-menu" class="text-right your-menu">
    <span class="js__slideNav_open_btn material-icons cursor open-btn">menu</span>
    <div class="js__slideNav_menu slideNav__menu_wrap">
        <div class="slideNav_top_buttons">
            <span class="js__slideNav_close_btn slideNav_top_icon cursor">
                <i class="material-icons slideNav_close_icon"></i>
            </span>
        </div>
        <ul class="js__slideNav_ul slideNav_ul">
            <li><a href="#" class="slideNav_link_item">This is a main link 1</a></li>
            <li><a href="#" class="slideNav_link_item">This is a main link 2</a></li>
            <li><a href="#" class="slideNav_link_item">This is a main link 6</a></li>
        </ul>
    </div>
</nav>
```

**Multi-level drodpwon HTML Markup**

To add dropdown links to your menu, simply add as many as the following to your menu:

```
<li class="slideNav_dropdown_item">
    <a class="js__slideNav_dropdown_switch slideNav_link_item">Dropdown link 1<span class="slideNav_icon"><i class="material-icons js__slideNav_dropdown_icon slideNav_right_icon"></i></span></a>
    <ul>
        <li><a href="#" class="slideNav_link_item">Dropdown Menu Link Item 1</a></li>
        <li><a href="#" class="slideNav_link_item">Dropdown Menu Link Item 2</a></li>
    </ul>
</li>
```

**Initialise the plugin**

You should initialise the plugin after you've linked the slideNav JS file.

```
<script>
    $(function() {
        $("#your-menu").slideNav();
    });
</script>
```

#### Options

```
'burgerBtn'  :  '.js__slideNav_open_btn', // Choose your menu trigger button classname, by default this is set to: .js__slideNav_open_btn.
'prependBtnTo'  :  'ID OR CLASS', // Move your trigger button to another location on the page if needed, just set where you'd like it to go.
'slideOutLeft'  :  false, // Have the menu slide out from the left, by default it slides out from the right which is recommended.
'slideNavSpeed'  :  500, // Change the speed of the slideNav menu in ms.
'bgColor'  :  '#BGCOLOUR', // Change the colour of the slideNav background.
'navItemColor'  :  '#COLOR' // Change the colour of the menu link items.
```

**Adding options**

Applying these options is easy, here's an example

```
<script>
    $(function() {
        $("#your-menu").slideNav({
            slideNavSpeed: 500,
            navItemColor: '#000'
        });
    });
</script>
```

#### Menu Display

As a mobile-first menu, we assume you aren't using any current menu that automatically changes to a mobile menu on a smaller display. If this is the case, you can hide your current menu on amsllaer device and show the slideNav menu on a smaller screen.

Example:

```
#your-menu {
    display: none;
}

@media screen and (max-width: 575px) {

    #your-menu {
        display: block;
    }

}
```

#### Browser Support

We've made sure to check that slideNav works on as many browsers as possible. We've prefixed older browser CSS classes and have made our JS code reasonably simple, if you spot that something isn't working, please feel free to let us know.

- Chrome
- Firefox
- iOS Safari


#### Troubleshooting

If something's not working correctly, please feel free to get in touch with us.


#### License

This tiny plugin is open source, feel free to credit us by linking to: http://team8digital.uk/
