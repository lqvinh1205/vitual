import React from "react";

import styles from "./VitualTour.module.css";

import Pannellum from "../libs/Pannellum";

type Props = {};

type Viewer = ReturnType<typeof Pannellum.viewer>;

const VitualTour = (props: Props) => {
  const [viewer, setViewer] = React.useState<Viewer>();
  const [sceneId, setSceneId] = React.useState<string>("house");
  const pannellumRef = React.createRef<HTMLDivElement>();

  const changeScene = (sceneId: string) => {
    viewer?.loadScene(sceneId);
    setSceneId(sceneId);
  };

  React.useEffect(() => {
    const viewer = Pannellum.viewer(pannellumRef.current, {
      default: {
        firstScene: "house",
        sceneFadeDuration: 1000,
        autoLoad: true,
        showControls: false,
      },

      scenes: {
        house: {
          hfov: 120,
          pitch: 12.827447381555467,
          yaw: 116.75064961832777,
          type: "equirectangular",
          panorama: "https://pannellum.org//images/bma-0.jpg",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Mason Circle",
              sceneId: "sky",
              draggable: true,
            },
          ],
        },
        sky: {
          hfov: 120,
          pitch: 12.827447381555467,
          yaw: 116.75064961832777,
          type: "equirectangular",
          panorama: "https://i.imgur.com/ZBE3gS3.jpg",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Mason Circle",
              sceneId: "snow",
              draggable: true,
            },
          ],
        },
        snow: {
          hfov: 120,
          pitch: 12.827447381555467,
          yaw: 116.75064961832777,
          type: "equirectangular",
          panorama:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          hotSpots: [
            {
              pitch: -0.6,
              yaw: 37.1,
              type: "scene",
              text: "Mason Circle",
              sceneId: "house",
              draggable: true,
            },
          ],
        },
      },

      galleries: [
        {
          label: "Label 1",
          image: "https://i.imgur.com/ZBE3gS3.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image: "https://i.imgur.com/ZBE3gS3.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image: "https://i.imgur.com/ZBE3gS3.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image: "https://i.imgur.com/ZBE3gS3.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "sky",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "snow",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "snow",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "snow",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "snow",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "snow",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
        {
          label: "Label 1",
          image:
            "https://thumbs.dreamstime.com/b/snowy-mountains-panorama-4347925.jpg",
          sceneId: "snow",
        },
        {
          label: "Label 2",
          image: "https://pannellum.org//images/bma-0.jpg",
          sceneId: "house",
        },
      ],
    });
    setViewer(viewer);

    viewer.on("load", () => {
      setSceneId(viewer.getScene());
    });

    return () => viewer.destroy();
  }, [pannellumRef.current]);

  return (
    <div className={styles["vitual-tour"]}>
      <div ref={pannellumRef} className={styles["vitual-tour-wrapper"]}></div>
    </div>
  );
};

export default VitualTour;
