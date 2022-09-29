Blockly.Blocks['takeoff'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "離陸 (takeoff)",
        "nextStatement": true,
        "colour": "#264653"
      });
  }
};

Blockly.Blocks['land_then_takeoff'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "数秒間着陸してから離陸 (land for %1 seconds then takeoff)",
        "args0": [
          {
              "type": "input_value",
              "name": "duration"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#E76F51"
      });
  }
};

Blockly.Blocks['land'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "着陸 (land)",
        "previousStatement": true,
        "colour": "#E76F51"
      });
  }
};

Blockly.Blocks['set_speed'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "スピードを変更 (set speed to %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "speed"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm/秒", "cm/s"],
              ["in/秒", "in/s"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_forward'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "前へ進む (fly forward %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_backward'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "後ろへ下がる (fly backward %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_left'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "左へ進む (fly left %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_right'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "右へ進む (fly right %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_up'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "上昇する (fly up %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_down'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "下降する (fly down %1 %2)",
        "args0": [
          {
            "type": "input_value",
            "name": "distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['fly_xyz'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "指定した座標へ移動 (fly to x %1 y %2 z %3 %4)",
        "args0": [
          {
            "type": "input_value",
            "name": "xdistance"
          },
          {
            "type": "input_value",
            "name": "ydistance"
          },
          {
            "type": "input_value",
            "name": "zdistance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          },
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['curve'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "曲がりながら進む (curve x1 %1 y1 %2 z1 %3 x2 %4 y2 %5 z2 %6 %7)",
        "args0": [
          {
            "type": "input_value",
            "name": "x1distance"
          },
          {
            "type": "input_value",
            "name": "y1distance"
          },
          {
            "type": "input_value",
            "name": "z1distance"
          },
          {
            "type": "input_value",
            "name": "x2distance"
          },
          {
            "type": "input_value",
            "name": "y2distance"
          },
          {
            "type": "input_value",
            "name": "z2distance"
          },
          {
            "type": "field_dropdown",
            "name": "units",
            "options":
              [["cm", "cm"],
              ["in", "in"]]
          },
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['hover'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "空中で待つ (hover %1 秒)",
        "args0": [
          {
            "type": "input_value",
            "name": "duration"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['yaw_right'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "右回転 (yaw right %1 度)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['yaw_left'] = {
  init: function() {
    this.jsonInit(
      {
        "message0": "左回転 (yaw left %1 度)",
        "args0": [
          {
            "type": "input_value",
            "name": "angle"
          }
        ],
        "previousStatement": true,
        "nextStatement": true,
        "colour": "#2A9D8F"
      });
  }
};

Blockly.Blocks['flip_forward'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "前に宙返り (flip forward)",
        "nextStatement": true,
        "previousStatement": true,
        "colour": "#64c2d9"
      });
  }
};

Blockly.Blocks['flip_backward'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "後ろに宙返り (flip backward)",
        "nextStatement": true,
        "previousStatement": true,
        "colour": "#64c2d9"
      });
  }
};

Blockly.Blocks['flip_right'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "右に宙返り (flip right)",
        "nextStatement": true,
        "previousStatement": true,
        "colour": "#64c2d9"
      });
  }
};

Blockly.Blocks['flip_left'] = {
  /**
   * Show block.
   * @this Blockly.Block
   */
  init: function() {
    this.jsonInit(
      {
        "message0": "左に宙返り (flip left)",
        "nextStatement": true,
        "previousStatement": true,
        "colour": "#64c2d9"
      });
  }
};
