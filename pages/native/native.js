
import * as BABYLON from 'babylonjs'
import { Engine } from '@babylonjs/core/Engines/engine';
import { Scene } from '@babylonjs/core/scene';
import * as PIXI from "@tbminiapp/pixi-miniprogram-engine";

const createScene = function(engine, canvas) {
  const scene = new BABYLON.Scene(engine);

  const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
  camera.attachControl(canvas, true);

  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

  const box = BABYLON.MeshBuilder.CreateBox("box", {});

  return scene;
};

Page({
  onCanvasReady() {
    my._createCanvas({
      id: "canvas",
      success: (canvas) => {
        const systemInfo = my.getSystemInfoSync();
        const dpr = systemInfo.pixelRatio;
        const windowWidth = systemInfo.windowWidth;
        const windowHeight = systemInfo.windowHeight;
        canvas.width = windowWidth * dpr;
        canvas.height = windowHeight * dpr;
        this.pixiCanvas = canvas;

        const ctx = canvas.getContext('webgl'); // canvas.getContext('webgl')
        const engine = new Engine(canvas, true);
        var scene = createScene(engine, canvas);

        engine.runRenderLoop(function () {
          console.log("start");
          // need draw ctx
           scene.render();
        });
      },
    });
  },

  onTouchHandle(event) {
  },
  
  onReady() {
  }
});