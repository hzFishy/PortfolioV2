



function EndFile()
{
    $.ajax(
{
        url: '/header.html',
        method: 'get',
        success: function(data)
        {
            $('#header').html(data);
            
            var parts = window.location.href.split('/');
            var lastSegment = parts.pop() || parts.pop();
            //console.log(lastSegment);

            // wait for DOM be loaded
            setTimeout(function ()
            {
                var reference = document.getElementById('hz-nav');
                if (reference)
                {
                    var lastSegmentElement = document.getElementById(lastSegment);
                    if (lastSegmentElement)
                    {
                        lastSegmentElement.classList.add('hz-active');
                    }
                }
                else
                {
                    console.error('Element with ID "Timeline" not found.');
                }
            }, 0);
        }
    });

   /* $.ajax(
        {
            url: '/footer.html',
            method: 'get',
            success: function(data)
            {
                $('#footer').html(data);
            }
        });*/
}


function OnMobileNavClick()
{
    var listElement = document.getElementById("hz-navbar-mobile-list");
    var menuElement = document.getElementById("hz-navbar-mobile-menu");
    if (listElement.classList.contains("hz-active"))
    {
        listElement.classList.remove("hz-active");
        menuElement.classList.remove("hz-active");
        
    }
    else
    {
        listElement.classList.add("hz-active");
        menuElement.classList.add("hz-active");
    }
}