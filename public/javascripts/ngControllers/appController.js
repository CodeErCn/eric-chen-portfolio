//Create me controller
angular.module('portfolio').controller('mainCtrl', function() {
    var windowHeight = $(window).height();
    $('body').css('height', windowHeight);

    this.tab =1;

    this.selectTab = function(setTab) {
        this.tab = setTab;
    }

    this.isSelected = function(checkTab) {
        return this.tab === checkTab;
    }

})

