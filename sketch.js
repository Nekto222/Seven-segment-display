const nums = [          //You can add any symbol consisting of 7 segments (numbers from 0 to 6)
  [0,1,2,3,4,5],   // 0
  [1,2],           // 1
  [0,1,3,4,6],     // 2
  [0,1,2,3,6],     // 3
  [1,2,5,6],       // 4
  [0,2,3,5,6],     // 5
  [0,2,3,4,5,6],   // 6
  [0,1,2],         // 7
  [0,1,2,3,4,5,6], // 8
  [0,1,2,3,5,6],   // 9
  
  [0],[1],[2],[3],[4],[5],[6],   //Segments from 0 to 6, one by one
  [2,4,6],          // N
  [0,3,4,5,6],      // e   
  [3,4,6],          // k ('k' is not possible to write, so i used 'c' instead)  
  [3,4,5,6],        // t  
  [2,3,4,6],        // o      
  [0,1,3,4,6],      // 2    
  [],
  [0,1,3,4,6],      // 2    
  [],
  [0,1,3,4,6],      // 2    
]
let segments=[];
let numNum =0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  fill('red');
  noStroke();
  segments[0] = new Segment(width/2,50);
  segments[1] = new Segment(width/2+segments[0].w/2+segments[0].h/2,segments[0].w-segments[0].h/4,25,segments[0].w);
  segments[2] = new Segment(width/2+segments[0].w/2+segments[0].h/2,segments[0].w*2+segments[0].h/4,25,segments[0].w);
  segments[3] = new Segment(width/2,segments[0].w*2.5+segments[0].h/2);
  segments[4] = new Segment(width/2-segments[0].w/2-segments[0].h/2,segments[0].w*2+segments[0].h/4,25,segments[0].w);
  segments[5] = new Segment(width/2-segments[0].w/2-segments[0].h/2,segments[0].w-segments[0].h/4,25,segments[0].w);
  segments[6] = new Segment(width/2,segments[0].w*1.5-segments[0].h/2+segments[0].h/2);
  
}//setup


function draw() {
  background(220);
  for(let i = 0; i < nums[numNum].length; i++){
     segments[nums[numNum][i]].draw();
  }
  if(frameCount%40===0) {
     numNum++;
    if(numNum > nums.length-1) {
      numNum = 0;
    }
     }
  // for(let i = 0; i < segments.length; i++) {
  //   segments[i].draw();
  //   text(i,segments[i].x,segments[i].y);
  // }
  
}//draw




class Segment {
  constructor(x,y,w=125,h=25) {
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
  }
  
  draw() {
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,this.h);
  }
  
}//Segment