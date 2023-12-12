import React, { useRef, useEffect } from 'react';
import Matter from 'matter-js';
import blackFigure from '../../../public/blackFigure.png';
const MatterComponent = () => {
  const scene = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const {
      Engine,
      Render,
      Runner,
      MouseConstraint,
      Mouse,
      Composite,
      Bodies,
    } = Matter;

    // create engine
    const engine = Engine.create();
    const world = engine.world;

    // create renderer
    const render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        width: 800,
        height: 600,
        showVelocity: true,
        background: 'transparent',
        wireframeBackground: 'transparent',
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    // add bodies
    Composite.add(world, [
      // falling blocks
      Bodies.circle(200, 100, 60, {
        frictionAir: 0.001,
        render: {
          sprite: {
            texture: blackFigure,
          },
        },
      }),

      // walls
      Bodies.rectangle(400, 0, 800, 50, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'transparent',
        },
      }),
      Bodies.rectangle(400, 600, 800, 50, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'transparent',
        },
      }),
      Bodies.rectangle(800, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'transparent',
        },
      }),
      Bodies.rectangle(0, 300, 50, 600, {
        isStatic: true,
        render: {
          fillStyle: 'transparent',
          strokeStyle: 'transparent',
        },
      }),
    ]);

    // add mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(world, mouseConstraint);

    // keep the mouse in sync with rendering
    render.mouse = mouse;

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: 800, y: 600 },
    });

    return () => {
      // Teardown logic when component unmounts
      Runner.stop(runner);
      Render.stop(render);
      // Dispose any other resources if necessary
    };
  }, []);

  return <div ref={scene}></div>;
};

export default MatterComponent;
