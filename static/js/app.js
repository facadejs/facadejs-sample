/*jslint browser: true */
/*globals Facade, Gamepad, $ */

(function () {

    'use strict';

    var stage = new Facade(document.querySelector('canvas')),
        controls = new Gamepad(),
        world = new Facade.Entity().Box2D('createWorld', { canvas: stage.canvas, gravity: [ 0, 20 ] }),
        data,
        objects = {
            level: [],
            items: [],
            player: null
        };

    function generateEntityFromObject(data) {

        var entity;

        entity = new Facade.Rect(data.options);

        entity.Box2D('createObject', world, data.box2d_properties);

        return entity;

    }

    $.getJSON('data/sample.json', function (data) {

        objects.level = data.level.map(generateEntityFromObject);
        objects.items = data.items.map(generateEntityFromObject);
        objects.player = generateEntityFromObject(data.player);

    });

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

}());
