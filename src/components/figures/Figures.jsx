'use client';
import { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const Figures = () => {
  const scene = useRef(null);

  useEffect(() => {
    let Render = Matter.Render,
      Bodies = Matter.Bodies,
      World = Matter.World,
      Engine = Matter.Engine,
      Runner = Matter.Runner,
      Composite = Matter.Composite,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint,
      Constraint = Matter.Constraint,
      Events = Matter.Events,
      Body = Matter.Body,
      Vector = Matter.Vector;

    let engine = Engine.create();

    let render = Render.create({
      element: scene.current,
      engine: engine,
      options: {
        background: 'transparent',
        wireframes: false,
        width: scene.current.clientWidth, // Set canvas width to match container
        height: scene.current.clientHeight, // Set canvas height to match container
      },
    });

    Composite.add(engine.world, [
      // walls
      Bodies.rectangle(400, 0, 800, 50, {
        isStatic: true,
        render: { visible: false },
      }),
      Bodies.rectangle(400, 600, 800, 50, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(800, 300, 50, 600, { isStatic: true, render: { visible: false } }),
      Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: { visible: false } }),
    ]);

    let box1 = Bodies.circle(100, 100, 100, {
      render: {
        sprite: {
          texture: '/figure1.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });
    let box2 = Bodies.circle(100, 100, 100, {
      render: {
        sprite: {
          texture: '/figure2.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });
    let box3 = Bodies.circle(100, 100, 100, {
      render: {
        sprite: {
          texture: '/figure3.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });
    let box4 = Bodies.circle(100, 100, 100, {
      render: {
        sprite: {
          texture: '/figure4.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });
    let box5 = Bodies.circle(100, 100, 100, {
      render: {
        sprite: {
          texture: '/figure5.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });
    let box6 = Bodies.circle(100, 100, 100, {
      render: {
        sprite: {
          texture: '/figure6.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });
    let box7 = Bodies.circle(400, 100, 100, {
      render: {
        sprite: {
          texture: '/figure7.png',
          xScale: 0.7,
          yScale: 0.7,
        },
      },
    });

    Composite.add(engine.world, [box1, box2, box3, box4, box5, box6, box7]);

    Render.run(render);

    let runner = Runner.create();
    Runner.run(runner, engine);

    let mouse = Mouse.create(render.canvas);
    let mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.1,
        render: {
          visible: false,
        },
      },
    });

    Composite.add(engine.world, mouseConstraint);

    function createMovingRectangle() {
      const rectangleWidth = 100;
      const rectangleHeight = 100;
      const eyeRadius = 30;
      const pupilRadius = 12;
      const eyeOffsetY = -40;
      const eyeOffsetX = 50;
      const handWidth = 30;
      const handHeight = 50;

      const movingRect = Bodies.rectangle(
        render.canvas.width / 2, // Centered horizontally
        render.canvas.height - rectangleHeight / 2 - 100, // Placed at the bottom
        rectangleWidth,
        rectangleHeight,
        {
          isStatic: true, // Set as static
          render: {
            sprite: {
              texture: '/headFigure.svg',
            },
          },
        }
      );

      // Creating the left eye
      const leftEye = Bodies.circle(
        movingRect.position.x - eyeOffsetX,
        movingRect.position.y + eyeOffsetY,
        eyeRadius,
        {
          isStatic: true, // Set as static
          render: {
            fillStyle: 'white', // Eye color
          },
        }
      );

      const leftPupil = Bodies.circle(leftEye.position.x, leftEye.position.y, pupilRadius, {
        render: {
          fillStyle: 'black', // Pupil color
        },
      });

      // Creating the constraints between pupils and eyes
      const leftConstraint = Constraint.create({
        bodyA: leftPupil,
        bodyB: leftEye,
        length: 0, // Set the length to 0 to maintain a fixed distance
        stiffness: 0.5, // Adjust stiffness as needed
      });

      // Creating the right eye
      const rightEye = Bodies.circle(
        movingRect.position.x + eyeOffsetX,
        movingRect.position.y + eyeOffsetY,
        eyeRadius,
        {
          isStatic: true, // Set as static
          render: {
            fillStyle: 'white', // Eye color
          },
        }
      );

      const rightPupil = Bodies.circle(rightEye.position.x, rightEye.position.y, pupilRadius, {
        render: {
          fillStyle: 'black', // Pupil color
        },
      });

      const rightConstraint = Constraint.create({
        bodyA: rightPupil,
        bodyB: rightEye,
        length: 0, // Set the length to 0 to maintain a fixed distance
        stiffness: 0.5, // Adjust stiffness as needed
      });

      const leftRect = Bodies.rectangle(
        render.canvas.width * 0.1, // Start from the left side (10% from the left)
        movingRect.position.y + rectangleHeight / 2 - handHeight / 2,
        handWidth,
        handHeight,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: '/handFigure.svg',
            },
          },
        }
      );

      const rightRect = Bodies.rectangle(
        render.canvas.width * 0.9, // End at the right side (90% from the left)
        movingRect.position.y + rectangleHeight / 2 - handHeight / 2,
        handWidth,
        handHeight,
        {
          isStatic: true,
          render: {
            sprite: {
              texture: '/handFigure.svg',
            },
          },
        }
      );

      World.add(engine.world, [
        movingRect,
        leftEye,
        leftPupil,
        leftConstraint,
        rightEye,
        rightPupil,
        rightConstraint,
        rightRect,
        leftRect,
      ]);

      // Function to update pupil positions
      function updatePupilPosition() {
        const scaleFactor = 0.03; // Adjust the scaling factor for the movement
        const maxDistance = 20; // Adjust the maximum distance the pupils can move

        if (leftEye && rightEye && leftPupil && rightPupil) {
          const mousePosition = mouseConstraint.mouse.position;
          const leftEyePos = leftEye.position;
          const rightEyePos = rightEye.position;

          const leftEyeToMouse = Vector.sub(mousePosition, leftEyePos);
          const rightEyeToMouse = Vector.sub(mousePosition, rightEyePos);

          const leftEyeToPupil = Vector.mult(Vector.normalise(leftEyeToMouse), scaleFactor * maxDistance);
          const rightEyeToPupil = Vector.mult(Vector.normalise(rightEyeToMouse), scaleFactor * maxDistance);

          // Gradually move left pupil towards the target position
          leftPupil.position.x += (leftEyePos.x + leftEyeToPupil.x - leftPupil.position.x) * 0.2;
          leftPupil.position.y += (leftEyePos.y + leftEyeToPupil.y - leftPupil.position.y) * 0.2;

          // Gradually move right pupil towards the target position
          rightPupil.position.x += (rightEyePos.x + rightEyeToPupil.x - rightPupil.position.x) * 0.2;
          rightPupil.position.y += (rightEyePos.y + rightEyeToPupil.y - rightPupil.position.y) * 0.2;
        }

        requestAnimationFrame(updatePupilPosition); // Loop the function
      }

      // Start updating pupil positions
      updatePupilPosition();

      // Start the engine

      Matter.Runner.run(engine);
    }

    setTimeout(() => {
      createMovingRectangle();
    }, 1000);
  }, []);

  return <div ref={scene} className="container-figures" />;
};
export default Figures;
