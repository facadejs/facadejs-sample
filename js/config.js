require.config({
    'paths': {
        'box2dweb': 'libs/Box2dWeb-2.1.a.3.min',
        'facade': 'libs/facade.min',
        'facadejs-Box2D-plugin': 'libs/facadejs-Box2D',
        'gamepadjs': 'libs/gamepad.min',
        'jquery': 'libs/jquery.min'
    },
    'shim': {
        'box2dweb': {
            'exports': 'Box2D'
        }
    }
});

define(['app']);
