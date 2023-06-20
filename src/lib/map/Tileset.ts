export const normalTilemap = [
  // grass/road 9 square
  {background: "grass", x: 2, y: 5, walkable: true, placeable: true},
  {background: "road-bottom-right-grass", x: 1, y: 4, walkable: true, placeable: true},
  {background: "top-road-bottom-grass", x: 2, y: 4, walkable: true, placeable: true},
  {background: "road-bottom-left-grass", x: 3, y: 4, walkable: true, placeable: true},
  {background: "left-road-right-grass", x: 1, y: 5, walkable: true, placeable: true},
  {background: "left-grass-right-road", x: 3, y: 5, walkable: true, placeable: true},
  {background: "road-top-right-grass", x: 1, y: 6, walkable: true, placeable: true},
  {background: "top-grass-bottom-road", x: 2, y: 6, walkable: true, placeable: true},
  {background: "road-top-left-grass", x: 3, y: 6, walkable: true, placeable: true},

  // grass/road 4 square
  {background: "grass-bottom-right-road", x: 4, y: 4, walkable: true, placeable: true},
  {background: "grass-bottom-left-road", x: 5, y: 4, walkable: true, placeable: true},
  {background: "grass-top-right-road", x: 4, y: 5, walkable: true, placeable: true},
  {background: "grass-top-left-road", x: 5, y: 5, walkable: true, placeable: true},

  // grass/road diagonal 
  {background: "grass-bottom-left-top-right-road", x: 4, y: 6, walkable: true, placeable: true},
  {background: "grass-top-left-bottom-right-road", x: 5, y: 6, walkable: true, placeable: true},

  // water/grass 9 square 
  {background: "water", x: 2, y: 3, walkable: false, placeable: false},
  {background: "water-bottom-right-grass", x: 6, y: 4, walkable: false, placeable: false},
  {background: "water-top-grass-bottom", x: 7, y: 4, walkable: false, placeable: false},
  {background: "water-bottom-left-grass", x: 8, y: 4, walkable: false, placeable: false},
  {background: "water-left-grass-right", x: 6, y: 5, walkable: false, placeable: false},
  {background: "water-right-grass-left", x: 8, y: 5, walkable: false, placeable: false},
  {background: "water-top-right-grass", x: 6, y: 6, walkable: false, placeable: false},
  {background: "water-bottom-grass-top", x: 7, y: 6, walkable: false, placeable: false},
  {background: "water-top-left-grass", x: 8, y: 6, walkable: false, placeable: false},

  // water/grass 4 square
  {background: "grass-bottom-right-water", x: 9, y: 4, walkable: false, placeable: false},
  {background: "grass-bottom-left-water", x: 10, y: 4, walkable: false, placeable: false},
  {background: "grass-top-right-water", x: 9, y: 5, walkable: false, placeable: false},
  {background: "grass-top-left-water", x: 10, y: 5, walkable: false, placeable: false},

  // water/grass diagonal 
  {background: "water-top-left-bottom-right-grass", x: 9, y: 6, walkable: false, placeable: false},
  {background: "water-bottom-left-top-right-grass", x: 10, y: 6, walkable: false, placeable: false},

  // water/road 9 square
  {background: "road", x: 12, y: 5, walkable: true, placeable: true},
  {background: "water-bottom-right-road", x:11, y: 4, walkable: false, placeable: false},
  {background: "water-top-road-bottom", x: 12, y: 4, walkable: false, placeable: false},
  {background: "water-bottom-left-road", x: 13, y: 4, walkable: false, placeable: false},
  {background: "water-left-road-right", x: 11, y: 5, walkable: false, placeable: false},
  {background: "water-right-road-left", x: 13, y: 5, walkable: false, placeable: false},
  {background: "water-top-right-road", x: 11, y: 6, walkable: false, placeable: false},
  {background: "water-bottom-road-top", x: 12, y: 6, walkable: false, placeable: false},
  {background: "water-top-left-road", x: 13, y: 6, walkable: false, placeable: false},

  // water/road 4 square
  {background: "road-bottom-right-water", x: 14, y: 4, walkable: false, placeable: false},
  {background: "road-bottom-left-water", x: 15, y: 4, walkable: false, placeable: false},
  {background: "road-top-right-water", x: 14, y: 5, walkable: false, placeable: false},
  {background: "road-top-left-water", x: 15, y: 5, walkable: false, placeable: false},
  
  // water/road diagonal
  {background: "water-bottom-right-top-left-road", x: 14, y: 6, walkable: false, placeable: false},
  {background: "water-top-right-bottom-left-road", x: 15, y: 6, walkable: false, placeable: false},

  // wall/grass 9 square
  {background: "wall", x: 4, y: 3, walkable: true, placeable: false},
  {background: "wall-bottom-right-grass", x:16, y: 4, walkable: false, placeable: false},
  {background: "wall-top-grass-bottom", x: 17, y: 4, walkable: false, placeable: false},
  {background: "wall-bottom-left-grass", x: 18, y: 4, walkable: false, placeable: false},
  {background: "wall-left-grass-right", x: 16, y: 5, walkable: false, placeable: false},
  {background: "wall-right-grass-left", x: 18, y: 5, walkable: false, placeable: false},
  {background: "wall-top-right-grass", x: 16, y: 6, walkable: false, placeable: false},
  {background: "wall-bottom-grass-top", x: 17, y: 6, walkable: false, placeable: false},
  {background: "wall-top-left-grass", x: 18, y: 6, walkable: false, placeable: false},
  
  // wall/grass 4 square
  {background: "grass-bottom-right-wall", x: 19, y: 4, walkable: false, placeable: false},
  {background: "grass-bottom-left-wall", x: 20, y: 4, walkable: false, placeable: false},
  {background: "grass-top-right-wall", x: 19, y: 5, walkable: false, placeable: false},
  {background: "grass-top-left-wall", x: 20, y: 5, walkable: false, placeable: false},

  // wall/grass diagonal
  {background: "wall-bottom-right-top-left-grass", x: 19, y: 6, walkable: false, placeable: false},
  {background: "wall-top-right-bottom-left-grass", x: 20, y: 6, walkable: false, placeable: false},


  // wall/water "9" square
  {background: "wall-bottom-right-water", x:16, y: 1, walkable: false, placeable: false},
  {background: "wall-top-water-bottom", x: 17, y: 1, walkable: false, placeable: false},
  {background: "wall-bottom-left-water", x: 18, y: 1, walkable: false, placeable: false},
  {background: "wall-left-water-right", x: 16, y: 2, walkable: false, placeable: false},
  {background: "wall-right-water-left", x: 18, y: 2, walkable: false, placeable: false},
  {background: "wall-top-right-water", x: 16, y: 3, walkable: false, placeable: false},
  {background: "wall-bottom-water-top", x: 17, y: 3, walkable: false, placeable: false},
  {background: "wall-top-left-water", x: 18, y: 3, walkable: false, placeable: false},
  
  // wall/water 4 square
  {background: "water-bottom-right-wall", x: 19, y: 1, walkable: false, placeable: false},
  {background: "water-bottom-left-wall", x: 20, y: 1, walkable: false, placeable: false},
  {background: "water-top-right-wall", x: 19, y: 2, walkable: false, placeable: false},
  {background: "water-top-left-wall", x: 20, y: 2, walkable: false, placeable: false},

  // wall/water diagonal
  {background: "wall-bottom-right-top-left-water", x: 19, y: 3, walkable: false, placeable: false},
  {background: "wall-top-right-bottom-left-water", x: 20, y: 3, walkable: false, placeable: false},

  // wall/road 9 square
  {background: "wall-bottom-right-road", x:16, y: 7, walkable: false, placeable: false},
  {background: "wall-top-road-bottom", x: 17, y: 7, walkable: false, placeable: false},
  {background: "wall-bottom-left-road", x: 18, y: 7, walkable: false, placeable: false},
  {background: "wall-left-road-right", x: 16, y: 8, walkable: false, placeable: false},
  {background: "wall-right-road-left", x: 18, y: 8, walkable: false, placeable: false},
  {background: "wall-top-right-road", x: 16, y: 9, walkable: false, placeable: false},
  {background: "wall-bottom-road-top", x: 17, y: 9, walkable: false, placeable: false},
  {background: "wall-top-left-road", x: 18, y: 9, walkable: false, placeable: false},
  
  // wall/road 4 square
  {background: "road-bottom-right-wall", x: 19, y: 7, walkable: false, placeable: false},
  {background: "road-bottom-left-wall", x: 20, y: 7, walkable: false, placeable: false},
  {background: "road-top-right-wall", x: 19, y: 8, walkable: false, placeable: false},
  {background: "road-top-left-wall", x: 20, y: 8, walkable: false, placeable: false},

  // wall/road diagonal
  {background: "wall-bottom-right-top-left-road", x: 19, y: 9, walkable: false, placeable: false},
  {background: "wall-top-right-bottom-left-road", x: 20, y: 9, walkable: false, placeable: false}

  //{background: "", x: 0, y: 0, walkable: false, placeable: false},
]