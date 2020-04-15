import 'phaser';

import PreloadScene from './scenes/preloadScene';
import Scene_Mode_Select from'./scenes/Scene_Mode_Select';
import Scene_Status from'./scenes/Scene_Status';
import Scene_Survival_Mode from'./scenes/Scene_Survival_Mode'
import GameConfig = Phaser.Types.Core.GameConfig;
import Car_Garage_Scene from './scenes/CarGarageScene';
import Race_Track_Scene from './scenes/RaceTrackScene';

const DEFAULT_WIDTH = 1920;
const DEFAULT_HEIGHT = 1080;


const config: GameConfig = {
    backgroundColor: '#ffffff',
    scale: {
        parent: 'phaser-game',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: DEFAULT_WIDTH,
        height: DEFAULT_HEIGHT
    },
    scene: [PreloadScene, Car_Garage_Scene,Scene_Mode_Select,Race_Track_Scene,
        Scene_Status,Scene_Survival_Mode],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: { y: 400 }
        }
    }
};

window.addEventListener('load', () => {
    window['game'] = new Phaser.Game(config);
});

//
