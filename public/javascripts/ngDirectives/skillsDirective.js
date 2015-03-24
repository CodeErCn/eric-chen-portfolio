angular.module('portfolio').directive('skillsaside', function() {
    return {
        restrict: "E",
        templateUrl: 'templates/skills/aside.html',
        link: function() {  
            $('button.lamp').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.mean').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('button.rnr').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.slamp').show();
                $('.smean').hide();
                $('.srnr').hide(); 
            })
            $('button.mean').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.lamp').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('button.rnr').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.smean').show();
                $('.slamp').hide();
                $('.srnr').hide();
            })
            $('button.rnr').on('click', function() {
                $(this).css('background-color', 'rgb(255, 215, 0)');
                $('button.lamp').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('button.mean').css('background-color', 'rgba(255, 215, 0, 0.6)');
                $('.srnr').show();
                $('.slamp').hide();
                $('.smean').hide();
            })

        }
    }
})