require.config({
    'paths': {
        'jquery': '../bower_components/jquery/dist/jquery.min',
        'facade': '../bower_components/facade.js/facade.min',
        'gamepadjs': '../bower_components/gamepad.js/gamepad.min',
        'box2dweb': '../bower_components/facadejs-Box2D-plugin/vendor/box2dweb/Box2dWeb-2.1.a.3',
        'facadejs-Box2D-plugin': '../bower_components/facadejs-Box2D-plugin/facadejs-Box2D'
    },
    'shim': {
        'box2dweb': {
            'exports': 'Box2D'
        }
    }
});

define(['app']);
