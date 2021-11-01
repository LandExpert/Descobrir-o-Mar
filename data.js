var APP_DATA = {
  "scenes": [
    {
      "id": "0-mainentrace",
      "name": "MainEntrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.20893699686674516,
        "pitch": -0.01961463159210375,
        "fov": 1.2933824216075565
      },
      "linkHotspots": [
        {
          "yaw": 0.2712790270015901,
          "pitch": 0.1165049803626026,
          "rotation": 0,
          "target": "1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hall",
      "name": "Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.11680280378731744,
        "pitch": 0.005583094464931548,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.006907194707189035,
          "pitch": -0.007680442470018534,
          "rotation": 0,
          "target": "2-elevator-apartments"
        },
        {
          "yaw": -0.5567793858136607,
          "pitch": -0.0009758253356704216,
          "rotation": 3.141592653589793,
          "target": "3-elevator-garage"
        },
        {
          "yaw": 0.6952655450019769,
          "pitch": 0.006896773614112561,
          "rotation": 5.497787143782138,
          "target": "4-swimingpoolaccess1"
        },
        {
          "yaw": 2.2944700266904317,
          "pitch": -0.016281308967212027,
          "rotation": 0,
          "target": "0-mainentrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-elevator-apartments",
      "name": "Elevator-Apartments",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9937760245019316,
          "pitch": -0.05331424947515373,
          "rotation": 3.141592653589793,
          "target": "1-hall"
        },
        {
          "yaw": -2.1304193393919792,
          "pitch": -0.06526883583905985,
          "rotation": 3.141592653589793,
          "target": "3-elevator-garage"
        },
        {
          "yaw": -0.23788796258395095,
          "pitch": -0.005554728830031053,
          "rotation": 4.71238898038469,
          "target": "4-swimingpoolaccess1"
        },
        {
          "yaw": 0.06994890522778263,
          "pitch": 0.0049935624757431185,
          "rotation": 1.5707963267948966,
          "target": "17-t2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-elevator-garage",
      "name": "Elevator-Garage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.668595182996583,
        "pitch": 0.011166433748076798,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.5562164326179868,
          "pitch": -0.003650484736816395,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": 0.6027328077216367,
          "pitch": -0.015115154973219802,
          "rotation": 0,
          "target": "2-elevator-apartments"
        },
        {
          "yaw": 1.6393590218064373,
          "pitch": -0.01963645907137135,
          "rotation": 0,
          "target": "47-garage1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-swimingpoolaccess1",
      "name": "SwimingPoolAccess1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "5-swimingpoolaccess2"
        },
        {
          "yaw": -2.9934427652600384,
          "pitch": 0.1420101456201408,
          "rotation": 0,
          "target": "1-hall"
        },
        {
          "yaw": -1.6375712581860888,
          "pitch": -0.08874446579813444,
          "rotation": 5.497787143782138,
          "target": "2-elevator-apartments"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-swimingpoolaccess2",
      "name": "SwimingPoolAccess2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.5866990009677426,
        "pitch": 0.01674928339478754,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.3700545854531825,
          "pitch": 0.0527790579604428,
          "rotation": 0,
          "target": "6-swimingpool1"
        },
        {
          "yaw": 3.0759444131530262,
          "pitch": 0.04471960989201662,
          "rotation": 0,
          "target": "4-swimingpoolaccess1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-swimingpool1",
      "name": "SwimingPool1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.030878911246325913,
        "pitch": 0.0037220629766210322,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.03773191415493038,
          "pitch": 0,
          "rotation": 0,
          "target": "7-swimingpool2"
        },
        {
          "yaw": 1.6271653795419008,
          "pitch": -0.010312934586625744,
          "rotation": 0,
          "target": "5-swimingpoolaccess2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-swimingpool2",
      "name": "SwimingPool2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.13022848733698034,
        "pitch": -0.2196017156205592,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.004185012233399732,
          "pitch": 0.04250168943889321,
          "rotation": 0,
          "target": "6-swimingpool1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-t1-entrance",
      "name": "T1-Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "9-t1-hall"
        },
        {
          "yaw": 1.8359692499657037,
          "pitch": -0.010866208911403774,
          "rotation": 0,
          "target": "31-t3-entrance"
        },
        {
          "yaw": -1.4913244477260665,
          "pitch": 0.0501307212966573,
          "rotation": 0,
          "target": "2-elevator-apartments"
        },
        {
          "yaw": -2.9384595529536206,
          "pitch": -0.026592746870962358,
          "rotation": 0,
          "target": "17-t2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-t1-hall",
      "name": "T1-Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.721288650747546,
          "pitch": 0.003335100850708983,
          "rotation": 0,
          "target": "8-t1-entrance"
        },
        {
          "yaw": -0.3054540129590144,
          "pitch": 0.027524292584285348,
          "rotation": 0,
          "target": "10-t1-kitchen"
        },
        {
          "yaw": -1.5012940233812486,
          "pitch": 0.03727135338682963,
          "rotation": 0,
          "target": "12-t1-livingroom"
        },
        {
          "yaw": -2.5535551892723767,
          "pitch": 0.06141403911422927,
          "rotation": 0,
          "target": "14-t1-bedroom"
        },
        {
          "yaw": 2.8309392870304873,
          "pitch": 0.07735923183883742,
          "rotation": 0,
          "target": "16-t1-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-t1-kitchen",
      "name": "T1-Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8683435047066368,
          "pitch": 0.02581883061983703,
          "rotation": 0,
          "target": "9-t1-hall"
        },
        {
          "yaw": 0.4216536665275523,
          "pitch": 0.008104163093744177,
          "rotation": 0,
          "target": "12-t1-livingroom"
        },
        {
          "yaw": 1.6264591494348748,
          "pitch": 0.02632299129567528,
          "rotation": 0,
          "target": "11-t1-barbeque"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-t1-barbeque",
      "name": "T1-Barbeque",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.1758754861625036,
        "pitch": -0.0018610994211343268,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.9840808598120345,
          "pitch": -0.001059440044610227,
          "rotation": 0,
          "target": "10-t1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-t1-livingroom",
      "name": "T1-LivingRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.38216480674955733,
          "pitch": 0.08632110540141191,
          "rotation": 0,
          "target": "13-t1-balcony1"
        },
        {
          "yaw": -2.107845325606881,
          "pitch": 0.02029785974417564,
          "rotation": 0,
          "target": "9-t1-hall"
        },
        {
          "yaw": 3.1014832541586888,
          "pitch": 0.016195273180473535,
          "rotation": 0,
          "target": "10-t1-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-t1-balcony1",
      "name": "T1-Balcony1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7247702365103095,
          "pitch": 0.015766937565548034,
          "rotation": 0,
          "target": "12-t1-livingroom"
        },
        {
          "yaw": -1.2950774857465568,
          "pitch": -0.0038835764577491716,
          "rotation": 0,
          "target": "15-t1-balcony2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-t1-bedroom",
      "name": "T1-BedRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.004441120799997478,
          "pitch": 0.05102846066280087,
          "rotation": 0,
          "target": "15-t1-balcony2"
        },
        {
          "yaw": 3.0482869502782837,
          "pitch": 0.002422183853393989,
          "rotation": 0,
          "target": "9-t1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-t1-balcony2",
      "name": "T1-Balcony2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.19332877868245646,
        "pitch": 0.0037220629766210322,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.7670674405418465,
          "pitch": 0.033539051782563334,
          "rotation": 0,
          "target": "13-t1-balcony1"
        },
        {
          "yaw": -2.9194735342717806,
          "pitch": -0.0010206521141604696,
          "rotation": 0,
          "target": "14-t1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-t1-toilet",
      "name": "T1-Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1680,
      "initialViewParameters": {
        "yaw": 0.9357650006759783,
        "pitch": -0.007444139003263572,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.855419241551914,
          "pitch": 0.007444112903208122,
          "rotation": 0,
          "target": "9-t1-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-t2-entrance",
      "name": "T2-Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.6068375553088021,
        "pitch": 0.018610344312556037,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.10908361839968528,
          "pitch": -0.025362648517269548,
          "rotation": 0,
          "target": "18-t2-hall"
        },
        {
          "yaw": -1.853369403237604,
          "pitch": 0.006677346788777072,
          "rotation": 4.71238898038469,
          "target": "8-t1-entrance"
        },
        {
          "yaw": 1.549694869841444,
          "pitch": 0.0036251994512745966,
          "rotation": 0,
          "target": "2-elevator-apartments"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-t2-hall",
      "name": "T2-Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "21-t2-livingroom"
        },
        {
          "yaw": -0.6286796093467153,
          "pitch": -0.007017635810239398,
          "rotation": 10.995574287564278,
          "target": "19-t2-kitchen"
        },
        {
          "yaw": 1.71192276753718,
          "pitch": 0.002156047249844306,
          "rotation": 0,
          "target": "17-t2-entrance"
        },
        {
          "yaw": -2.408520546465901,
          "pitch": 0.07120968599817346,
          "rotation": 12.566370614359176,
          "target": "23-t2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-t2-kitchen",
      "name": "T2-Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "18-t2-hall"
        },
        {
          "yaw": -3.0424176439969344,
          "pitch": 0.11709743071817158,
          "rotation": 0,
          "target": "20-t2-balcony1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-t2-balcony1",
      "name": "T2-Balcony1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.9371075522246723,
        "pitch": 0.0074441259532420645,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.5384604958162544,
          "pitch": 0.010249436474147444,
          "rotation": 0,
          "target": "22-t2-balcony2"
        },
        {
          "yaw": -3.0469310096189695,
          "pitch": 0.03683748798534836,
          "rotation": 0,
          "target": "19-t2-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-t2-livingroom",
      "name": "T2-LivingRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.588277410095488,
        "pitch": 0.12654594739312763,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.275415168393663,
          "pitch": 0.03308939362766772,
          "rotation": 0,
          "target": "18-t2-hall"
        },
        {
          "yaw": -1.391264235939321,
          "pitch": 0.052366558898901516,
          "rotation": 0,
          "target": "22-t2-balcony2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-t2-balcony2",
      "name": "T2-Balcony2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.49540499537378224,
        "pitch": 0.0186099447462702,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.2401204108247068,
          "pitch": 0.04090464173591002,
          "rotation": 0,
          "target": "20-t2-balcony1"
        },
        {
          "yaw": -2.698100358101007,
          "pitch": 0.005338851436290426,
          "rotation": 0,
          "target": "21-t2-livingroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-t2-corridor",
      "name": "T2-Corridor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "18-t2-hall"
        },
        {
          "yaw": -1.5513889729871941,
          "pitch": -0.009191148098629753,
          "rotation": 0,
          "target": "24-t2-bedroom"
        },
        {
          "yaw": 1.563262134250218,
          "pitch": -0.018576972700302008,
          "rotation": 0,
          "target": "30-t2-bathroom"
        },
        {
          "yaw": 3.105326789467063,
          "pitch": 0.028846739206306538,
          "rotation": 0,
          "target": "26-t2-suiteentry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-t2-bedroom",
      "name": "T2-BedRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01776275583084619,
          "pitch": -0.006660585134001806,
          "rotation": 0,
          "target": "25-t2-bedroomview"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-t2-bedroomview",
      "name": "T2-BedRoomView",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.10060681692596773,
        "pitch": -0.0018610314883140688,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -2.825161438347701,
          "pitch": 0.048082713002251865,
          "rotation": 0,
          "target": "23-t2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-t2-suiteentry",
      "name": "T2-SuiteEntry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "23-t2-corridor"
        },
        {
          "yaw": -1.793585671395462,
          "pitch": 0.05911691526564056,
          "rotation": 0,
          "target": "27-t2-suite"
        },
        {
          "yaw": -0.5400379568945493,
          "pitch": 0.04586941866886285,
          "rotation": 4.71238898038469,
          "target": "24-t2-bedroom"
        },
        {
          "yaw": -3.1321947268482777,
          "pitch": 0.020471346371412125,
          "rotation": 0,
          "target": "29-t2-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-t2-suite",
      "name": "T2-Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "28-t2-suiteview"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-t2-suiteview",
      "name": "T2-SuiteView",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.06175780430134026,
        "pitch": -0.009305157441541922,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 3.0658726418806426,
          "pitch": 0.03053366131804225,
          "rotation": 0,
          "target": "26-t2-suiteentry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-t2-toilet",
      "name": "T2-Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.5437718746570503,
        "pitch": 0.026695672172618146,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.5613140030218737,
          "pitch": 0.031229661727410374,
          "rotation": 0,
          "target": "26-t2-suiteentry"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-t2-bathroom",
      "name": "T2-BathRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.3761249871493781,
        "pitch": 0.0037220629766210322,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 2.716981957404453,
          "pitch": 0.03620644190476696,
          "rotation": 0,
          "target": "23-t2-corridor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-t3-entrance",
      "name": "T3-Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03994913976389469,
          "pitch": 0.004437583499145248,
          "rotation": 0,
          "target": "32-t3-hall"
        },
        {
          "yaw": -2.9057045921146987,
          "pitch": -0.007744094366099574,
          "rotation": 1.5707963267948966,
          "target": "17-t2-entrance"
        },
        {
          "yaw": -3.1235620047492194,
          "pitch": 0.009451147084416078,
          "rotation": 0,
          "target": "2-elevator-apartments"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-t3-hall",
      "name": "T3-Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.01884511618862028,
          "pitch": 0.05096583927976539,
          "rotation": 0,
          "target": "35-t3-livingroom"
        },
        {
          "yaw": -1.270752986689951,
          "pitch": 0.03599270119954845,
          "rotation": 0,
          "target": "38-t3-corridor1"
        },
        {
          "yaw": 1.7724482421866128,
          "pitch": -0.03133223305900579,
          "rotation": 0,
          "target": "31-t3-entrance"
        },
        {
          "yaw": 3.061750713629623,
          "pitch": 0.016232193853825905,
          "rotation": 0,
          "target": "33-t3-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-t3-kitchen",
      "name": "T3-Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.05907248480834859,
        "pitch": -0.005583094464931548,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.22805098895198128,
          "pitch": 0.02870658447840313,
          "rotation": 0,
          "target": "34-t3-balcony3"
        },
        {
          "yaw": 2.9333445805787477,
          "pitch": 0.03378861193686333,
          "rotation": 0,
          "target": "32-t3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-t3-balcony3",
      "name": "T3-Balcony3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.945162918003092,
        "pitch": 0.0037224936525923624,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.04113767775064758,
          "pitch": -0.005841452663446489,
          "rotation": 0,
          "target": "33-t3-kitchen"
        },
        {
          "yaw": -1.8388823132955885,
          "pitch": 0.00009770706935796625,
          "rotation": 0,
          "target": "42-t3-balcony4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-t3-livingroom",
      "name": "T3-LivingRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.27487501418456617,
          "pitch": 0.09164290180939005,
          "rotation": 0,
          "target": "36-t3-balcony1"
        },
        {
          "yaw": 2.8960868974483915,
          "pitch": 0.036545335977475446,
          "rotation": 0,
          "target": "32-t3-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-t3-balcony1",
      "name": "T3-Balcony1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "35-t3-livingroom"
        },
        {
          "yaw": 1.8362033592823748,
          "pitch": 0.008299324554178256,
          "rotation": 0,
          "target": "37-t3-balcony2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-t3-balcony2",
      "name": "T3-Balcony2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.7654676664404096,
        "pitch": -0.003722062976624585,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -1.46204507600428,
          "pitch": 0.007043270330893137,
          "rotation": 0,
          "target": "36-t3-balcony1"
        },
        {
          "yaw": 0.16643064394148332,
          "pitch": 0.04392594791822546,
          "rotation": 0,
          "target": "45-t3-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-t3-corridor1",
      "name": "T3-Corridor1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "40-t3-corridor2"
        },
        {
          "yaw": 1.542235319889211,
          "pitch": 0.027458791024525198,
          "rotation": 0,
          "target": "39-t3-toilet"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-t3-toilet",
      "name": "T3-Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.4982980347889807,
        "pitch": -0.014890543933487876,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.0025620991477701693,
          "pitch": -0.062248303226590807,
          "rotation": 0,
          "target": "38-t3-corridor1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-t3-corridor2",
      "name": "T3-Corridor2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "38-t3-corridor1"
        },
        {
          "yaw": 2.0573650482634944,
          "pitch": 0.02601255101751576,
          "rotation": 0,
          "target": "43-t3-bedroom1"
        },
        {
          "yaw": 0.8336857919761194,
          "pitch": 0.032712889889502605,
          "rotation": 0,
          "target": "41-t3-bedroom2"
        },
        {
          "yaw": -2.0098389569840336,
          "pitch": -0.00034267799671638954,
          "rotation": 0,
          "target": "45-t3-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-t3-bedroom2",
      "name": "T3-BedRoom2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.03773193275487685,
          "pitch": 0.05541815010800377,
          "rotation": 0,
          "target": "42-t3-balcony4"
        },
        {
          "yaw": 2.7185089197374,
          "pitch": 0.007627202171471836,
          "rotation": 0,
          "target": "40-t3-corridor2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-t3-balcony4",
      "name": "T3-Balcony4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.5289690194506047,
        "pitch": -0.0018610314883122925,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "41-t3-bedroom2"
        },
        {
          "yaw": 1.515589373941804,
          "pitch": 0.018169453592808082,
          "rotation": 0,
          "target": "34-t3-balcony3"
        },
        {
          "yaw": -1.649205980763945,
          "pitch": -0.010190109423366067,
          "rotation": 0,
          "target": "44-t3-balcony5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-t3-bedroom1",
      "name": "T3-BedRoom1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7432243046745164,
          "pitch": 0.028121708674056833,
          "rotation": 0,
          "target": "40-t3-corridor2"
        },
        {
          "yaw": -0.0396011340709812,
          "pitch": 0.037679157950529785,
          "rotation": 0,
          "target": "44-t3-balcony5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-t3-balcony5",
      "name": "T3-Balcony5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 1.9681916572603786,
        "pitch": 0.024200935208956054,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "43-t3-bedroom1"
        },
        {
          "yaw": 1.5259236163368861,
          "pitch": 0.055986954923991306,
          "rotation": 6.283185307179586,
          "target": "42-t3-balcony4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-t3-suite",
      "name": "T3-Suite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "40-t3-corridor2"
        },
        {
          "yaw": 0.5530587560434874,
          "pitch": 0.017004217534223542,
          "rotation": 0,
          "target": "46-t3-bathroom"
        },
        {
          "yaw": -2.8499259053217667,
          "pitch": 0.02921715932491864,
          "rotation": 0,
          "target": "37-t3-balcony2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-t3-bathroom",
      "name": "T3-BathRoom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -0.2443460952792087,
        "pitch": 0.014888518163740372,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": -0.01730987813741436,
          "pitch": 0.029650799263620797,
          "rotation": 0,
          "target": "45-t3-suite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-garage1",
      "name": "Garage1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.5520004154897595,
        "pitch": -0.033498646941456656,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0.026851125198133374,
          "pitch": 0.020471476760134166,
          "rotation": 0,
          "target": "3-elevator-garage"
        },
        {
          "yaw": -1.5385749577444745,
          "pitch": 0.0037221933653448502,
          "rotation": 0,
          "target": "48-garage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-garage2",
      "name": "Garage2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.542602611744794,
        "pitch": 0.03533303235091978,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "49-garage3"
        },
        {
          "yaw": 1.6020329133361058,
          "pitch": 0.10080640765329285,
          "rotation": 0,
          "target": "49-garage3"
        },
        {
          "yaw": -1.5514874410230028,
          "pitch": 0.02644991232475924,
          "rotation": 0,
          "target": "50-garage4"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-garage3",
      "name": "Garage3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.013322679869173015,
          "pitch": -0.0022203773106426183,
          "rotation": 0,
          "target": "48-garage2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-garage4",
      "name": "Garage4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": -1.5117238080682753,
        "pitch": -0.0018613318566025328,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "49-garage3"
        },
        {
          "yaw": -1.571053923297768,
          "pitch": 0.002932330321891996,
          "rotation": 0,
          "target": "51-garage5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-garage5",
      "name": "Garage5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.005370243852288681,
        "pitch": -0.014888251906501893,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "52-garage6"
        },
        {
          "yaw": 1.5694537658318293,
          "pitch": -0.020471346371422783,
          "rotation": 0,
          "target": "51-garage5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-garage6",
      "name": "Garage6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.06847061529158971,
        "pitch": -0.01861031488310516,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "47-garage1"
        },
        {
          "yaw": 1.601559273272291,
          "pitch": 0.011669185528251802,
          "rotation": 0,
          "target": "51-garage5"
        },
        {
          "yaw": -1.9273827440251772,
          "pitch": 0.007143802682065825,
          "rotation": 0,
          "target": "53-grarageexit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-grarageexit",
      "name": "GrarageExit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1824,
      "initialViewParameters": {
        "yaw": 0.7679459254767576,
        "pitch": -0.003723582132391101,
        "fov": 1.3715802068843215
      },
      "linkHotspots": [
        {
          "yaw": 1.1461929750614885,
          "pitch": 0.11782027404008666,
          "rotation": 0,
          "target": "52-garage6"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Descobrir o Mar",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
