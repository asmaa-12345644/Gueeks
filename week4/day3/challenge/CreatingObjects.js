class Video{
    constructor(title,uploader,time){
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }
    watch(){
        console.log(`${this.uploader} watched all ${this.time} of ${this.title}`);
    }
}

const video1 = new Video('JavaScript Basics', 'Alex', '10 minutes');
video1.watch(); 

const video2 = new Video('Python', 'Sara', '15 minutes');
video2.watch();

//bonus
const videoData = [
    ["Intro to JS", "Alice", 300],
    ["CSS Basics", "Bob", 180],
    ["React Tutorial", "Charlie", 600],
    ["Node.js Guide", "Dana", 480],
    ["Advanced JS", "Eve", 540]
  ];
  

//bonus
for (let [title, uploader, time] of videoData) {
    const video = new Video(title, uploader, time);
    video.watch();
  }
  
  