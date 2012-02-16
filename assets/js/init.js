$( document ).bind( "mobileinit", function() {
	//disable toolbar toggle
	//$.mobile.fixedtoolbar.tapToggle(false);
	
	//theme
	// Navigation
	$.mobile.page.prototype.options.backBtnText = "Go back";
	$.mobile.page.prototype.options.addBackBtn      = true;
	$.mobile.page.prototype.options.backBtnTheme    = "a";

	// Page
	$.mobile.page.prototype.options.headerTheme = "a";  // Page header only
	$.mobile.page.prototype.options.contentTheme    = "a";
	$.mobile.page.prototype.options.footerTheme = "a";

	// Listviews
	$.mobile.listview.prototype.options.headerTheme = "a";  // Header for nested lists
	$.mobile.listview.prototype.options.theme           = "a";  // List items / content
	$.mobile.listview.prototype.options.dividerTheme    = "a";  // List divider

	$.mobile.listview.prototype.options.splitTheme   = "a";
	$.mobile.listview.prototype.options.countTheme   = "a";
	$.mobile.listview.prototype.options.filterTheme = "a";
	$.mobile.listview.prototype.options.filterPlaceholder = "Filter data...";
	
	$.mobile.dialog.prototype.options.overlayTheme = "a";

    //disable toolbar toggle
    $.mobile.fixedtoolbar.prototype.options.tapToggle = false;

    $( document ).bind( "pageinit", function( event ) {
        //disable toolbar toggle
        //$.mobile.fixedtoolbar.options.tapToggle(false);
        console.log($.mobile);
    });

});

