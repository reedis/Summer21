const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(f = [[]]) {
      this.field = f;
      this.locationX = 0;
      this.locationY = 0;
      this.field[0][0] = pathCharacter;
  }

  runGame() {
      let stillPlaying = true;
      while(stillPlaying) {
          this.print();
          this.askQuestion();
          if(!this.isInBounds()) {
              console.log('Out of bounds!');
              stillPlaying = false;
              break;
          } else if(this.isHole()) {
              console.log('You fell down a hole!');
              stillPlaying = false;
              break;
          } else if(this.isHat()) {
              console.log('Congrats, you found the hat!');
              stillPlaying = false;
              break;
          }

          this.field[this.locationY][this.locationX] = pathCharacter;
      }
  }

  askQuestion() {
      const answer = prompt('Which way? ').toUpperCase();
      switch(answer){
          case 'W':
              this.locationY -= 1;
              break;
            case 'S':
                this.locationY += 1;
                break;
            case 'A':
                this.locationX -= 1;
                break;
            case 'D':
                this.locationX += 1;
                break;
            default:
                console.log('enter "W, A, S, or D to move.');
                this.askQuestion();
                break;
      }
  }

  isInBounds() {
      return (
          this.locationX >= 0 && 
          this.locationY >= 0 &&
          this.locationX <= this.field[0].length &&
          this.locationY <= this.field.length);
  }

  isHat() {
      return (this.field[this.locationY][this.locationX] === hat);
  }

  isHole() {
      return (this.field[this.locationY][this.locationX] === hole);
  }

  print() {
      for(let ii = 0; ii <this.field.length; ii++) {
        console.log(this.field[ii].join(''));
      }
  }

  static generateField(height, width, percent = 0.1) {
      const field = new Array(height).fill(0).map(el => el = new Array(width));
      for (let yy = 0; yy < height; yy++) {
          for (let xx = 0; xx < width; xx++) {
              const prob = Math.random();
              field[yy][xx] = prob > percent ? fieldCharacter : hole;
          }
      }

      const hatLoc = {
          x: Math.floor(Math.random() * width),
          y: Math.floor(Math.random() * height)
      };
      while(hatLoc.x === 0 && hatLoc.y === 0) {
          hatLoc.x = Math.floor(Math.random()* width);
          hatLoc.y = Math.floor(Math.random() * height);
      }
      field[hatLoc.y][hatLoc.x] = hat;
      return field;
  }

}

const myfield = new Field(Field.generateField(10, 10, 0.2));
myfield.runGame();
