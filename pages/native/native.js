// import { Engine, Scene } from "react-babylonjs";
import {Engine, Scene, Vector3 } from '@babylonjs/core'; 

var canvas = document.getElementById("renderCanvas");
var engine = null;
var scene = null;
var sceneToRender = null;

var createDefaultEngine = function () {
  return new BABYLON.Engine(
    canvas,
    true,
    {
      preserveDrawingBuffer: true,
      stencil: true,
      disableWebGL2Support: false
    });
};

var startRenderLoop = function (engine, canvas) {
  window.engine.runRenderLoop(function () {
    if (sceneToRender && sceneToRender.activeCamera) {
      sceneToRender.render();
    }
  });
}

const createScene = () => {
  const scene = new BABYLON.Scene(window.engine);

  const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 2.5,
    3,
    new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
  const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, -1, 0), scene);
  light1.intensity = 0.5;
  const box = BABYLON.MeshBuilder.CreateBox("box", {});

  return scene;
}


Page({
  data: {
  },
  onLoad(query) {
    createDefaultEngine();
    // window.engine = asyncEngineCreation();
    // if (!window.engine) throw 'engine should not be null.';
    // startRenderLoop(window.engine, canvas);
    // window.scene = createScene();
    console.log('page onLoad', query)
  },
  onShow() {}
})