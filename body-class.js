(function ( $, viewport ) {

    var body = $( 'body' ),
        breakpoints = [ "xs", "sm", "md", "lg" ];

    var removeClasses = function () {
        jQuery.map(breakpoints, function ( breakpoint ) {
            body.removeClass( 'screen-' + breakpoint );
        } )
    };

    var checkForBreakpoint = function () {

        removeClasses();

        body.addClass( 'screen-' + viewport.current() );

    };

    // Executes once whole document has been loaded
    $( document ).ready( function () {

        checkForBreakpoint();

    } );

    $( window ).resize(
        viewport.changed( function () {
            checkForBreakpoint();
        } )
    );

})( jQuery, ResponsiveBootstrapToolkit );
