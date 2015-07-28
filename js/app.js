/*jslint browser: true */
/*globals Facade, Gamepad, $ */

define(function (require) {

    'use strict';

    var $ = require('jquery'),
        Facade = require('facade'),
        Gamepad = require('gamepadjs'),
        stage = new Facade(document.querySelector('canvas')),
        controls = new Gamepad(),
        world,
        data = {
            "level": [
                {
                    "options": {
                        "x": 0,
                        "y": 0,
                        "width": 1000,
                        "height": 10
                    }
                },
                {
                    "options": {
                        "x": 0,
                        "y": 590,
                        "width": 1000,
                        "height": 10
                    }
                },
                {
                    "options": {
                        "x": 0,
                        "y": 0,
                        "width": 10,
                        "height": 800
                    },
                    "box2d_properties": {
                        "friction": 0
                    }
                },
                {
                    "options": {
                        "x": 990,
                        "y": 0,
                        "width": 10,
                        "height": 800
                    },
                    "box2d_properties": {
                        "friction": 0
                    }
                },
                {
                    "options": {
                        "x": 100,
                        "y": 200,
                        "width": 200,
                        "height": 10,
                        "fillStyle": "#f00"
                    }
                },
                {
                    "options": {
                        "x": 400,
                        "y": 400,
                        "width": 200,
                        "height": 10,
                        "fillStyle": "#f00"
                    }
                },
                {
                    "options": {
                        "x": 700,
                        "y": 200,
                        "width": 200,
                        "height": 10,
                        "fillStyle": "#f00"
                    }
                }
            ],
            "items": [
                {
                    "options": {
                        "x": 175,
                        "y": 50,
                        "width": 50,
                        "height": 50
                    },
                    "box2d_properties": {
                        "type": "dynamic",
                        "rotate": true,
                        "restitution": 0.5
                    }
                },
                {
                    "options": {
                        "x": 775,
                        "y": 50,
                        "width": 50,
                        "height": 50
                    },
                    "box2d_properties": {
                        "type": "dynamic",
                        "rotate": true,
                        "restitution": 0.5
                    }
                },
                {
                    "options": {
                        "x": 475,
                        "y": 250,
                        "width": 50,
                        "height": 50
                    },
                    "box2d_properties": {
                        "type": "dynamic",
                        "rotate": true,
                        "restitution": 0.5
                    }
                }
            ],
            "player": {
                "options": {
                    "x": 450,
                    "y": 490,
                    "width": 50,
                    "height": 50,
                    "fillStyle": "#0f0"
                },
                "box2d_properties": {
                    "type": "dynamic",
                    "rotate": true,
                    "friction": 0.5
                }
            }
        },
        objects = {
            level: [],
            items: [],
            player: null
        };

    require('facadejs-Box2D-plugin');

    world = new Facade.Entity().Box2D('createWorld', { canvas: stage.canvas, gravity: [ 0, 20 ] });

    function generateEntityFromObject(data) {

        var entity;

        entity = new Facade.Rect(data.options);

        entity.Box2D('createObject', world, data.box2d_properties);

        return entity;

    }

    objects.level = data.level.map(generateEntityFromObject);
    objects.items = data.items.map(generateEntityFromObject);
    objects.player = generateEntityFromObject(data.player);

    stage.resizeForHDPI();

    stage.draw(function () {

        this.clear();

        world.Box2D('step');

        this.addToStage([
            objects.level,
            objects.items,
            objects.player
        ]);

        // world.Box2D('drawDebug');

    });

    controls.on('press', 'button_1', function () {

        objects.player.Box2D('setVelocity', null, -15);

    });

    controls.on('hold', 'd_pad_left', function () {

        objects.player.Box2D('setVelocity', -5, null);

    });

    controls.on('hold', 'd_pad_right', function () {

        objects.player.Box2D('setVelocity', 5, null);

    });

    controls.on('hold', 'stick_axis_left', function (e) {

        if (e.value[0] < -0.5) {

            controls.trigger('hold', 'd_pad_left');

        } else if (e.value[0] > 0.5) {

            controls.trigger('hold', 'd_pad_right');

        }

    });

});
