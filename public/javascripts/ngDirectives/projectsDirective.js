angular.module('portfolio').directive('projectsaside', function() {
    return {
        restrict: "E",
        templateUrl: 'templates/projects/aside.html',
        link: function() {
            $('button.lamp').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.mean').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.plamp').show();
                $('.pmean').hide();
            })
            $('button.mean').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.lamp').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.pmean').show();
                $('.plamp').hide();
            })
        }
    }
})