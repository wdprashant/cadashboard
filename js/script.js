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

$(document).ready(function () {
    $('#profile-btn').click(function () {
        $('#profile-section').fadeToggle();
    });
});

$(document).ready(function () {
    $('#help').click(function () {
        $('.help-section').fadeToggle();
    });
});


$(document).ready(function() {
    // Show the overlay content
    function showOverlay() {
        $('#overlay').fadeIn();
        $('#overlay-content').fadeIn();
    }

    // Hide the overlay content
    function hideOverlay() {
        $('#overlay').fadeOut();
        $('#overlay-content').fadeOut();
    }

    // Handle file browse button click
    $('#browse-files-btn').on('click', function(e) {
        e.preventDefault();
        $('#fileInput').click();
    });

    // Handle trigger element click
    $('#upload').on('click', function() {
        showOverlay();
    });

    // Handle close button click
    $('#close-overlay').on('click', function() {
        hideOverlay();
    });

    // Handle cancel button click
    $('.cancel-upload').on('click', function() {
        hideOverlay();
    });
});
// reports


$(document).ready(function () {
    $('#first-row').on('click', function () {
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


//  onboarding client list
$(document).ready(function () {
    $('.three-dots-set').on('click', function () {
        $(this).siblings('.options-list').toggleClass('visible');
    });
});

//  onboarding client list

// onboarding multi step form

$(document).ready(function () {
    let currentStep = 1;
    const totalSteps = 5;

    $('#nextBtn').on('click', function () {
        if (currentStep < totalSteps) {
            currentStep++;
            updateStep();
        }
    });

    $('#prevBtn').on('click', function () {
        if (currentStep > 1) {
            currentStep--;
            updateStep();
        }
    });

    function updateStep() {
        // Remove 'active' class from all content steps
        for (let i = 1; i <= totalSteps; i++) {
            $('#content-step' + i).removeClass('active');
        }

        // Add 'active' class to the current step's content
        $('#content-step' + currentStep).addClass('active');

        // Add 'active' class to all steps up to the current one
        for (let i = 1; i <= currentStep; i++) {
            $('#step' + i).addClass('active');
        }
    }

    // Initialize the first step
    updateStep();
});

// onboarding multi step form
document.addEventListener('DOMContentLoaded', () => {
    const uploadBoxes = document.querySelectorAll('.upload-box');
    const fileLists = document.querySelectorAll('.upload-file-data');
    const statuses = document.querySelectorAll('.requared');

    uploadBoxes.forEach((uploadBox, index) => {
        uploadBox.addEventListener('dragover', (e) => {
            e.preventDefault();
            uploadBox.classList.add('dragover');
        });

        uploadBox.addEventListener('dragleave', () => {
            uploadBox.classList.remove('dragover');
        });

        uploadBox.addEventListener('drop', (e) => {
            e.preventDefault();
            uploadBox.classList.remove('dragover');
            handleFiles(e.dataTransfer.files, index);
        });

        uploadBox.addEventListener('click', () => {
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.multiple = true;
            fileInput.onchange = (e) => handleFiles(e.target.files, index);
            fileInput.click();
        });
    });

    function handleFiles(files, index) {
        const fileListContent = Array.from(files).map(file => `<li>${file.name}</li>`).join('');
        fileLists[index].querySelector('div').innerHTML = fileListContent;

        uploadBoxes[index].classList.add('fade-out');
        uploadBoxes[index].addEventListener('transitionend', () => {
            uploadBoxes[index].style.display = 'none';
            fileLists[index].classList.add('fade-in');
            statuses[index].innerText = 'Complete';
            statuses[index].classList.add('completed');
        }, { once: true });
    }
});





$(document).ready(function () {
    $('#upload-submit').on('click', function () {
        $('.proceess-onboard').fadeOut(function () {
            $('#upload-print').fadeIn(function () {
                let $progressBar = $('.progress-bar');
                $('.progress').show(); // Show the progress bar container
                $progressBar.animate({
                    width: '100%'
                }, {
                    duration: 3000,
                    step: function (now) {
                        $progressBar.text(Math.round(now) + '%');
                        $progressBar.attr('aria-valuenow', Math.round(now));
                    },
                    complete: function () {
                        // After the progress bar reaches 100%
                        $('#upload-print').fadeOut(function () {
                            $('#success-message').fadeIn();
                        });
                    }
                });
            });
        });
    });
});





// document page
$(document).ready(function () {
    $('.add-document-btn').click(function () { // Corrected selector to use class '.add-document-btn'
        $('#document').click(); // Trigger file input on button click
    });

    $('#document').change(function () {
        var input = this;
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {


                // Fade out document-frame
                $('#document-frame').fadeOut();

                // Fade in document-replace-frame
                $('#document-replace-frame').fadeIn();
            }

            reader.readAsDataURL(input.files[0]);
        }
    });
});



$(document).ready(function () {
    $('[data-toggle="offcanvas"]').on('click', function (event) {
        // Check if the clicked element is not a checkbox
        if (!$(event.target).is(':checkbox')) {
            $('#navbarNav').toggleClass('open');
        }

    });

    // Handle clicks on checkboxes separately
    $('.cut-x').click(function () {
        $('#navbarNav').toggleClass('open');
    });
});

// document page