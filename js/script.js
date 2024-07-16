$(document).ready(function () {
    // Add active class based on current URL
    const currentPath = window.location.pathname.split("/").pop();
    $('.sidebar-navs-links').each(function () {
        const linkPath = $(this).attr('href');
        if (linkPath === currentPath) {
            $(this).addClass('active-links');
        }
    });

    // Click event to update the active class
    $('.sidebar-navs-links').click(function (e) {
        e.preventDefault();
        $('.sidebar-navs-links').removeClass('active-links');
        $(this).addClass('active-links');

        // Change the page
        const href = $(this).attr('href');
        window.location.href = href;
    });
});



// reports


$(document).ready(function () {
    $('.table-row').on('click', function () {
        $('.replace-section').fadeOut(function () {
            $('.replace-content').fadeIn();
        });
    });

    $('.three-dots').on('click', function (event) {
        event.stopPropagation();
        $(this).find('.popup-menu').toggleClass('hide-menu');
    });
});


$(document).ready(function () {
    let rowsPerPage = 12;
    let currentPage = 1;
    let $rows = $('.table-row');
    let totalPages = Math.ceil($rows.length / rowsPerPage);

    function showPage(page) {
        $rows.fadeOut(200, function () {  // Adjust the duration as needed
            $rows.slice((page - 1) * rowsPerPage, page * rowsPerPage).fadeIn(200);
        });
        updatePagination();
    }

    function updatePagination() {
        $('.page-numbers').empty();
        for (let i = 1; i <= totalPages; i++) {
            let $pageNumber = $('<span class="page-number">' + i + '</span>');
            if (i === currentPage) {
                $pageNumber.addClass('active');
            }
            $pageNumber.on('click', function () {
                currentPage = i;
                showPage(currentPage);
            });
            $('.page-numbers').append($pageNumber);
        }
        $('.prev-page').prop('disabled', currentPage === 1);
        $('.next-page').prop('disabled', currentPage === totalPages);
    }

    $('.prev-page').on('click', function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
        }
    });

    $('.next-page').on('click', function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
        }
    });

    showPage(currentPage);
});

$(document).ready(function () {
    $('.toggle-button').click(function () {
       var movementEquity = $(this).siblings('.movement-equity');
       var icon = $(this).find('i');
       var buttonText = $(this).contents().filter(function () {
          return this.nodeType === 3;
       })[0];
 
       movementEquity.slideToggle('slow', function () {
          if (movementEquity.is(':visible')) {
             icon.removeClass('fa-angle-down').addClass('fa-angle-up');
             buttonText.nodeValue = ' Less Reports';
          } else {
             icon.removeClass('fa-angle-up').addClass('fa-angle-down');
             buttonText.nodeValue = ' More Reports';
          }
       });
    });
 
    $('.box-tb').click(function () {
       $(this).toggleClass('selected');
    });
 });
 

