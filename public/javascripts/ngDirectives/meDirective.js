angular.module('portfolio').directive('measide', function() {
    return {
        restrict: "E",
        templateUrl: 'templates/me/aside.html',
        link: function() {
            $('button.summary').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.education').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('button.experience').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.mysummary').show();
                $('.myeducation').hide();
                $('.myexperience').hide(); 
            })
            $('button.education').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.summary').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('button.experience').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.myeducation').show();
                $('.mysummary').hide();
                $('.myexperience').hide();
            })
            $('button.experience').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.summary').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('button.education').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.myexperience').show();
                $('.mysummary').hide();
                $('.myeducation').hide();
            })

        }
    }
})

