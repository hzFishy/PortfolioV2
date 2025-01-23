



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
    var menuElement = document.getElementById("hz-navbar-mobile-menu-container");
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


function TooltipClickEmail()
{
    //var copyText = document.getElementById("email");
    navigator.clipboard.writeText("contact@hzfishy.fr"); // hard coded for now because it gets childs span content to

    var tooltip = document.getElementById("emailTooltip");
    tooltip.classList.add("hz-active")
    tooltip.innerHTML = "Email copied!";
}

function TooltipOutEmail()
{
    var tooltip = document.getElementById("emailTooltip");
    tooltip.classList.remove("hz-active")
    tooltip.innerText = "Copy";
}

function OnSkillsDetailsClick(element, event)
{
    var details = $(element).parent()[0];
    //console.log(details);
    if (details.classList.contains("hz-active"))
    {
        details.classList.remove("hz-active");
        $(element).find($("img")).attr('src','/data/icons/ggle_unfold.svg');
    }
    else
    {
        //console.log($(element).find($("img")));
        details.classList.add("hz-active");
        $(element).find($("img")).attr('src','/data/icons/ggle_fold.svg');
    }
}
