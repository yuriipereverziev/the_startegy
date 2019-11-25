// Anchor
var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    $("input:text:visible:first").focus();
    return false;
});

// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='contact']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            firstname: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        // Specify validation error messages
        messages: {
            firstname: "Please enter your name",
            message: {
                required: "Please provide a text",
                minlength: "Your text must be at least 5 characters long"
            },
            email: "Please enter a valid email address"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
            alert('invalid!');
        }
    });
});





// Slider
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        autoplay:true,
        autoplayHoverPause: true,
        autoWidth: true,
        autoHeight: true,
        center: true,
        navText: ['<div class="prev"></div>','<div class="next"></div>']
    });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFuY2hvci5qcyIsImZvcm0tdmFsaWRhdGlvbi5qcyIsInNjcmlwdC5qcyIsInNsaWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBbmNob3JcbnZhciAkcGFnZSA9ICQoJ2h0bWwsIGJvZHknKTtcbiQoJ2FbaHJlZio9XCIjXCJdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJHBhZ2UuYW5pbWF0ZSh7XG4gICAgICAgIHNjcm9sbFRvcDogJCgkLmF0dHIodGhpcywgJ2hyZWYnKSkub2Zmc2V0KCkudG9wXG4gICAgfSwgNDAwKTtcbiAgICAkKFwiaW5wdXQ6dGV4dDp2aXNpYmxlOmZpcnN0XCIpLmZvY3VzKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCIvLyBXYWl0IGZvciB0aGUgRE9NIHRvIGJlIHJlYWR5XG4kKGZ1bmN0aW9uKCkge1xuICAgIC8vIEluaXRpYWxpemUgZm9ybSB2YWxpZGF0aW9uIG9uIHRoZSByZWdpc3RyYXRpb24gZm9ybS5cbiAgICAvLyBJdCBoYXMgdGhlIG5hbWUgYXR0cmlidXRlIFwicmVnaXN0cmF0aW9uXCJcbiAgICAkKFwiZm9ybVtuYW1lPSdjb250YWN0J11cIikudmFsaWRhdGUoe1xuICAgICAgICAvLyBTcGVjaWZ5IHZhbGlkYXRpb24gcnVsZXNcbiAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgIC8vIFRoZSBrZXkgbmFtZSBvbiB0aGUgbGVmdCBzaWRlIGlzIHRoZSBuYW1lIGF0dHJpYnV0ZVxuICAgICAgICAgICAgLy8gb2YgYW4gaW5wdXQgZmllbGQuIFZhbGlkYXRpb24gcnVsZXMgYXJlIGRlZmluZWRcbiAgICAgICAgICAgIC8vIG9uIHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgICBmaXJzdG5hbWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IDNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vIFNwZWNpZnkgdGhhdCBlbWFpbCBzaG91bGQgYmUgdmFsaWRhdGVkXG4gICAgICAgICAgICAgICAgLy8gYnkgdGhlIGJ1aWx0LWluIFwiZW1haWxcIiBydWxlXG4gICAgICAgICAgICAgICAgZW1haWw6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtZXNzYWdlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbWlubGVuZ3RoOiA1XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIC8vIFNwZWNpZnkgdmFsaWRhdGlvbiBlcnJvciBtZXNzYWdlc1xuICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgICAgZmlyc3RuYW1lOiBcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWVcIixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJQbGVhc2UgcHJvdmlkZSBhIHRleHRcIixcbiAgICAgICAgICAgICAgICBtaW5sZW5ndGg6IFwiWW91ciB0ZXh0IG11c3QgYmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzIGxvbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVtYWlsOiBcIlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIlxuICAgICAgICB9LFxuICAgICAgICAvLyBNYWtlIHN1cmUgdGhlIGZvcm0gaXMgc3VibWl0dGVkIHRvIHRoZSBkZXN0aW5hdGlvbiBkZWZpbmVkXG4gICAgICAgIC8vIGluIHRoZSBcImFjdGlvblwiIGF0dHJpYnV0ZSBvZiB0aGUgZm9ybSB3aGVuIHZhbGlkXG4gICAgICAgIHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICBhbGVydCgnaW52YWxpZCEnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiXG5cblxuXG4iLCIvLyBTbGlkZXJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgJCgnLm93bC1jYXJvdXNlbCcpLm93bENhcm91c2VsKHtcbiAgICAgICAgaXRlbXM6IDEsXG4gICAgICAgIGxvb3A6IHRydWUsXG4gICAgICAgIG5hdjogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6dHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlIb3ZlclBhdXNlOiB0cnVlLFxuICAgICAgICBhdXRvV2lkdGg6IHRydWUsXG4gICAgICAgIGF1dG9IZWlnaHQ6IHRydWUsXG4gICAgICAgIGNlbnRlcjogdHJ1ZSxcbiAgICAgICAgbmF2VGV4dDogWyc8ZGl2IGNsYXNzPVwicHJldlwiPjwvZGl2PicsJzxkaXYgY2xhc3M9XCJuZXh0XCI+PC9kaXY+J11cbiAgICB9KTtcbn0pOyJdfQ==
