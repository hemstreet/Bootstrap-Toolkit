(function ( $, viewport ) {

    var body = $( 'body' ),
        breakpoints = [ "xs", "sm", "md", "lg" ],
        currentBreakpoint = null;

    var removeClasses = function () {
        jQuery.map(breakpoints, function ( breakpoint ) {
            body.removeClass( 'screen-' + breakpoint );
        } )
    };

    var checkForBreakpoint = function () {
        if(currentBreakpoint !== viewport.current()) {

            currentBreakpoint = viewport.current();
            removeClasses();

            body.addClass( 'screen-' + currentBreakpoint );
        }

    };

    // Executes once whole document has been loaded
    $( document ).ready( function () {

        currentBreakpoint = viewport.current();
        body.addClass( 'screen-' + currentBreakpoint );

    } );

    $( window ).resize(
        viewport.changed( function () {
            checkForBreakpoint();
        } )
    );

})( jQuery, ResponsiveBootstrapToolkit );