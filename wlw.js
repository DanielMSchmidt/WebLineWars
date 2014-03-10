/*{{ javascript("jslib/camera.js") }}*/
/*{{ javascript("jslib/floor.js") }}*/

TurbulenzEngine.onload = function onloadFn()
{
  var intervalID;
  var gd = TurbulenzEngine.createGraphicsDevice({});
  var md = TurbulenzEngine.createMathDevice({});

  var camera = Camera.create(md);
  camera.lookAt(md.v3BuildZero(),
          md.v3Build(0, 1, 0),
          md.v3Build(0, 20, 100));

  var floor = Floor.create(gd, md);

  function tick()
  {
    if (gd.beginFrame())
    {
      gd.clear([1.0, 1.0, 1.0, 1.0], 1.0, 0.0);

      camera.updateViewMatrix();
      camera.updateViewProjectionMatrix();
      floor.render(gd, camera);

      gd.endFrame();
    }
  }

  intervalID = TurbulenzEngine.setInterval(tick, 1000/60);
};
